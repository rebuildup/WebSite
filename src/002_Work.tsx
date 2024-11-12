import React from "react";
import VideoGallery from "./007_VideoGallery";

const Work: React.FC = () => {
    return (
        <div className="page">
            <div className="sentence">
                <div className="space" />
                <div className="space" />
                <div className="title">
                    <h1>Work</h1>
                </div>
                <div className="main">
                    <VideoGallery />
                    <br />
                    <br />
                </div>
                <div className="space" />
                <div className="space" />
                <div className="space" />
                <div className="space" />
            </div>
        </div>
    );
};

export default Work;
