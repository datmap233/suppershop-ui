import Item from './Item';

function ListBrand({ className, data }) {
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
                            {data &&
                                Object.keys(data).map(function (key) {
                                    return <Item data={data[key]} />;
                                })}
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ListBrand;
