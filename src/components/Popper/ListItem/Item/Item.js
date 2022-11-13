import images from '~/assets/images';
import Button from '~/components/Button';

function Item({ sale, className, oneRow = false }) {
    return (
        <>
            {!oneRow && (
                <div className={className}>
                    <div className="products">
                        {sale && <div className="offer">{sale}</div>}
                        <div className="thumbnail">
                            <Button href="details.html">
                                <img src={images.products05Small} alt="Product Name" />
                            </Button>
                        </div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group">
                            <button className="button add-cart" type="button">
                                Add To Cart
                            </button>
                            <button className="button compare" type="button">
                                <i className="fa fa-exchange"></i>
                            </button>
                            <button className="button wishlist" type="button">
                                <i className="fa fa-heart-o"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {oneRow && (
                <div className={className}>
                    <div className="products">
                        <div class="offer">{sale}</div>
                        <Button href="details.html">
                            <img src={images.products05Small} alt="Product Name" />
                        </Button>
                        <div class="product-list-description">
                            <div class="productname">Lincoln Corner Unit Products</div>
                            <p>
                                <img src="images/star.png" alt="" />
                                <Button href="/" class="review_num">
                                    02 Review(s)
                                </Button>
                            </p>
                            <p>
                                Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc.
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultri ces posuere cubilia curae.
                                Proin lectus ipsum, gravida etds mattis vulputate, tristique ut lectus. Sed et lorem
                                nunc...
                            </p>
                            <div class="list_bottom">
                                <div class="price">
                                    <span class="new_price">
                                        450.00
                                        <sup>$</sup>
                                    </span>
                                    <span class="old_price">
                                        450.00
                                        <sup>$</sup>
                                    </span>
                                </div>
                                <div class="button_group">
                                    <button class="button">Add To Cart</button>
                                    <button class="button compare">
                                        <i class="fa fa-exchange"></i>
                                    </button>
                                    <button class="button favorite">
                                        <i class="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Item;
