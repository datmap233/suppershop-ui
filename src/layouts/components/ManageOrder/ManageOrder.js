import styles from './ManageOrder.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import * as orderServices from '~/services/orderServices';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ManageOrder() {
    const [data, setData] = useState();
    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }
    useEffect(() => {
        const fetchApi = async () => {
            const result = await orderServices.manageOrder(JSON.parse(localStorage.getItem('Login')).id);
            setData(result.listOrders);
            console.log(result.listOrders);
        };
        fetchApi();
    }, []);
    return (
        <>
            <div className="container_fullwidth">
                <div className={cx('container', 'home')}>
                    <div className={cx('title')}>
                        <div className={cx('title-sub')}>Manage Order</div>
                    </div>
                    <div className={cx('grid__column-full')}>
                        <table className={cx('grid__column-full')}>
                            <thead className={cx('list-title')}>
                                <tr>
                                    <td className={cx('table-list-content')}>
                                        <span>STT</span>
                                    </td>
                                    <td className={cx('table-list-content')}>
                                        <span>Mã đơn hàng</span>
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
                                {data !== undefined &&
                                    Object.keys(data).map(function (key) {
                                        return (
                                            <tr className={cx('box')}>
                                                <td className={cx('table-list-item')}>
                                                    <span>{parseInt(key) + 1}</span>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <span>{data[key].orderId}</span>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <div className={cx('table-item')}>
                                                        {Object.keys(data[key].listProduct).map(function (keyy) {
                                                            return (
                                                                <div className={cx('content')}>
                                                                    <span title={data[key].listProduct[keyy].name}>
                                                                        {data[key].listProduct[keyy].name}
                                                                    </span>
                                                                    <span>x{data[key].listProduct[keyy].quantity}</span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    {data[key].status === 0 ? (
                                                        <span>Chờ nhận hàng</span>
                                                    ) : (
                                                        <span>Đang giao hàng</span>
                                                    )}
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <span>{format(data[key].total)}</span>
                                                </td>
                                                <td className={cx('table-list-item')}>
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
                                                                <li>Hủy</li>
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
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageOrder;
