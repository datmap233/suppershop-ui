import images from '~/assets/images';
import Button from '~/components/Button';

import Dropdown from './Dropdown';
import DropdownMenu from './DropdownMenu';

function Header() {
    const list_lang = [
        {
            title: 'Eng',
            link: '/',
        },
        {
            title: 'Vns',
            link: '/',
        },
        {
            title: 'Fer',
            link: '/',
        },
        {
            title: 'Gem',
            link: '/',
        },
    ];

    const list_price = [
        {
            title: 'USD',
            link: '/',
        },
        {
            title: 'UKD',
            link: '/',
        },
        {
            title: 'FER',
            link: '/',
        }
    ];

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
                                <div className="col-md-3">
                                    <ul className="option_nav">
                                        <li className="dropdown">
                                            <Dropdown list={list_lang}/>
                                        </li>
                                        <li className="dropdown">
                                            <Dropdown list={list_price}/>                                        </li>
                                    </ul>
                                </div>
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
                                        <li>
                                            <Button
                                                href="checkout.html"
                                                className="log"
                                                style={{ background: `url(${images.loginbg}) left top no-repeat` }}
                                            >
                                                Login
                                            </Button>
                                        </li>
                                        <li>
                                            <Button
                                                href="checkout2.html"
                                                className="reg"
                                                style={{ background: `url(${images.regbg}) left top no-repeat` }}
                                            >
                                                Register
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="header_bottom">
                            <ul className="option">
                                <li id="search" className="search">
                                    <form>
                                        <input
                                            className="search-submit"
                                            type="submit"
                                            value=""
                                            style={{ background: `url(${images.searchBg}) center center no-repeat` }}
                                        />
                                        <input
                                            className="search-input"
                                            placeholder="Enter your search term..."
                                            type="text"
                                            value=""
                                            name="search"
                                        />
                                    </form>
                                </li>
                                <li className="option-cart">
                                    <Button
                                        href="/"
                                        className="cart-icon"
                                        style={{ background: `url(${images.carticon}) center center no-repeat` }}
                                    >
                                        cart <span className="cart_no">02</span>
                                    </Button>
                                    <ul className="option-cart-item">
                                        <li>
                                            <div className="cart-item">
                                                <div className="image">
                                                    <img src={images.products01Thum} alt="" />
                                                </div>
                                                <div className="item-description">
                                                    <p className="name">Lincoln chair</p>
                                                    <p>
                                                        Size: <span className="light-red">One size</span>
                                                        <br />
                                                        Quantity: <span className="light-red">01</span>
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <p className="price">$30.00</p>
                                                    <Button href="/" className="remove">
                                                        <img src={images.remove} alt="remove" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cart-item">
                                                <div className="image">
                                                    <img src={images.products02Thum} alt="" />
                                                </div>
                                                <div className="item-description">
                                                    <p className="name">Lincoln chair</p>
                                                    <p>
                                                        Size: <span className="light-red">One size</span>
                                                        <br />
                                                        Quantity: <span className="light-red">01</span>
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <p className="price">$30.00</p>
                                                    <Button href="/" className="remove">
                                                        <img src={images.remove} alt="remove" />
                                                    </Button>
                                                </div>
                                            </div>
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
                                </li>
                            </ul>
                            <div className="navbar-header">
                                <button
                                    type="button"
                                    className="navbar-toggle"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse"
                                >
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li>
                                        <DropdownMenu />
                                    </li>
                                    <li>
                                        <Button href="productgird.html">men</Button>
                                    </li>
                                    <li>
                                        <Button href="productlitst.html">women</Button>
                                    </li>
                                    {/* <li className="dropdown">
                                        <Button href="/" className="dropdown-toggle" data-toggle="dropdown">
                                            Fashion
                                        </Button>
                                        <div className="dropdown-menuu mega-menu">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <ul className="mega-menu-links">
                                                        <li>
                                                            <Button href="productgird.html">New Collection</Button>
                                                        </li>
                                                        <li>
                                                            <Button href="productgird.html">Shirts & tops</Button>
                                                        </li>
                                                        <li>
                                                            <Button href="productgird.html">Laptop & Brie</Button>
                                                        </li>
                                                        <li>
                                                            <Button href="productgird.html">Dresses</Button>
                                                        </li>
                                                        <li>
                                                            <Button href="productgird.html">Blazers & Jackets</Button>
                                                        </li>
                                                        <li>
                                                            <Button href="productgird.html">Shoulder Bags</Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <ul className="mega-menu-links">
                                                        <li>
                                                            <Button href="productgird.html">New Collection</Button>
                                                        </li>
                                                        <li>
                                                            <Button href="productgird.html">Shirts & tops</Button>
                                                        </li>
                                                        <li>
                                                            <Button href="productgird.html">Laptop & Brie</Button>
                                                        </li>
                                                        <li>
                                                            <Button href="productgird.html">Dresses</Button>
                                                        </li>
                                                        <li>
                                                            <Button href="productgird.html">Blazers & Jackets</Button>
                                                        </li>
                                                        <li>
                                                            <Button href="productgird.html">Shoulder Bags</Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li> */}
                                    <li>
                                        <Button href="productgird.html">gift</Button>
                                    </li>
                                    <li>
                                        <Button href="productgird.html">kids</Button>
                                    </li>
                                    <li>
                                        <Button href="productgird.html">blog</Button>
                                    </li>
                                    <li>
                                        <Button href="productgird.html">jewelry</Button>
                                    </li>
                                    <li>
                                        <Button href="contact.html">contact us</Button>
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
