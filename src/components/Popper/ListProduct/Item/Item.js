import images from '~/assets/images';
import Button from '~/components/Button';

function Item({ sale, className, oneRow = false, data }) {
    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }
    return (
        <>
            {!oneRow && (
                <div className={className}>
                    <div className="products">
                        {sale && <div className="offer">{sale}</div>}
                        <div className="thumbnail">
                            <Button href="details.html">
                                <img
                                    style={{ height: '100%' }}
                                    src={data !== undefined && data.image}
                                    alt="Product Name"
                                />
                            </Button>
                        </div>
                        <div className="productname">{data !== undefined && data.name}</div>
                        <h4 className="price">{data !== undefined && format(data.price)} $</h4>
                        <div className="button_group">
                            <button className="button add-cart" type="button">
                                Add To Cart
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
                        {sale && <div className="offer">{sale}</div>}
                        <Button href="details.html">
                            <img src={images.products05Small} alt="Product Name" />
                        </Button>
                        <div className="product-list-description">
                            <div className="productname">Lincoln Corner Unit Products</div>
                            <p>
                                <img src="images/star.png" alt="" />
                                <Button href="/" className="review_num">
                                    02 Review(s)
                                </Button>
                            </p>
                            <p>
                                Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc.
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultri ces posuere cubilia curae.
                                Proin lectus ipsum, gravida etds mattis vulputate, tristique ut lectus. Sed et lorem
                                nunc...
                            </p>
                            <div className="list_bottom">
                                <div className="price">
                                    <span className="new_price">
                                        450.00
                                        <sup>$</sup>
                                    </span>
                                </div>
                                <div className="button_group">
                                    <button className="button">Add To Cart</button>
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
