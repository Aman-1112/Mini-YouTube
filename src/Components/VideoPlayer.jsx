import React from 'react';
import './VideoPlayer.css';

function VideoPlayer(props) {
return (
    <div>
        <div className="containerCopy">
        <iframe className="responsive-iframe" title="Video Player" src={`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`}></iframe>
        </div>
        <h4>{props.selectedVideo.snippet.title}</h4>
    </div>
    
);
}
export default VideoPlayer;