import images from '~/assets/images';
import Button from '~/components/Button';

function Item({ sale, className, oneRow = false, data, key, checkCategory = true, href = '/' }) {
    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }
    return (
        <>
            {!oneRow && checkCategory && (
                <div className={className} key={key}>
                    <div className="products">
                        {sale && <div className="offer">{sale}</div>}
                        <div className="thumbnail">
                            <Button href={href}>
                                <img
                                    style={{ height: '100%' }}
                                    src={data !== undefined && data.image}
                                    alt="Product Name"
                                />
                            </Button>
                        </div>
                        <div className="productname">
                            <span title={data !== undefined && data.name}>{data !== undefined && data.name}</span>
                        </div>
                        <h4 className="price">
                            {data !== undefined && format(data.price)}
                            <sup>đ</sup>
                        </h4>
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
            {oneRow && checkCategory && (
                <div className={className} key={key}>
                    <div className="products">
                        {sale && <div className="offer">{sale}</div>}
                        <div className="thumbnail">
                            <Button href={href}>
                                <img
                                    style={{ height: '100%' }}
                                    src={data !== undefined && data.image}
                                    alt="Product Name"
                                />
                            </Button>
                        </div>
                        <div className="product-list-description">
                            <div className="productname">
                                <span title={data !== undefined && data.name}>{data !== undefined && data.name}</span>
                            </div>
                            <p>{data !== undefined && data.description}</p>
                            <div className="list_bottom fix_price_addToCart">
                                <div className="price">
                                    <span className="new_price">
                                        {data !== undefined && format(data.price)}
                                        <sup>đ</sup>
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
