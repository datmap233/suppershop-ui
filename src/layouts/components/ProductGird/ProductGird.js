import images from '~/assets/images';
import { ColorFilter, EmptyBox, FblBox, PriceFilter, ProductTag } from '~/components/Box';
import Button from '~/components/Button';
import { ListBrand, ListItem } from '~/components/Popper';
import LeftBarAdvertise from './LeftBarAdvertise';

function ProductGird() {
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
                                            <Button href="productlitst.html" className="list">
                                                <img src={images.listIcon} alt="" />
                                            </Button>
                                            <Button href="/" className="grid active">
                                                <img src={images.gridIcon} alt="" />
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
                                <div className="row">
                                    <ListItem classNameCol="col-md-4 col-sm-6" disableTitle />
                                    {/* products-listItem */}

                                </div>
                                <div className="clearfix"></div>
                                <div className="toolbar">
                                    <div className="sorter bottom">
                                        <div className="view-mode">
                                            <Button href="productlitst.html" className="list">
                                                <img src={images.listIcon} alt="" />
                                            </Button>
                                            <Button href="/" className="grid active">
                                                <img src={images.gridIcon} alt="" />
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
