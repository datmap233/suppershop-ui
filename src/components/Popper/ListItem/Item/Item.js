import images from '~/assets/images';
import Button from '~/components/Button';

function Item({sale}) {
    return (
        <>
            <div className="col-md-3 col-sm-6">
                <div className="products">
                    {sale && <div className="offer">- %{sale}</div>}
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
        </>
    );
}

export default Item;
