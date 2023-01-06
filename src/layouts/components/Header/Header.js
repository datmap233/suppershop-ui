import images from '~/assets/images';
import Button from '~/components/Button';
import Cart from './Cart';

import DropdownMenu from './DropdownMenu';
import Search from './Search';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect } from 'react';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-2">
                        <div className="logo">
                            <Button href="/">
                                <img src={images.logo} alt="SuperShop" />
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-10">
                        <div className="header_top">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <ul className="topmenu">
                                        <li>
                                            <Button href="/">About Us</Button>
                                        </li>
                                        <li>
                                            <Button href="/">News</Button>
                                        </li>
                                        <li>
                                            <Button href="/">Service</Button>
                                        </li>
                                        <li>
                                            <Button href="/">Recruiment</Button>
                                        </li>
                                        <li>
                                            <Button href="/">Media</Button>
                                        </li>
                                        <li>
                                            <Button href="/">Support</Button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="usermenu">
                                        {JSON.parse(localStorage.getItem('Login')) !== null ? (
                                            <HeadlessTippy
                                                interactive
                                                appendTo={() => document.body}
                                                delay={[0, 500]}
                                                placement="bottom-end"
                                                render={(attrs) => (
                                                    <ul
                                                        className="option-cart-item"
                                                        style={{ width: '200px' }}
                                                        tabIndex="-1"
                                                        {...attrs}
                                                    >
                                                        <li>
                                                            <Button href="/manage-order" className="reg">
                                                                Manage Order
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button href="/products-manage" className="reg">
                                                                Manage products
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button href="/track-order-status" className="reg">
                                                                Track order status
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button href="/sales-manager" className="reg">
                                                                Sales manager
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button
                                                                href="/"
                                                                className="reg"
                                                                onClick={() => {
                                                                    localStorage.removeItem('Login');
                                                                }}
                                                            >
                                                                Logout
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                )}
                                            >
                                                <li>
                                                    <Button href="/" className="reg">
                                                        {JSON.parse(localStorage.getItem('Login')).username}
                                                    </Button>
                                                </li>
                                            </HeadlessTippy>
                                        ) : (
                                            <>
                                                <li>
                                                    <Button
                                                        href="/login"
                                                        className="log"
                                                        style={{
                                                            background: `url(${images.loginbg}) left top no-repeat`,
                                                        }}
                                                    >
                                                        Login
                                                    </Button>
                                                </li>
                                                <li>
                                                    <Button
                                                        href="/register"
                                                        className="reg"
                                                        style={{
                                                            background: `url(${images.regbg}) left top no-repeat`,
                                                        }}
                                                    >
                                                        Register
                                                    </Button>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="header_bottom">
                            <ul className="option">
                                <li id="search" className="search">
                                    <Search />
                                </li>
                                <li className="option-cart">
                                    <Cart />
                                </li>
                            </ul>
                            <div className="navbar-collapsee collapse" style={{ display: 'flex' }}>
                                <ul className="nav navbar-nav">
                                    <li>
                                        <DropdownMenu title="Home" />
                                    </li>
                                    <li>
                                        <DropdownMenu
                                            title="Food"
                                            href="/product-gird/bf8a16dd-48d8-49ef-ab42-e5a497fb16df"
                                        />
                                    </li>
                                    <li>
                                        <DropdownMenu
                                            title="Fashion"
                                            href="/product-gird/5db61ac9-d50e-4ed8-92a7-d71f7a7b6f11"
                                        />
                                    </li>
                                    <li>
                                        <DropdownMenu
                                            title="Electronic device"
                                            href="/product-gird/0122bebe-d24b-4e54-9bd5-9fb285fbeda9"
                                        />
                                    </li>
                                    <li>
                                        <DropdownMenu
                                            title="House Ware"
                                            href="/product-gird/1ed3e7c9-1df2-4363-a881-875f20f4e196"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
