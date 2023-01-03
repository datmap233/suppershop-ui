import styles from './ProductsManage.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import * as productServices from '~/services/productServices';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ProductsManage() {
    const [data, setData] = useState();

    const categories = [
        { name: 'Food', id: 'bf8a16dd-48d8-49ef-ab42-e5a497fb16df' },
        { name: 'Fashion', id: '5db61ac9-d50e-4ed8-92a7-d71f7a7b6f11' },
        { name: 'Electronic device', id: '0122bebe-d24b-4e54-9bd5-9fb285fbeda9' },
        { name: 'House Ware', id: '1ed3e7c9-1df2-4363-a881-875f20f4e196' },
    ];

    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }
    useEffect(() => {
        const fetchApi = async () => {
            const result = await productServices.getListProduct(JSON.parse(localStorage.getItem('Login')).shopId);
            setData(result.products);
        };
        fetchApi();
    }, []);
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
                                        <span>STT</span>
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
                                {data !== undefined &&
                                    Object.keys(data).map(function (key) {
                                        return (
                                            <tr className={cx('box')}>
                                                <td className={cx('table-list-item')}>
                                                    <span>{parseInt(key) + 1}</span>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <div className={cx('table-item')}>
                                                        <div className={cx('content')}>
                                                            <span>{data[key].name}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <span>
                                                        {categories.find((x) => x.id === data[key].category_id).name}
                                                    </span>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <span>{format(data[key].price)}</span>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <span>{format(data[key].remaining_stock)}</span>
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

export default ProductsManage;
