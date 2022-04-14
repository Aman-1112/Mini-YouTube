import React from 'react';
import './VideoItem.css';

function VideoItem(props) {
return (
    <div className="VideoItem">
        <div onClick={()=>{props.handleSelectedVideo(props.video)}}>
        <img src={props.video.snippet.thumbnails.medium.url} alt="shit happened here..."/>
        <p>{props.video.snippet.title}</p>
        </div>
    </div>
);
}
export default VideoItem;