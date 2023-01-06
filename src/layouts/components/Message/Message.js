import { useState } from 'react';

function Message() {
    const [inputText, setInputText] = useState('');
    const [message, setMessage] = useState([]);

    return (
        <>
            <div className="container_fullwidth">
                <div className="container">
                    <div className="content-page">
                        <h2>Message</h2>
                        <div className="wrap-message-page">
                            <div className="col-left-message-page">
                                <ul>
                                    <li className="element-chat active-mess">
                                        <p className="name-shop">Repbuying.com</p>
                                        <p className="last-mess">Thanks you, lorem ipsum text</p>
                                    </li>
                                    <li className="element-chat">
                                        <p className="name-shop">Repbuying.com</p>
                                        <p className="last-mess">Thanks you, lorem ipsum text</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-right-message-page">
                                <div className="box-chat">
                                    <h3>Repbuying.com Store</h3>
                                    <div className="chat-content">
                                        <div className="mess-you">
                                            <p>Shop minh ban nhu the nao?</p>
                                        </div>
                                        <div className="mess-me">
                                            <p>Shop minh ban nhu the nao?</p>
                                        </div>
                                        <div className="mess-you">
                                            <p>Shop minh ban nhu the nao?</p>
                                        </div>
                                        <div className="mess-me">
                                            <p>Shop minh ban nhu the nao?</p>
                                        </div>
                                        <div className="mess-you">
                                            <p>Shop minh ban nhu the nao?</p>
                                        </div>
                                        {message.map((value, index) => {
                                            return (
                                                <div key={index} className="mess-me">
                                                    <p>{value}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="input-chat">
                                        <input
                                            type="text"
                                            name="chat-content"
                                            placeholder="Nhap gi do..."
                                            value={inputText}
                                            onChange={(e) => setInputText(e.target.value)}
                                            onKeyPress={(e) => {
                                                if (e.code === 'Enter' && inputText !== '') {
                                                    var mess = message;
                                                    mess.push(inputText);
                                                    setMessage(mess);
                                                    setInputText('');
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Message;
