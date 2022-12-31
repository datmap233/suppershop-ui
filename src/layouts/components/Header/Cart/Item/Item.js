import { useState } from 'react';
import images from '~/assets/images';
import Button from '~/components/Button';

function Item({ data }) {
    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }
    const handleOnClick = () => {
        var dataRemove = JSON.parse(localStorage.getItem('Cart'));
        dataRemove = dataRemove.filter((product) => product.ma !== data.ma);
        localStorage.setItem('Cart', JSON.stringify(dataRemove));
        window.location.reload();
    };
    return (
        <div className="cart-item">
            <div className="image">
                <img src={data.image} alt="" />
            </div>
            <div className="item-description">
                <p className="name">{data.name}</p>
                <p>
                    Quantity: <span className="light-red">{data.quantity}</span>
                </p>
            </div>
            <div className="right">
                <p className="price">
                    {format(data.price)}
                    <sup>đ</sup>
                </p>
                <Button className="remove" onClick={handleOnClick}>
                    <img src={images.remove} alt="remove" />
                </Button>
            </div>
        </div>
    );
}

export default Item;
