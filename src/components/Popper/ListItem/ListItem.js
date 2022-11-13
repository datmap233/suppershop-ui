import Item from './Item';

function ListItem({ className, classNameCol, disableTitle = false , oneRow=false}) {
    return (
        <>
            <div className={className}>
                {!disableTitle && (
                    <>
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
                    </>
                )}
                <div className="row">
                    <Item sale={"New"} className={classNameCol} oneRow={false}/>
                    <Item className={classNameCol} oneRow={false}/>
                    <Item className={classNameCol} oneRow={false}/>
                    <Item className={classNameCol} oneRow={false}/>
                    <Item className={classNameCol} oneRow={false}/>
                    <Item className={classNameCol} oneRow={false}/>
                    <Item className={classNameCol} oneRow={false}/>
                    <Item className={classNameCol} oneRow={false}/>
                </div>
            </div>
        </>
    );
}

export default ListItem;
