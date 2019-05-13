import React from 'react'; 
import '../styles/videoItem.css';

/*const VideoItem = (props) => {
    return <div>{ props.video.snippet.title}</div>
};

OR  with array distructuring  --> */
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" 
                alt={video.snippet.title} 
                src= {video.snippet.thumbnails.medium.url} 
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};
   
   export default VideoItem;