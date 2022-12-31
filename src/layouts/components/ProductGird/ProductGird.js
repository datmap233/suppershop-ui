import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import images from '~/assets/images';
import { EmptyBox, PriceFilter } from '~/components/Box';
import Button from '~/components/Button';
import { ListItem } from '~/components/Popper';
import LeftBarAdvertise from './LeftBarAdvertise';

function ProductGird() {
    const { id } = useParams();

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
    const categories = [
        { name: 'Food', href: '/product-gird/bf8a16dd-48d8-49ef-ab42-e5a497fb16df' },
        { name: 'Fashion', href: '/product-gird/5db61ac9-d50e-4ed8-92a7-d71f7a7b6f11' },
        { name: 'Electronic device', href: '/product-gird/0122bebe-d24b-4e54-9bd5-9fb285fbeda9' },
        { name: 'House Ware', href: '/product-gird/1ed3e7c9-1df2-4363-a881-875f20f4e196' },
    ];

    const [dataSort, setDataSort] = useState();

    useEffect(() => {
        setDataSort(data);
    }, [data]);

    const [changeData, setChangeData] = useState(0);

    const handleOnChangeSort = (e) => {
        if (e.target.value === 'Default') {
            setDataSort(data);
            setChangeData(changeData + 1);
        }
        var sort = data;
        if (e.target.value === 'Price: Decrease') {
            sort = sort.sort(function (a, b) {
                return a.price < b.price ? 1 : -1;
            });
            setDataSort(sort);
            setChangeData(changeData + 1);
        } else if (e.target.value === 'Price: Ascending') {
            sort = sort.sort(function (a, b) {
                return a.price > b.price ? 1 : -1;
            });
            setDataSort(sort);
            setChangeData(changeData + 1);
        } else if (e.target.value === 'Name: Ascending') {
            sort = data.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
            setDataSort(sort);
            setChangeData(changeData + 1);
        } else if (e.target.value === 'Name: Decrease') {
            sort = data.sort((a, b) => -(a.name.charCodeAt(0) - b.name.charCodeAt(0)));
            setDataSort(sort);
            setChangeData(changeData + 1);
        }
    };

    return (
        <>
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <LeftBarAdvertise title="Categories" className="category leftbar" list={categories} />
                            <div className="clearfix"></div>
                            <PriceFilter position="leftbar" />
                            <div className="clearfix"></div>

                            <EmptyBox position="leftbar" />
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
                                            <select name="" onChange={handleOnChangeSort}>
                                                <option value="Default" selected>
                                                    Default
                                                </option>
                                                <option value="Name: Ascending">Name: Ascending</option>
                                                <option value="Name: Decrease">Name: Decrease</option>
                                                <option value="Price: Ascending">Price: Ascending</option>
                                                <option value="Price: Decrease">Price: Decrease</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <ListItem
                                    classNameCol={classNameCol}
                                    disableTitle
                                    oneRow={oneRow}
                                    data={dataSort}
                                    id={id}
                                    changeData={changeData}
                                />
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
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default ProductGird;
