import styles from './ManageOrder.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function ManageOrder() {
    return (
        <>
            <div className={cx('container', 'home')}>
                <div className={cx('title')}>
                    <div className={cx('title-sub')}>Manage Order</div>
                </div>
                <div className={cx('grid__column-full')}>
                    <table className={cx('grid__column-full')}>
                        <thead className={cx('list-title')}>
                            <tr>
                                <td className={cx('table-list-content')}>
                                    <input type="checkbox" />
                                </td>
                                <td className={cx('table-list-content')}>
                                    <span>Thông tin đơn hàng</span>
                                </td>
                                <td className={cx('table-list-content')}>
                                    <span>Trạng thái</span>
                                </td>
                                <td className={cx('table-list-content')}>
                                    <span>Tổng tiền</span>
                                </td>
                                <td className={cx('table-list-content')}>
                                    <span>Nhận đơn hàng</span>
                                </td>
                                <td className={cx('table-list-content')}>
                                    <span>Lựa chọn</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={cx('box')}>
                                <td className={cx('table-list-item')}>
                                    <input className={cx('check')} type="checkbox" />
                                </td>
                                <td className={cx('table-list-item')}>
                                    <div className={cx('table-item')}>
                                        <div className={cx('content')}>
                                            <span>
                                                Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu -
                                                HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết
                                                Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng
                                                Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans
                                                Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO
                                                CẤP LOẠI 1
                                            </span>
                                            <span>x1</span>
                                        </div>
                                        <div className={cx('content')}>
                                            <span>
                                                Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu -
                                                HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết
                                                Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng
                                                Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans
                                                Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO
                                                CẤP LOẠI 1
                                            </span>
                                            <span>x1</span>
                                        </div>
                                        <div className={cx('content')}>
                                            <span>
                                                Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu -
                                                HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết
                                                Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng
                                                Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans
                                                Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO
                                                CẤP LOẠI 1
                                            </span>
                                            <span>x1</span>
                                        </div>
                                        <div className={cx('content')}>
                                            <span>
                                                Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu -
                                                HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết
                                                Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng
                                                Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans
                                                Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO
                                                CẤP LOẠI 1
                                            </span>
                                            <span>x1</span>
                                        </div>
                                        <div className={cx('content')}>
                                            <span>
                                                Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu -
                                                HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết
                                                Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng
                                                Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans
                                                Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO
                                                CẤP LOẠI 1
                                            </span>
                                            <span>x1</span>
                                        </div>
                                        <div className={cx('content')}>
                                            <span>
                                                Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu -
                                                HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết
                                                Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng
                                                Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans
                                                Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO
                                                CẤP LOẠI 1
                                            </span>
                                            <span>x1</span>
                                        </div>
                                        <div className={cx('content')}>
                                            <span>
                                                Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu -
                                                HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết
                                                Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng
                                                Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans
                                                Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO
                                                CẤP LOẠI 1
                                            </span>
                                            <span>x1</span>
                                        </div>
                                        <div className={cx('content')}>
                                            <span>
                                                Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu -
                                                HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết
                                                Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng
                                                Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans
                                                Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO
                                                CẤP LOẠI 1
                                            </span>
                                            <span>x1</span>
                                        </div>
                                    </div>
                                </td>
                                <td className={cx('table-list-item')}>
                                    <span>Chờ xác nhận</span>
                                </td>
                                <td className={cx('table-list-item')}>
                                    <span>200.000</span>
                                </td><td className={cx('table-list-item')}>
                                    <button>Nhận</button>
                                </td>
                                <td className={cx('table-list-item')}>
                                    <HeadlessTippy
                                        interactive
                                        appendTo={() => document.body}
                                        delay={[0, 500]}
                                        placement="bottom-start"
                                        render={(attrs) => (
                                            <ul className={cx('list-3-cham')} tabIndex="-1" {...attrs}>
                                                <li>Sửa</li>
                                                <li>Xóa</li>
                                            </ul>
                                        )}
                                    >
                                        <div className={cx('btn-option')}>
                                            <button className={cx('btn', 'white')}>
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

export default ManageOrder;
