import React, {useEffect, useState} from 'react';

import {
    getDatabase,
    ref,
    query,
    get,
    orderByKey,
    startAt,
    limitToFirst,
} from 'firebase/database';

const UseVideos = (page, limit) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);


    function newObj(prevState, snapshot){
        let newObj = [...prevState];
        let keyIDs = [];
        prevState.map(video => {
            keyIDs.push(video.youtubeID);
        });
        let keyIDSet = new Set(keyIDs);
        Object.values(snapshot.val()).map(video => {
            if(!keyIDSet.has(video.youtubeID)){
                newObj.push(video);
            }
        });
        return newObj;
    }
    useEffect(() => {
        async function fetchVideos(){
            // database related works
            const db = getDatabase();
            const videoRef = ref(db, 'videos');
            const videoQuery = query(
                videoRef,
                orderByKey(),
                startAt('' + page),
                limitToFirst(limit)
            )


            try{
                setError(false);
                setLoading(true);

                // request from database
                const snapshot = await get(videoQuery);

                setLoading(false);

                if(snapshot.exists()){
                    setVideos(prevState => {
                        return newObj(prevState, snapshot);
                    });
                } else{
                    // console.log('its been called');
                    setHasMore(false);
                }

            } catch (err){
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        setTimeout(() => {
            fetchVideos()
                .then(data => {
                    // console.log(data);
                })
                .catch(err => {
                    // console.log(err);
            });
        }, 2000);


    }, [page]);

    return {
        loading,
        error,
        videos,
        hasMore,
    };
};

export default UseVideos;