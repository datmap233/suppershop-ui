import { useRef, useState } from 'react';
import images from '~/assets/images';
import Button from '~/components/Button';
import Star from '~/components/Star';

import './Product.scss';

function Product({ data }) {
    const [amount, setAmount] = useState(0);

    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }

    const refQuantity = useRef();

    const handleOnClick = () => {
        const quantity = refQuantity.current.value;
        if (quantity > 0) {
            var arr = JSON.parse(localStorage.getItem('Cart'));
            if (arr.length === 0)
                arr = [
                    {
                        productId: data.product_id,
                        image: data.image,
                        name: data.name,
                        unitPrice: data.price,
                        quantity: quantity,
                    },
                ];
            else {
                arr.push({
                    ma: data.product_id,
                    image: data.image,
                    name: data.name,
                    unitPrice: data.price,
                    quantity: quantity,
                });
            }
            localStorage.setItem('Cart', JSON.stringify(arr));
            window.location.reload();
        }
    };
    return (
        <div className="products-details">
            <div className="col-md-9">
                <div className="preview_image">
                    <div className="preview-small">
                        {data !== undefined && <img id="zoom_03" src={data.image} alt="" />}
                    </div>
                </div>
                <div className="products-description">
                    <h5 className="name">{data !== undefined && data.name}</h5>
                    <p>{data !== undefined && <Star style={{ display: 'inline-block' }} amount={data.rating} />}</p>
                    <p>
                        Availability:
                        {data !== undefined && (
                            <span className=" light-red">{data.remaining_stock > 0 ? 'In' : 'Out'} Stock</span>
                        )}
                    </p>
                    <hr className="border" />
                    <div className="price">
                        Price :
                        <span className="new_price">
                            {data !== undefined && format(data.price)}
                            <sup>đ</sup>
                        </span>
                    </div>
                    <hr className="border" />
                    <div className="wided">
                        <div className="qty">
                            Qty &nbsp;&nbsp;:
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => {
                                    if (e.target.value < 0) setAmount(0);
                                    else setAmount(e.target.value);
                                }}
                                ref={refQuantity}
                            />
                        </div>
                        <div className="button_group">
                            <button className="button" onClick={handleOnClick}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="special-deal leftbar">
                    <h4 className="title">REVIEW</h4>
                    <div class="review-box_feedback">
                        <div class="feedback-element">
                            <p class="name-customer">Yukiin</p>
                            <p class="content-customer">Sản phẩm đẹp hơn mong đợi</p>
                        </div>
                        <div class="feedback-element">
                            <p class="name-customer">Yukiin</p>
                            <p class="content-customer">Sản phẩm đẹp hơn mong đợi</p>
                        </div>
                        <div class="feedback-element">
                            <p class="name-customer">Yukiin</p>
                            <p class="content-customer">Sản phẩm đẹp hơn mong đợi</p>
                        </div>
                        <div class="feedback-element">
                            <p class="name-customer">Yukiin</p>
                            <p class="content-customer">Sản phẩm đẹp hơn mong đợi</p>
                        </div>
                        <div class="feedback-element">
                            <p class="name-customer">Yukiin</p>
                            <p class="content-customer">Sản phẩm đẹp hơn mong đợi</p>
                        </div>
                        <div class="feedback-element">
                            <p class="name-customer">Yukiin</p>
                            <p class="content-customer">Sản phẩm đẹp hơn mong đợi</p>
                        </div>
                        <div class="feedback-element">
                            <p class="name-customer">Yukiin</p>
                            <p class="content-customer">Sản phẩm đẹp hơn mong đợi</p>
                        </div>
                        <div class="feedback-element">
                            <p class="name-customer">Yukiin</p>
                            <p class="content-customer">Sản phẩm đẹp hơn mong đợi</p>
                        </div>
                    </div>
                    <button class="view-more">View More</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
