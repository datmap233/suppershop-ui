import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Login() {
    var checkInput = function (e) {
        if (e.target.value.length > 0) {
            e.target.classList.add(cx('active'));
        } else {
            e.target.classList.remove(cx('active'));
        }
    };

    return (
        <>
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
                                    <input type="text" className={cx('input-text')} value="" onblur={checkInput} />
                                    <label className={cx('title', 'label-input')}>Username *</label>
                                </div>
                                <div className={cx('input-site')}>
                                    <input type="password" className={cx('input-text')} value="" onblur={checkInput} />
                                    <label className={cx('title', 'label-input')}>Password *</label>
                                </div>
                            </div>
                            <div className={cx('forgot-password')}>
                                <a class="link" href="/forgot-password">
                                    Forgot password?
                                </a>
                            </div>
                            <button className={cx('btn', 'btn-full-width', 'blue')}>Login</button>
                            <a href="/register" className={cx('btn', 'btn-full-width', 'white')}>
                                Don't have an account? Sign Up!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
