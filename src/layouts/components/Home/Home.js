import { useEffect, useState } from 'react';
import { ListItem } from '~/components/Popper';
import HomeSlider from './HomeSlider';

function ListIProduct() {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/product/getList', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data.products);
            });
    }, []);
    return (
        <>
            <div className="clearfix"></div>
            <HomeSlider />
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <ListItem className="hot-products" classNameCol="col-md-3 col-sm-6" data={data} />
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default ListIProduct;
