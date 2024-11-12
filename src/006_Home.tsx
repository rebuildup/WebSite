import React, { useRef, useEffect } from "react";
import Reel from './assets/002_video/20241103_reel.mp4';

const Home: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        // 動画メタデータが読み込まれたときに実行するイベントリスナー
        const handleLoadedMetadata = () => {
            if (videoRef.current) {
                // 動画の長さを取得し、再生開始位置をランダムに設定
                const duration = videoRef.current.duration;
                const randomStart = Math.random() * duration; // 0から動画の長さまでのランダムな位置
                videoRef.current.currentTime = randomStart;   // 再生位置をランダムに設定
            }
        };

        const videoElement = videoRef.current;
        // 動画のメタデータが読み込まれたらランダム位置に設定するイベントリスナーを追加
        if (videoElement) {
            videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
        }

        // クリーンアップ
        return () => {
            if (videoElement) {
                videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
            }
        };
    }, []);

    return (
        <div className="page">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                className="home-video"
            >
                <source src={Reel} type="video/mp4" />
                お使いのブラウザは動画タグをサポートしていません。
            </video>
        </div>
    );
};

export default Home;