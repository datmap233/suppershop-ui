import styles from './SalesManager.module.scss';
import classNames from 'classnames/bind';
import * as orderServices from '~/services/orderServices';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SalesManager() {
    const [data, setData] = useState();
    const [date, setDate] = useState();

    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }
    function convertDate(day) {
        var date = day.slice(0, 10);
        date = date.split('-');
        return date;
    }
    useEffect(() => {
        const fetchApi = async () => {
            const result = await orderServices.manageOrder(JSON.parse(localStorage.getItem('Login')).shopId);
            setData(result.listOrders);
        };
        fetchApi();
    }, []);

    useEffect(() => {
        if (data !== undefined) listDate();
    }, [data]);

    useEffect(() => {
        if (date !== undefined) {
            byDate();
        }
    }, [date]);

    function listDate() {
        var arr = [];
        data.map((value, index) => {
            arr.push(convertDate(value.orderTime));
            return value;
        });
        arr = arr.filter((item, index) => arr.indexOf(item) == index);
        setDate(arr);
    }

    function sumTotal(date) {
        var sum = 0;
        var amount = 0;
        data.map((value, index) => {
            var timeChecking = convertDate(value.orderTime);
            var isTrue = true;
            for (let index = 0; index < date.length; index++) {
                const element = date[index];
                if (timeChecking[index] != element) isTrue = false;
            }
            if (isTrue) {
                sum += value.total;
                amount++;
            }
            return value;
        });
        return [sum, amount];
    }

    const [byDateTotal, setbyDateTotal] = useState();
    const [byMonthTotal, setbyMonthTotal] = useState();
    const [byYearTotal, setbyYearTotal] = useState();

    const [status, setStatus] = useState([true, false, false]);

    function byDate() {
        var arr = [];
        date.map((value, index) => {
            arr.push({
                total: sumTotal(value)[0],
                amount: sumTotal(value)[1],
                date: value,
            });
            return value;
        });
        setbyDateTotal(arr);
    }
    function byMonth() {
        var arr = [];
        date.map((value, index) => {
            arr.push({
                total: sumTotal(value.slice(0, -1))[0],
                amount: sumTotal(value.slice(0, -1))[1],
                date: value.slice(0, -1),
            });
            return value;
        });
        setbyMonthTotal(arr);
    }
    function byYear() {
        var arr = [];
        date.map((value, index) => {
            arr.push({
                total: sumTotal(value.slice(0, -2))[0],
                amount: sumTotal(value.slice(0, -2))[1],
                date: value.slice(0, -2),
            });
            return value;
        });
        setbyYearTotal(arr);
    }
    return (
        <>
            <div className="container_fullwidth">
                <div className={cx('container', 'home')}>
                    <div className={cx('title')}>
                        <div className={cx('title-sub')}>Sales Manager</div>
                        <select
                            onChange={(e) => {
                                const value = e.target.value;
                                setStatus(() => {
                                    var arr = [];
                                    if (value === 'Theo ngày') {
                                        arr = [true, false, false];
                                    } else if (value === 'Theo tháng') {
                                        arr = [false, true, false];
                                        byMonth();
                                    } else if (value === 'Theo năm') {
                                        arr = [false, false, true];
                                        byYear();
                                    }
                                    return arr;
                                });
                            }}
                        >
                            <option value="Theo ngày">Theo ngày</option>
                            <option value="Theo tháng">Theo tháng</option>
                            <option value="Theo năm">Theo năm</option>
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
                                {byDateTotal !== undefined &&
                                    status[0] === true &&
                                    Object.keys(byDateTotal).map(function (key) {
                                        return (
                                            <tr className={cx('box')} key={key}>
                                                <td className={cx('table-list-item')}>
                                                    <span>
                                                        {`${byDateTotal[key].date[2]}/${byDateTotal[key].date[1]}/${byDateTotal[key].date[0]}`}
                                                    </span>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <span>{format(byDateTotal[key].amount)}</span>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <span>{format(byDateTotal[key].total)}</span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                {byMonthTotal !== undefined &&
                                    status[1] === true &&
                                    Object.keys(byMonthTotal).map(function (key) {
                                        return (
                                            <tr className={cx('box')} key={key}>
                                                <td className={cx('table-list-item')}>
                                                    <span>
                                                        {`${byDateTotal[key].date[1]}/${byDateTotal[key].date[0]}`}
                                                    </span>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <span>{format(byDateTotal[key].amount)}</span>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <span>{format(byDateTotal[key].total)}</span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                {byYearTotal !== undefined &&
                                    status[2] === true &&
                                    Object.keys(byYearTotal).map(function (key) {
                                        return (
                                            <tr className={cx('box')} key={key}>
                                                <td className={cx('table-list-item')}>
                                                    <span>{`${byDateTotal[key].date[0]}`}</span>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <span>{format(byDateTotal[key].amount)}</span>
                                                </td>
                                                <td className={cx('table-list-item')}>
                                                    <span>{format(byDateTotal[key].total)}</span>
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

export default SalesManager;
