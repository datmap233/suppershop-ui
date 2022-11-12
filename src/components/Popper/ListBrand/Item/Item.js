import images from '~/assets/images';
import Button from '~/components/Button';

function Item() {
    return (
        <>
            <li>
                <Button href="/">
                    <div className="brand-logo">
                        <img src={images.envato} alt="" />
                    </div>
                </Button>
            </li>
        </>
    );
}

export default Item;
