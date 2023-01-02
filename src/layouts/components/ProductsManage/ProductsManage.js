import styles from './ProductsManage.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function ProductsManage() {
    return (
        <>
            <div className="container_fullwidth">
                <div className={cx('container', 'home')}>
                    <div className={cx('title')}>
                        <div className={cx('title-sub')}>Products Manage</div>
                        <button
                            className={cx('add', 'btn', 'blue')}
                            onClick={() => (window.location.href = '/add-product/1')}
                        >
                            <img src={images.plus} alt="Add Icon" />
                        </button>
                    </div>
                    <div className={cx('grid__column-full')}>
                        <table className={cx('grid__column-full')}>
                            <thead className={cx('list-title')}>
                                <tr>
                                    <td className={cx('table-list-content')}>
                                        <input type="checkbox" />
                                        <label>Chọn tất cả</label>
                                    </td>
                                    <td className={cx('table-list-content')}>
                                        <span>Thông tin món hàng</span>
                                    </td>
                                    <td className={cx('table-list-content')}>
                                        <span>Loại</span>
                                    </td>
                                    <td className={cx('table-list-content')}>
                                        <span>Đơn giá</span>
                                    </td>
                                    <td className={cx('table-list-content')}>
                                        <span>Tồn kho</span>
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
                                                    Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không phai
                                                    màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy Nam Ống Rộng Dáng Suông,
                                                    cam kết Giặt không phai màu - HÀNG CAO CẤP LOẠI 1 Quần Jeans Baggy
                                                    Nam Ống Rộng Dáng Suông, cam kết Giặt không phai màu - HÀNG CAO CẤP
                                                    LOẠI 1 Quần Jeans Baggy Nam Ống Rộng Dáng Suông, cam kết Giặt không
                                                    phai màu - HÀNG CAO CẤP LOẠI 1
                                                </span>
                                                <span>x1</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={cx('table-list-item')}>
                                        <span>Áo thun</span>
                                    </td>
                                    <td className={cx('table-list-item')}>
                                        <span>200.000</span>
                                    </td>
                                    <td className={cx('table-list-item')}>
                                        <span>200</span>
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
            </div>
        </>
    );
}

export default ProductsManage;
