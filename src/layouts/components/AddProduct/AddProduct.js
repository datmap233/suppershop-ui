import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import * as shopServices from '~/services/shopServices';

function AddProduct() {
    const categories = [
        { name: 'Food', id: 'bf8a16dd-48d8-49ef-ab42-e5a497fb16df' },
        { name: 'Fashion', id: '5db61ac9-d50e-4ed8-92a7-d71f7a7b6f11' },
        { name: 'Electronic device', id: '0122bebe-d24b-4e54-9bd5-9fb285fbeda9' },
        { name: 'House Ware', id: '1ed3e7c9-1df2-4363-a881-875f20f4e196' },
    ];
    const [data, setData] = useState({
        shopId: '3bdb8cd4-f8ae-4a99-b8cb-bf431f2ae9c6',
        name: '',
        description: '',
        price: '',
        image: '',
        remaining_stock: '',
        categoryId: categories[0].id,
    });
    const setInput = (e) => {
        const { name, value } = e.target;
        if (name === 'typepr') {
            setData((pre) => ({ ...pre, categoryId: categories[parseInt(value)].id }));
        } else if (name === 'name-product') {
            setData((pre) => ({ ...pre, name: value }));
        } else if (name === 'price') {
            setData((pre) => ({ ...pre, price: value }));
        } else if (name === 'remaining_stock') {
            setData((pre) => ({ ...pre, remaining_stock: value }));
        } else if (name === 'des') {
            setData((pre) => ({ ...pre, description: value }));
        } else if (name === 'image') {
            setData((pre) => ({ ...pre, image: value }));
        }
    };

    return (
        <>
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <div className="add-product">
                        <p>Home / Product / Add Product</p>
                        <h3>Add Product</h3>
                        <div className="input-name-product">
                            <input
                                type="text"
                                name="name-product"
                                placeholder="Enter Name Product"
                                onChange={setInput}
                                value={data.name}
                            />
                        </div>
                        <div className="des">
                            <label>Description</label>
                            <br />
                            <textarea
                                rows="10"
                                cols="50"
                                name="des"
                                onChange={setInput}
                                value={data.description}
                            ></textarea>
                        </div>
                        <div className="type-product">
                            <label>Type Product</label>
                            <select name="typepr" id="typepr" onChange={setInput}>
                                {Object.keys(categories).map(function (key) {
                                    return <option value={key}>{categories[key].name}</option>;
                                })}
                            </select>
                        </div>
                        <div className="input-name-product">
                            <label>Price: </label>
                            <input type="text" name="price" onChange={setInput} value={data.price} />
                        </div>
                        <div className="input-name-product">
                            <label>Remaining stock</label>
                            <input
                                type="text"
                                name="remaining_stock"
                                onChange={setInput}
                                value={data.remaining_stock}
                            />
                        </div>
                        <div className="input-name-product">
                            <label>Image link</label>
                            <input
                                type="text"
                                name="imageD"
                                onChange={setInput}
                                value={data.imageD}
                            />
                        </div>
                        <button
                            onClick={() => {
                                const fetchApi = async () => {
                                    const result = await shopServices.addProduct(data);
                                    console.log(result);
                                };
                                fetchApi();
                            }}
                        >
                            Add product
                        </button>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default AddProduct;
