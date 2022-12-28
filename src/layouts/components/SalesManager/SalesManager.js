import styles from './SalesManager.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function SalesManager() {
    return (
        <>
            <div className={cx('container', 'home')}>
                <div className={cx('title')}>
                    <div className={cx('title-sub')}>Sales Manager</div>
                    <select>
                        <option>Theo ngày</option>
                        <option>Theo tháng</option>
                        <option>Theo năm</option>
                    </select>
                </div>
                <div className={cx('grid__column-full')}>
                    <table className={cx('grid__column-full')}>
                        <thead className={cx('list-title')}>
                            <tr>
                                <td className={cx('table-list-content')}>
                                    <span>Thời gian</span>
                                </td>
                                <td className={cx('table-list-content')}>
                                    <span>Số lượng đơn hàng</span>
                                </td>
                                <td className={cx('table-list-content')}>
                                    <span>Doanh thu</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={cx('box')}>
                                <td className={cx('table-list-item')}>
                                    <span>Tháng 1/2022</span>
                                </td>
                                <td className={cx('table-list-item')}>
                                    <span>2.000</span>
                                </td>
                                <td className={cx('table-list-item')}>
                                    <span>20.000.000</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default SalesManager;
