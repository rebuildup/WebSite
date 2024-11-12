import React from "react";

const Link: React.FC = () => {
  return (
    <div className="page">
      <div className="sentence">
        <div className="space" />
        <div className="space" />
        <div className="title">
          <h1>Link</h1>
        </div>
        <div className="main">
          <h1>X</h1>
          <a
            href="https://x.com/361do_sleep"
            target="_blank"
            rel="noopener noreferrer"
          >
            @361do_sleep
          </a>
          <p>動画などを投稿してる唯一のSNSです</p>
          <br />
          <br />
          <h1>Github</h1>
          <a
            href="https://github.com/rebuildup"
            target="_blank"
            rel="noopener noreferrer"
          >
            rebuildup
          </a>
          <p>頑張ってリポジトリを増やしたい...今はなにもないです</p>
        </div>
      </div>
    </div>
  );
};

export default Link;
