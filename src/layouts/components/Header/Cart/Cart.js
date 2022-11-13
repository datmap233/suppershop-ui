import images from '~/assets/images';
import Button from '~/components/Button';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Item from './Item';

function Cart() {
    return (
        <>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                delay={[0, 500]}
                placement="bottom-end"
                render={(attrs) => (
                    <ul className="option-cart-item" tabIndex="-1" {...attrs}>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <span className="total">
                                Total <strong>$60.00</strong>
                            </span>
                            <button className="checkout" onClick="location.href='checkout.html'">
                                CheckOut
                            </button>
                        </li>
                    </ul>
                )}
            >
                <div className="header-search-cart-btn">
                    <Button to="/" className="search-submit">
                        <img src={images.carticon} alt="" style={{ height: '100%', width: '100%' }} />
                    </Button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Cart;
