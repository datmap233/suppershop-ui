import { useRef, useState } from 'react';
import images from '~/assets/images';
import Button from '~/components/Button';

import './Product.scss';

function Product() {
    const refThumImage = useRef();

    const [positionSlide, setPositionSlide] = useState(0);
    const [elementCount, setElementCount] = useState(0);

    const handleOnClickBtnLeft = () => {
        if (positionSlide < 0) {
            refThumImage.current.style.marginLeft = `${positionSlide + 57}px`;
            setPositionSlide(positionSlide + 57);
        }
    };
    const handleOnClickBtnRight = () => {
        if (elementCount === 0) {
            var child = document.querySelectorAll('.prev-thum>li').length;
            setElementCount(child);
        }
        if (elementCount > -positionSlide / 57 + 4) {
            console.log(elementCount, -positionSlide / 57);
            refThumImage.current.style.marginLeft = `${positionSlide - 57}px`;
            setPositionSlide(positionSlide - 57);
        }
    };

    return (
        <div className="products-details">
            <div className="col-md-9">
                <div className="preview_image">
                    <div className="preview-small">
                        <img
                            id="zoom_03"
                            src={images.products01Medium}
                            data-zoom-image={images.products01Large}
                            alt=""
                        />
                    </div>
                    <div className="thum-image">
                        <ul id="gallery_01" className="prev-thum" ref={refThumImage}>
                            <li>
                                <Button
                                    href="/"
                                    data-image={images.products02Medium}
                                    data-zoom-image={images.products02Large}
                                >
                                    <img src={images.products02Thum} alt="" />
                                </Button>
                            </li>
                            <li>
                                <Button
                                    href="/"
                                    data-image={images.products03Medium}
                                    data-zoom-image={images.products03Large}
                                >
                                    <img src={images.products03Thum} alt="" />
                                </Button>
                            </li>
                            <li>
                                <Button
                                    href="/"
                                    data-image={images.products04Medium}
                                    data-zoom-image={images.products04Large}
                                >
                                    <img src={images.products04Thum} alt="" />
                                </Button>
                            </li>
                            <li>
                                <Button
                                    href="/"
                                    data-image={images.products05Medium}
                                    data-zoom-image={images.products05Large}
                                >
                                    <img src={images.products05Thum} alt="" />
                                </Button>
                            </li>
                            <li>
                                <Button
                                    href="/"
                                    data-image={images.products03Medium}
                                    data-zoom-image={images.products03Large}
                                >
                                    <img src={images.products03Thum} alt="" />
                                </Button>
                            </li>
                            <li>
                                <Button
                                    href="/"
                                    data-image={images.products04Medium}
                                    data-zoom-image={images.products04Large}
                                >
                                    <img src={images.products04Thum} alt="" />
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <Button className="control-left" id="thum-prev" onClick={handleOnClickBtnLeft}>
                        <i className="fa fa-chevron-left"></i>
                    </Button>
                    <Button className="control-right" id="thum-next" onClick={handleOnClickBtnRight}>
                        <i className="fa fa-chevron-right"></i>
                    </Button>
                </div>
                <div className="products-description">
                    <h5 className="name">Lincoln Corner Unit Products</h5>
                    <p>
                        <img alt="" src={images.star} />
                        <span className="review_num">02 Review(s)</span>
                    </p>
                    <p>
                        Availability:
                        <span className=" light-red">In Stock</span>
                    </p>
                    <p>
                        Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrie ces posuere cubilia curae. Proin
                        lectus ipsum, gravida etds mattis vulps utate, tristique ut lectus. Sed et lorem nunc...
                    </p>
                    <hr className="border" />
                    <div className="price">
                        Price :
                        <span className="new_price">
                            450.00
                            <sup>$</sup>
                        </span>
                    </div>
                    <hr className="border" />
                    <div className="wided">
                        <div className="qty">
                            Qty &nbsp;&nbsp;:
                            <input type="number" />
                        </div>
                        <div className="button_group">
                            <button className="button">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className={`special-deal leftbar`}>
                    <h4 className="title">REVIEW</h4>
                    <div className="special-item">
                        <div className="product-image">
                            <Button href="/">
                                <img src={images.products01Thum} alt="" />
                            </Button>
                        </div>
                        <div className="product-info">
                            <p>Licoln Corner Unit</p>
                            <h5 className="price">$300.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
