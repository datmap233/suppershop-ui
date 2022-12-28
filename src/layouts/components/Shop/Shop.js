import ListProduct from '~/components/Popper/ListProduct';

import './Shop.scss';

function Shop() {
    return (
        <>
            <div className="clearfix"></div>
            <div className="title-shop">
                <div className="container">
                    <h3 className="title">Cửa hàng quần áo Thiên An</h3>
                    <h3 className="about">Cửa hàng quần áo Thiên An</h3>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <ListProduct classNameCol="col-md-3 col-sm-6" />
                    <div className="clearfix"></div>
                    <ListProduct classNameCol="col-md-3 col-sm-6" />
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default Shop;
