import Item from './Item';

function ListBrand({ className }) {
    return (
        <>
            <div className="our-brand">
                <h3 className="title">
                    <strong>Our </strong> Brands
                </h3>
                <div className="control">
                    <a id="prev_brand" className="prev" href="/">
                        &lt;
                    </a>
                    <a id="next_brand" className="next" href="/">
                        &gt;
                    </a>
                </div>
                <ul id="braldLogo">
                    <li>
                        {/* Chuyển thành map trong Item */}
                        <ul className="brand_item">
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ListBrand;
