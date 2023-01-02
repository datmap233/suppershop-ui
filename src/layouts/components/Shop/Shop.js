import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListItem } from '~/components/Popper';
import Star from '~/components/Star';
import * as shopServices from '~/services/shopServices';

import './Shop.scss';

function Shop() {
    const { id } = useParams();

    const [data, setData] = useState();
    const [nameShop, setNameShop] = useState();
    const [nameUser, setNameUser] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await shopServices.getListProduct(`${id}`);
            setData(result.products);
        };
        fetchApi();
        const fetchApi1 = async () => {
            const result = await shopServices.getNameShop(`${id}`);
            setNameShop(result.info);
        };
        fetchApi1();
    }, []);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await shopServices.getNameUser(`${nameShop.user_id}`);
            setNameUser(result.result);
        };
        fetchApi();
    }, [nameShop]);
    return (
        <>
            <div className="clearfix"></div>
            <div className="title-shop">
                <div className="container">
                    <h3 className="title">{nameShop !== undefined && nameShop.name}</h3>
                    <h3 className="about">Owner: {nameUser !== undefined && nameUser.name}</h3>
                    <Star amount={nameShop !== undefined && nameShop.rating} />
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <ListItem classNameCol="col-md-3 col-sm-6" disableTitle data={data} />
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default Shop;
