import { useRef } from 'react';
import images from '~/assets/images';
import { FblBox, ProductTag } from '~/components/Box';
import Newsletter from '~/components/Box/Newsletter';
import Special from '~/components/Box/Special';
import Button from '~/components/Button';
import { ListBrand, ListItem } from '~/components/Popper';
import Description from './Description';
import Product from './Product';
import Review from './Review';
import Tags from './Tags';

function Details() {
    const refDecrip = useRef();
    const refReview1 = useRef();
    const refReview2 = useRef();
    const refTag = useRef();

    const handleOnClickDecrip = () => {
        refDecrip.current.style.display = 'block';
        refReview1.current.style.display = 'none';
        refReview2.current.style.display = 'none';
        refTag.current.style.display = 'none';
    };
    const handleOnClickReview = () => {
        refDecrip.current.style.display = 'none';
        refReview1.current.style.display = 'block';
        refReview2.current.style.display = 'block';
        refTag.current.style.display = 'none';
    };
    const handleOnClickTag = () => {
        refDecrip.current.style.display = 'none';
        refReview1.current.style.display = 'none';
        refReview2.current.style.display = 'none';
        refTag.current.style.display = 'block';
    };

    return (
        <>
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <Product />
                            <div className="clearfix"></div>
                            <div className="tab-box">
                                <div id="tabnav">
                                    <ul>
                                        <li>
                                            <Button onClick={handleOnClickDecrip}>DESCRIPTION</Button>
                                        </li>
                                        <li>
                                            <Button onClick={handleOnClickReview}>REVIEW</Button>
                                        </li>
                                        <li>
                                            <Button onClick={handleOnClickTag}>PRODUCT TAGS</Button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content-wrap">
                                    <Description refDecrip={refDecrip} />
                                    <Review refReview1={refReview1} refReview2={refReview2} />
                                    <Tags refTag={refTag} />
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <ListItem className="hot-products" classNameCol="col-md-4 col-sm-4" />
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-md-3">
                            <Special />
                            <div className="clearfix"></div>
                            <ProductTag position="leftbar" />
                            <div className="clearfix"></div>
                            <Newsletter/>
                            <div className="clearfix"></div>
                            <FblBox position="leftbar" />
                            <div className="clearfix"></div>
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

export default Details;
