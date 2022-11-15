import images from '~/assets/images';
import Button from '~/components/Button';

function Special({ position }) {
    return (
        <div className={`special-deal ${position}`}>
            <h4 className="title">
                Special
                <strong>Deals</strong>
            </h4>
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
            <div className="special-item">
                <div className="product-image">
                    <Button href="/">
                        <img src={images.products02Thum} alt="" />
                    </Button>
                </div>
                <div className="product-info">
                    <p>Licoln Corner Unit</p>
                    <h5 className="price">$300.00</h5>
                </div>
            </div>
            <div className="special-item">
                <div className="product-image">
                    <Button href="/">
                        <img src={images.products03Thum} alt="" />
                    </Button>
                </div>
                <div className="product-info">
                    <p>Licoln Corner Unit</p>
                    <h5 className="price">$300.00</h5>
                </div>
            </div>
        </div>
    );
}

export default Special;
