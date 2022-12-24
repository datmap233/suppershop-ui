import styles from './ProductsManage.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function ProductsManage() {
    return (
        <>
            <div className={cx('container', 'home')}>
                <div className={cx('user-title')}>
                    <div className={cx('title')}>Products Manage</div>
                    <button className={cx('add', 'btn', 'blue')}>
                        <img src={images.plus} alt="Add Icon" />
                    </button>
                </div>
                <div className={cx('user-list')}>
                    <table className={cx('user-list-table')}>
                        <thead className={cx('user-list-title')}>
                            <tr>
                                <td className={cx('user-list-item')}>
                                    <input type="checkbox" />
                                </td>
                                <td className={cx('user-list-item', 'user')}>
                                    <span>User</span>
                                </td>
                                <td className={cx('user-list-item', 'gender')}>
                                    <span>Gender</span>
                                </td>
                                <td className={cx('user-list-item', 'role')}>
                                    <span>Role</span>
                                </td>
                                <td className={cx('user-list-item', 'status')}>
                                    <span>Status</span>
                                </td>
                                <td className={cx('user-list-item', 'action')}>
                                    <span>Actions</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody className={cx('user-list-content')}>
                            <tr className={cx('box')}>
                                <td className={cx('user-list-item', 'checkbox')}>
                                    <input className={cx('check')} type="checkbox" />
                                </td>
                                <td className={cx('user-list-item', 'user')}>
                                    <div className={cx('info-user')}>
                                        <div className={cx('content')}>
                                            <div className={cx('name')}>Arriaga Rhys</div>
                                            <div className={cx('email')}>rhys@arriaga.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td className={cx('user-list-item', 'gender')}>
                                    <span>M</span>
                                </td>
                                <td className={cx('user-list-item', 'role')}>
                                    <span>Admin</span>
                                </td>
                                <td className={cx('user-list-item', 'status')}>
                                    <span>Active</span>
                                </td>
                                <td className={cx('user-list-item', 'action')}>
                                    <HeadlessTippy
                                        interactive
                                        appendTo={() => document.body}
                                        delay={[0, 500]}
                                        placement="bottom-end"
                                        render={(attrs) => (
                                            <ul className={cx("list-3-cham")} tabIndex="-1" {...attrs}>
                                                <li>Sửa</li>
                                                <li>Xóa</li>
                                            </ul>
                                        )}
                                    >
                                        <div>
                                            <button className={cx('action', 'btn', 'white')}>
                                                <img src={images.bacham} alt="3 chấm" />
                                            </button>
                                        </div>
                                    </HeadlessTippy>
                                </td>
                            </tr><tr className={cx('box')}>
                                <td className={cx('user-list-item', 'checkbox')}>
                                    <input className={cx('check')} type="checkbox" />
                                </td>
                                <td className={cx('user-list-item', 'user')}>
                                    <div className={cx('info-user')}>
                                        <div className={cx('content')}>
                                            <div className={cx('name')}>Arriaga Rhys</div>
                                            <div className={cx('email')}>rhys@arriaga.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td className={cx('user-list-item', 'gender')}>
                                    <span>M</span>
                                </td>
                                <td className={cx('user-list-item', 'role')}>
                                    <span>Admin</span>
                                </td>
                                <td className={cx('user-list-item', 'status')}>
                                    <span>Active</span>
                                </td>
                                <td className={cx('user-list-item', 'action')}>
                                    <HeadlessTippy
                                        interactive
                                        appendTo={() => document.body}
                                        delay={[0, 500]}
                                        placement="bottom-end"
                                        render={(attrs) => (
                                            <ul className={cx("list-3-cham")} tabIndex="-1" {...attrs}>
                                                <li>Sửa</li>
                                                <li>Xóa</li>
                                            </ul>
                                        )}
                                    >
                                        <div>
                                            <button className={cx('action', 'btn', 'white')}>
                                                <img src={images.bacham} alt="3 chấm" />
                                            </button>
                                        </div>
                                    </HeadlessTippy>
                                </td>
                            </tr><tr className={cx('box')}>
                                <td className={cx('user-list-item', 'checkbox')}>
                                    <input className={cx('check')} type="checkbox" />
                                </td>
                                <td className={cx('user-list-item', 'user')}>
                                    <div className={cx('info-user')}>
                                        <div className={cx('content')}>
                                            <div className={cx('name')}>Arriaga Rhys</div>
                                            <div className={cx('email')}>rhys@arriaga.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td className={cx('user-list-item', 'gender')}>
                                    <span>M</span>
                                </td>
                                <td className={cx('user-list-item', 'role')}>
                                    <span>Admin</span>
                                </td>
                                <td className={cx('user-list-item', 'status')}>
                                    <span>Active</span>
                                </td>
                                <td className={cx('user-list-item', 'action')}>
                                    <HeadlessTippy
                                        interactive
                                        appendTo={() => document.body}
                                        delay={[0, 500]}
                                        placement="bottom-end"
                                        render={(attrs) => (
                                            <ul className={cx("list-3-cham")} tabIndex="-1" {...attrs}>
                                                <li>Sửa</li>
                                                <li>Xóa</li>
                                            </ul>
                                        )}
                                    >
                                        <div>
                                            <button className={cx('action', 'btn', 'white')}>
                                                <img src={images.bacham} alt="3 chấm" />
                                            </button>
                                        </div>
                                    </HeadlessTippy>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ProductsManage;
