import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { useState } from 'react';
import * as authServices from '~/services/authServices';

const cx = classNames.bind(styles);

function Register() {
    var checkInput = function (e) {
        if (e.target.value.length > 0) {
            e.target.classList.add(cx('active'));
        } else {
            e.target.classList.remove(cx('active'));
        }
    };

    const [data, setData] = useState({ username: '', email: '', password: '', name: '', address: '' });

    const setInput = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setData((pre) => ({ ...pre, username: value }));
        } else if (name === 'email') {
            setData((pre) => ({ ...pre, email: value }));
        } else if (name === 'name') {
            setData((pre) => ({ ...pre, name: value }));
        } else if (name === 'address') {
            setData((pre) => ({ ...pre, address: value }));
        } else if (name === 'password') {
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
                                    <span>Register</span>
                                </div>
                                <div className={cx('input')}>
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
                                            type="text"
                                            className={cx('input-text')}
                                            onBlur={checkInput}
                                            name="name"
                                            onChange={setInput}
                                            value={data.name}
                                        />
                                        <label className={cx('title', 'label-input')}>Name *</label>
                                    </div>
                                    <div className={cx('input-site')}>
                                        <input
                                            type="email"
                                            className={cx('input-text')}
                                            onBlur={checkInput}
                                            name="email"
                                            onChange={setInput}
                                            value={data.email}
                                        />
                                        <label className={cx('title', 'label-input')}>Email *</label>
                                    </div>
                                    <div className={cx('input-site')}>
                                        <input
                                            type="text"
                                            className={cx('input-text')}
                                            onBlur={checkInput}
                                            name="address"
                                            onChange={setInput}
                                            value={data.address}
                                        />
                                        <label className={cx('title', 'label-input')}>Address *</label>
                                    </div>
                                    <div className={cx('input-site')}>
                                        <input
                                            type="password"
                                            className={cx('input-text')}
                                            onBlur={checkInput}
                                            name="password"
                                            onChange={setInput}
                                            value={data.password}
                                        />
                                        <label className={cx('title', 'label-input')}>Password *</label>
                                    </div>
                                </div>
                                <button
                                    className={cx('btn', 'btn-full-width', 'blue')}
                                    onClick={() => {
                                        const fetchApi = async () => {
                                            const result = await authServices.signup(data);
                                            console.log(result);
                                        };
                                        fetchApi();
                                    }}
                                >
                                    Register
                                </button>
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

export default Register;
