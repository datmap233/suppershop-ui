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
                                    <label className={cx('title', 'label-input')}>Username *</label>
                                </div>
                                <div className={cx('input-site')}>
                                    <input type="text" className={cx('input-text')} value="" onblur={checkInput} />
                                    <label className={cx('title', 'label-input')}>Name *</label>
                                </div>
                                <div className={cx('input-site')}>
                                    <input type="email" className={cx('input-text')} value="" onblur={checkInput} />
                                    <label className={cx('title', 'label-input')}>Email *</label>
                                </div>
                                <div className={cx('input-site', 'gender')}>
                                    <label for='gender'>Gender</label>
                                    <select name="gender" id='gender'>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    {/* <input type="text" className={cx('input-text')} value="" onblur={checkInput} /> */}
                                </div>
                                <div className={cx('input-site')}>
                                    <input type="password" className={cx('input-text')} value="" onblur={checkInput} />
                                    <label className={cx('title', 'label-input')}>Password *</label>
                                </div>
                                <div className={cx('input-site')}>
                                    <input type="password" className={cx('input-text')} value="" onblur={checkInput} />
                                    <label className={cx('title', 'label-input')}>Confirm Password *</label>
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
