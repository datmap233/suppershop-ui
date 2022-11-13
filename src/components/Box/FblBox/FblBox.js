import images from '~/assets/images';
import Button from '~/components/Button';

function FblBox({position}) {
    return (
        <div className={`fbl-box ${position}`}>
            <h3 className="title">Facebook</h3>
            <span className="likebutton">
                <Button href="/">
                    <img src={images.fblike} alt="" />
                </Button>
            </span>
            <p>12k people like Flat Shop.</p>
            <ul>
                <li>
                    <Button href="/"></Button>
                </li>
                <li>
                    <Button href="/"></Button>
                </li>
                <li>
                    <Button href="/"></Button>
                </li>
                <li>
                    <Button href="/"></Button>
                </li>
                <li>
                    <Button href="/"></Button>
                </li>
                <li>
                    <Button href="/"></Button>
                </li>
                <li>
                    <Button href="/"></Button>
                </li>
                <li>
                    <Button href="/"></Button>
                </li>
            </ul>
            <div className="fbplug">
                <Button href="/">
                    <span>
                        <img src={images.fbicon} alt="" />
                    </span>
                    Facebook social plugin
                </Button>
            </div>
        </div>
    );
}

export default FblBox;
