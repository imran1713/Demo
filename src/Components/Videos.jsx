import React, {useState} from 'react';
import classes from "../styles/Videos.module.css";
import Video from "./Video.jsx";
import useVideos from "../Hooks/useVideos.jsx";
import {NavLink} from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
const Videos = () => {
    const [page, setPage] = useState(1);
    const {loading, error, videos, hasMore} = useVideos(page, 8);

    return (
        <div>
            { videos.length > 0 &&
                (<InfiniteScroll
                    className={classes.videos}
                    dataLength={videos.length}
                    hasMore={hasMore}
                    next={() => setPage(page + 8)}
                    loader={<h4>loading...!</h4>}
                >
                    {videos.map(video => video.noq > 0 ? (
                        <NavLink
                            key={video.youtubeID}
                            to={`/quiz/${video.youtubeID}`}
                            noq={video.noq}
                        >
                            <Video
                                title={video.title}
                                id={video.youtubeID}
                                noq={video.noq}
                            />
                        </NavLink>
                    ) : (
                        <Video
                            key={video.youtubeID}
                            title={video.title}
                            id={video.youtubeID}
                            noq={video.noq}
                        />
                    ))}
                </InfiniteScroll>)

            }

            {!loading && videos.length === 0 && <div>No Data Found!</div>}
            {error && <div>There was an error</div>}
            {loading && <div>There was an error</div>}

        </div>
    );
};

export default Videos;