import Item from './Item';
import './ListProduct.scss';

function ListProduct({ className, classNameCol, disableTitle = false, oneRow = false, data }) {
    return (
        <>
            <div className="row">
                <Item sale={'New'} className={classNameCol} oneRow={oneRow} />
                <Item className={classNameCol} oneRow={oneRow} />
                <Item className={classNameCol} oneRow={oneRow} />
                <Item className={classNameCol} oneRow={oneRow} />
                <Item className={classNameCol} oneRow={oneRow} />
                <Item className={classNameCol} oneRow={oneRow} />
                <Item className={classNameCol} oneRow={oneRow} />
                <Item className={classNameCol} oneRow={oneRow} />
            </div>
        </>
    );
}

export default ListProduct;
