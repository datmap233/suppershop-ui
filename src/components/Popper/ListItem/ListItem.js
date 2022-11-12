import Item from './Item';

function ListItem({className}) {
    return (
        <>
            <div className={className}>
                <h3 className="title">
                    <strong>Featured </strong> Products
                </h3>
                <div className="control">
                    <a id="prev_featured" className="prev" href="/">
                        &lt;
                    </a>
                    <a id="next_featured" className="next" href="/">
                        &gt;
                    </a>
                </div>
                <ul id="featured">
                    <li>
                        <div className="row">
                            <Item sale={20}/>
                            <Item/>
                            <Item/>
                            <Item/>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                        <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ListItem;
