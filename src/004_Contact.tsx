import React from "react";

const Contact: React.FC = () => {
    return (
        <div className="page">
            <div className="sentence">
                <div className="space" />
                <div className="space" />
                <div className="title">
                    <h1>Contact</h1>
                </div>
                <div className="main">
                    <h1>Mail</h1>
                    <p>rebuild.up.up※gmail.com</p>
                    <p>※を@に置き換えてください</p>
                    <br />
                    <p>お問い合わせ・制作依頼(映像制作/デザイン等)・削除依頼は<a href="https://forms.gle/ohxcUreQs8unezy38" target="_blank" rel="noopener noreferrer">こちら</a>からお願いします</p>
                    <br />
                    <h1>X</h1>
                    <a href="https://x.com/361do_sleep" target="_blank" rel="noopener noreferrer">@361do_sleep</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;