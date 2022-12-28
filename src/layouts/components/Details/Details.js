import Button from '~/components/Button';
import Description from './Description';
import Product from './Product';

function Details() {
    return (
        <>
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <div className="row">
                        <Product />
                        <div className="clearfix"></div>
                        <div className="tab-box">
                            <div id="tabnav">
                                <ul>
                                    <li>
                                        <Button>DESCRIPTION</Button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content-wrap">
                                <Description />
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default Details;
