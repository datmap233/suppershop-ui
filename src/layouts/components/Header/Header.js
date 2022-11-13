import images from '~/assets/images';
import Button from '~/components/Button';
import Cart from './Cart';

import Dropdown from './Dropdown';
import DropdownMenu from './DropdownMenu';
import Search from './Search';

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
        },
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
                                            <Dropdown list={list_lang} />
                                        </li>
                                        <li className="dropdown">
                                            <Dropdown list={list_price} />{' '}
                                        </li>
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
                                    <Search />
                                </li>
                                <li className="option-cart">
                                    <Cart />
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
                                        <DropdownMenu title="Home" />
                                    </li>
                                    <li>
                                        <DropdownMenu title="Men" />
                                    </li>
                                    <li>
                                        <DropdownMenu title="Women" />
                                    </li>
                                    <li>
                                        <DropdownMenu title="Gift" />
                                    </li>
                                    <li>
                                        <DropdownMenu title="Kids" />
                                    </li>
                                    <li>
                                        <DropdownMenu title="Blog" />
                                    </li>
                                    <li>
                                        <DropdownMenu title="Jewelry" />
                                    </li>
                                    <li>
                                    <DropdownMenu title="contact us" />
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
