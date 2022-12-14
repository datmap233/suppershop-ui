import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import * as orderServices from '~/services/orderServices';
import * as userServices from '~/services/userServices';
import './CheckOut.scss';

function CheckOut() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('Cart')));
    const [info, setInfo] = useState();
    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }
    const [sumPrice, setSumPrice] = useState(0);
    useEffect(() => {
        var sum = 0;
        for (let index = 0; index < data.length; index++) {
            const value = data[index];
            sum += value.unitPrice * value.quantity;
        }
        setSumPrice(sum);
        const fetchApi = async () => {
            const result = await userServices.getDetail(JSON.parse(localStorage.getItem('Login')).id);
            setInfo(result.result);
            console.log(result.result);
        };
        fetchApi();
    }, []);
    return (
        <>
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <div className="row">
                        <form>
                            <div className="row">
                                <div className="your-details">
                                    <h5>Your Address</h5>
                                    <div className="form-row">
                                        <label className="lebel-abs">
                                            Name
                                            <strong className="red">*</strong>
                                        </label>
                                        <input
                                            type="text"
                                            className="input namefild"
                                            name=""
                                            value={info !== undefined && info.name}
                                        />
                                    </div>
                                    <div className="form-row">
                                        <label className="lebel-abs">
                                            Address
                                            <strong className="red">*</strong>
                                        </label>
                                        <input
                                            type="text"
                                            className="input namefild"
                                            name=""
                                            value={info !== undefined && info.address}
                                        />
                                    </div>
                                    {Object.keys(data).map(function (key) {
                                        return (
                                            <div className="products-listItem" key={key}>
                                                <div className="products">
                                                    <div className="thumbnail">
                                                        <Button>
                                                            <img
                                                                style={{ height: '100%' }}
                                                                src={data !== undefined && data[key].image}
                                                                alt="Product Name"
                                                            />
                                                        </Button>
                                                    </div>
                                                    <div className="product-list-description">
                                                        <div className="productname">
                                                            <span title={data !== undefined && data[key].name}>
                                                                {data !== undefined && data[key].name}
                                                            </span>
                                                        </div>
                                                        <div>Quantity: {data[key].quantity}</div>
                                                        <div className="list_bottom fix_price_addToCart">
                                                            <div className="price">
                                                                <span className="new_price">
                                                                    {data !== undefined &&
                                                                        format(
                                                                            data[key].unitPrice * data[key].quantity,
                                                                        )}
                                                                    <sup>??</sup>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <h5>Total order value: {format(sumPrice)}</h5>
                                    <button
                                        onClick={() => {
                                            const fetchApi = async () => {
                                                const result = await orderServices.checkout({
                                                    userId: info.user_id,
                                                    address: info.address,
                                                    products: data,
                                                });
                                                console.log(result);
                                            };
                                            fetchApi();
                                            localStorage.setItem('Cart', JSON.stringify([]));
                                        }}
                                    >
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default CheckOut;
