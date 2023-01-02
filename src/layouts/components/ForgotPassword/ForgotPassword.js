import styles from './ForgotPassword.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ForgotPassword() {
    var checkInput = function (e) {
        if (e.target.value.length > 0) {
            e.target.classList.add(cx('active'));
        } else {
            e.target.classList.remove(cx('active'));
        }
    };
    const [data, setData] = useState({ username: '', newPassword: '', oldPassword: '' });

    const setInput = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setData((pre) => ({ ...pre, username: value }));
        } else if (name === 'old password') {
            setData((pre) => ({ ...pre, password: value }));
        } else if (name === 'new password') {
            setData((pre) => ({ ...pre, password: value }));
        }
    };

    return (
        <>
            <div className={cx('container_fullwidth')}>
                <div className={cx('container')}>
                    <div className={cx('grid__row')}>
                        <div className={cx('login')}>
                            <div className={cx('login-main')}>
                                <div className={cx('title')}>
                                    <div className={cx('logo')}>
                                        <img src={images.logo} alt="" />
                                    </div>
                                    <span>Forgot Password</span>
                                </div>
                                <div className={cx('input-site')}>
                                    <input
                                        type="text"
                                        className={cx('input-text')}
                                        onBlur={checkInput}
                                        name="username"
                                        onChange={setInput}
                                        value={data.username}
                                    />
                                    <label className={cx('title', 'label-input')}>Username *</label>
                                </div>
                                <div className={cx('input-site')}>
                                    <input
                                        type="password"
                                        className={cx('input-text')}
                                        onBlur={checkInput}
                                        name="old password"
                                        onChange={setInput}
                                        value={data.password}
                                    />
                                    <label className={cx('title', 'label-input')}>Old Password *</label>
                                </div>
                                <div className={cx('input-site')}>
                                    <input
                                        type="password"
                                        className={cx('input-text')}
                                        onBlur={checkInput}
                                        name="new password"
                                        onChange={setInput}
                                        value={data.password}
                                    />
                                    <label className={cx('title', 'label-input')}>New Password *</label>
                                </div>
                                <button className={cx('btn', 'btn-full-width', 'blue')}>Send Confirmation</button>
                                <a href="/login" className={cx('btn', 'btn-full-width', 'white')}>
                                    Back to log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
