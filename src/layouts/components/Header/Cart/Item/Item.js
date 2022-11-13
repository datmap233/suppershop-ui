import images from '~/assets/images';
import Button from '~/components/Button';

function Item() {
    return (
        <div className="cart-item">
            <div className="image">
                <img src={images.products02Thum} alt="" />
            </div>
            <div className="item-description">
                <p className="name">Lincoln chair</p>
                <p>
                    Size: <span className="light-red">One size</span>
                    <br />
                    Quantity: <span className="light-red">01</span>
                </p>
            </div>
            <div className="right">
                <p className="price">$30.00</p>
                <Button href="/" className="remove">
                    <img src={images.remove} alt="remove" />
                </Button>
            </div>
        </div>
    );
}

export default Item;
