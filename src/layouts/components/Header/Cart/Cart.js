import images from '~/assets/images';
import Button from '~/components/Button';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Item from './Item';
import { useEffect, useState } from 'react';

function Cart() {
    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }
    const [sumPrice, setSumPrice] = useState(0);
    const [data, setData] = useState();
    const onMouseOver = () => {
        setData(JSON.parse(localStorage.getItem('Cart')));
    };
    useEffect(() => {
        var sum = 0;
        if (data !== undefined && sumPrice === 0)
            for (let index = 0; index < data.length; index++) {
                const value = data[index];
                sum += value.unitPrice * value.quantity;
            }
        setSumPrice(sum + sumPrice);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    return (
        <>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                delay={[0, 500]}
                placement="bottom-end"
                render={(attrs) => (
                    <ul className="option-cart-item" tabIndex="-1" {...attrs}>
                        {data !== undefined &&
                            Object.keys(data).map(function (key) {
                                return (
                                    <li>
                                        <Item data={data[key]} />
                                    </li>
                                );
                            })}
                        <li>
                            <span className="total">
                                Total
                                <strong>
                                    {format(sumPrice)}
                                    <sup>đ</sup>
                                </strong>
                            </span>
                            <Button className="checkout" onClick={() => (window.location.href = '/checkout')}>
                                CheckOut
                            </Button>
                        </li>
                    </ul>
                )}
            >
                <div className="header-search-cart-btn" onMouseOver={onMouseOver}>
                    <Button to="/" className="search-submit">
                        <img src={images.carticon} alt="" style={{ height: '100%', width: '100%' }} />
                    </Button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Cart;
