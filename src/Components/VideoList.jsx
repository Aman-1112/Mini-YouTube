import React from 'react';
import VideoItem from './VideoItem';

function VideoList(props) {

        let VL=props.videos.map((video, index) =>{
            return (
                <li className="list-group-item">
                    <VideoItem
                    key={index}
                    video={video}
                    handleSelectedVideo={props.handleSelectedVideo}
                    />
                </li>
                
            );
        });
        return (
            <ul className="list-group">
                {VL}
            </ul>
        )
}
export default VideoList;