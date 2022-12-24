import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Register() {
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
                                <span>Register</span>
                            </div>
                            <div className={cx('input')}>
                                <div className={cx('input-site')}>
                                    <input type="text" className={cx('input-text')} value="" onblur={checkInput} />
                                    <label className={cx('title', 'label-input')}>Last Name *</label>
                                </div>
                                <div className={cx('input-site')}>
                                    <input type="text" className={cx('input-text')} value="" onblur={checkInput} />
                                    <label className={cx('title', 'label-input')}>First Name *</label>
                                </div>
                                <div className={cx('input-site')}>
                                    <input type="text" className={cx('input-text')} value="" onblur={checkInput} />
                                    <label className={cx('title', 'label-input')}>Email Address *</label>
                                </div>
                            </div>
                            <button className={cx('btn', 'btn-full-width', 'blue')}>Register</button>
                            <a href="/login" className={cx('btn', 'btn-full-width', 'white')}>
                                Back to log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
