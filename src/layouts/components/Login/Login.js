import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { useState } from 'react';
import * as authServices from '~/services/authServices';

const cx = classNames.bind(styles);

function Login() {
    var checkInput = function (e) {
        if (e.target.value.length > 0) {
            e.target.classList.add(cx('active'));
        } else {
            e.target.classList.remove(cx('active'));
        }
    };

    const [login, setLogin] = useState({ user: '', password: '' });

    const setInput = (e) => {
        const { name, value } = e.target;
        e.target.classList.add(cx('active'));
        if (name === 'user') {
            setLogin((pre) => ({ ...pre, user: value }));
        } else if (name === 'password') {
            setLogin((pre) => ({ ...pre, password: value }));
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
                                    <span>Login</span>
                                </div>
                                <div className={cx('input')}>
                                    <div className={cx('input-site')}>
                                        <input
                                            type="text"
                                            className={cx('input-text')}
                                            onblur={checkInput}
                                            name="user"
                                            value={login.user}
                                            onChange={setInput}
                                            onKeyPress={(e) => {
                                                if (e.code === 'Enter') {
                                                    const fetchApi = async () => {
                                                        const result = await authServices.login(login);
                                                        if (result === 'Failed') {
                                                            alert('Thất bại');
                                                        } else {
                                                            localStorage.setItem('Login', JSON.stringify(result.user));
                                                            window.location.href = '/';
                                                        }
                                                    };
                                                    fetchApi();
                                                }
                                            }}
                                        />
                                        <label className={cx('title', 'label-input')}>Username *</label>
                                    </div>
                                    <div className={cx('input-site')}>
                                        <input
                                            type="password"
                                            className={cx('input-text')}
                                            value={login.password}
                                            onblur={checkInput}
                                            name="password"
                                            onChange={setInput}
                                            onKeyPress={(e) => {
                                                if (e.code === 'Enter') {
                                                    const fetchApi = async () => {
                                                        const result = await authServices.login(login);
                                                        if (result === 'Failed') {
                                                            alert('Thất bại');
                                                        } else {
                                                            localStorage.setItem('Login', JSON.stringify(result.user));
                                                            window.location.href = '/';
                                                        }
                                                    };
                                                    fetchApi();
                                                }
                                            }}
                                        />
                                        <label className={cx('title', 'label-input')}>Password *</label>
                                    </div>
                                </div>
                                <div className={cx('forgot-password')}>
                                    <a class="link" href="/forgot-password">
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    className={cx('btn', 'btn-full-width', 'blue')}
                                    onClick={() => {
                                        const fetchApi = async () => {
                                            const result = await authServices.login(login);
                                            console.log(result);
                                            if (result === undefined) {
                                                alert('Failed');
                                            } else {
                                                localStorage.setItem('Login', JSON.stringify(result.user));
                                                window.location.href = '/';
                                            }
                                        };
                                        fetchApi();
                                    }}
                                >
                                    Login
                                </button>
                                <a href="/register" className={cx('btn', 'btn-full-width', 'white')}>
                                    Don't have an account? Sign Up!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
