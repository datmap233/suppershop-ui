import { useState } from 'react';
import images from '~/assets/images';
import { ColorFilter, EmptyBox, FblBox, PriceFilter, ProductTag } from '~/components/Box';
import Button from '~/components/Button';
import { ListBrand, ListItem } from '~/components/Popper';
import LeftBarAdvertise from './LeftBarAdvertise';

function ProductGird() {
    const [oneRow, setOneRow] = useState(false);
    const [classNameCol, setClassNameCol] = useState('col-md-4 col-sm-6');

    const onClickGridProducts = (element) => {
        setOneRow(true);
        setClassNameCol('products-listItem');
        const lists = document.querySelectorAll('.view-mode>.list');
        for (let i = 0; i < lists.length; i++) lists[i].classList.add('active');
        const grids = document.querySelectorAll('.view-mode>.grid');
        for (let i = 0; i < grids.length; i++) grids[i].classList.remove('active');
    };
    const onClickListProducts = () => {
        setOneRow(false);
        setClassNameCol('col-md-4 col-sm-6');
        const lists = document.querySelectorAll('.view-mode>.list');
        for (let i = 0; i < lists.length; i++) lists[i].classList.remove('active');
        const grids = document.querySelectorAll('.view-mode>.grid');
        for (let i = 0; i < grids.length; i++) grids[i].classList.add('active');
    };

    return (
        <>
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <LeftBarAdvertise title="Categories" className="category leftbar" />
                            <div className="clearfix"></div>
                            <LeftBarAdvertise title="Branch" className="branch leftbar" />
                            <div className="clearfix"></div>
                            <PriceFilter position="leftbar" />
                            <div className="clearfix"></div>
                            <ColorFilter position="leftbar" />
                            <div className="clearfix"></div>
                            <ProductTag position="leftbar" />
                            <div className="clearfix"></div>
                            <EmptyBox position="leftbar" />
                            <div className="clearfix"></div>
                            <EmptyBox position="leftbar" />
                            <div className="clearfix"></div>
                            <FblBox position="leftbar" />
                            <div className="clearfix"></div>
                            <div className="leftbanner">
                                <img src={images.promotion01} alt="" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="banner">
                                <div className="bannerslide" id="bannerslide">
                                    <ul className="slides">
                                        <li>
                                            <Button href="/">
                                                <img src={images.promotion01} alt="" />
                                            </Button>
                                        </li>
                                        <li>
                                            <Button href="/">
                                                <img src={images.promotion03} alt="" />
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="products-grid">
                                {/* Để tạm thời toolbar */}
                                <div className="toolbar">
                                    <div className="sorter">
                                        <div className="view-mode">
                                            <Button className="list" onClick={onClickGridProducts}>
                                                <div>
                                                    <img src={images.listIcon} alt="" />
                                                </div>
                                            </Button>
                                            <Button className="grid active" onClick={onClickListProducts}>
                                                <div>
                                                    <img src={images.gridIcon} alt="" />
                                                </div>
                                            </Button>
                                        </div>
                                        <div className="sort-by">
                                            Sort by :
                                            <select name="">
                                                <option value="Default" selected>
                                                    Default
                                                </option>
                                                <option value="Name">Name</option>
                                                <option value="Price">Price</option>
                                            </select>
                                        </div>
                                        <div className="limiter">
                                            Show :
                                            <select name="">
                                                <option value="3" selected>
                                                    3
                                                </option>
                                                <option value="6">6</option>
                                                <option value="9">9</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="pager">
                                        <Button href="/" className="prev-page">
                                            <i className="fa fa-angle-left"></i>
                                        </Button>
                                        <Button href="/" className="active">
                                            1
                                        </Button>
                                        <Button href="/">2</Button>
                                        <Button href="/">3</Button>
                                        <Button href="/" className="next-page">
                                            <i className="fa fa-angle-right"></i>
                                        </Button>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <ListItem classNameCol={classNameCol} disableTitle oneRow={oneRow} />
                                <div className="clearfix"></div>
                                <div className="toolbar">
                                    <div className="sorter bottom">
                                        <div className="view-mode">
                                            <Button className="list" onClick={onClickGridProducts}>
                                                <div>
                                                    <img src={images.listIcon} alt="" />
                                                </div>
                                            </Button>
                                            <Button className="grid active" onClick={onClickListProducts}>
                                                <div>
                                                    <img src={images.gridIcon} alt="" />
                                                </div>
                                            </Button>
                                        </div>
                                        <div className="sort-by">
                                            Sort by :
                                            <select name="">
                                                <option value="Default" selected>
                                                    Default
                                                </option>
                                                <option value="Name">Name</option>
                                                <option value="">
                                                    <strong>#</strong>Price
                                                </option>
                                            </select>
                                        </div>
                                        <div className="limiter">
                                            Show :
                                            <select name="">
                                                <option value="3" selected>
                                                    3
                                                </option>
                                                <option value="6">6</option>
                                                <option value="9">9</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="pager">
                                        <Button href="/" className="prev-page">
                                            <i className="fa fa-angle-left"></i>
                                        </Button>
                                        <Button href="/" className="active">
                                            1
                                        </Button>
                                        <Button href="/">2</Button>
                                        <Button href="/">3</Button>
                                        <Button href="/" className="next-page">
                                            <i className="fa fa-angle-right"></i>
                                        </Button>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <ListBrand />
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default ProductGird;
