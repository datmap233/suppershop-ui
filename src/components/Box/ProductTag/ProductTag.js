import Button from '~/components/Button';

function ProductTag({position}) {
    return (
        <div className={`product-tag ${position}`}>
            <h3 className="title">
                Products
                <strong>Tags</strong>
            </h3>
            <ul>
                <li>
                    <Button href="/">Lincoln us</Button>
                </li>
                <li>
                    <Button href="/">SDress for Girl</Button>
                </li>
                <li>
                    <Button href="/">Corner</Button>
                </li>
                <li>
                    <Button href="/">Window</Button>
                </li>
                <li>
                    <Button href="/">PG</Button>
                </li>
                <li>
                    <Button href="/">Oscar</Button>
                </li>
                <li>
                    <Button href="/">Bath room</Button>
                </li>
                <li>
                    <Button href="/">PSD</Button>
                </li>
            </ul>
        </div>
    );
}

export default ProductTag;
