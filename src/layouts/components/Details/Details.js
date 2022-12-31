import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '~/components/Button';
import Description from './Description';
import Product from './Product';
import * as productServices from '~/services/productServices';

function Details() {
    const { id } = useParams();

    const [data, setData] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await productServices.getDetails(`${id}`);
            setData(result.info);
        };
        fetchApi();
    }, []);
    return (
        <>
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <div className="row">
                        <Product data={data} />
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
                                <Description description={data !== undefined && data.description} />
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
