import Button from '~/components/Button';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import "./DropdownMenu.scss"

function DropdownMenu({ title }) {
    return (
        <HeadlessTippy
            interactive
            appendTo={() => document.body}
            delay={[0, 500]}
            placement="bottom-start"
            render={(attrs) => (
                <div className="dropdown-menuu" >
                    <ul className="mega-menu-links" tabIndex="-1" {...attrs}>
                        <li>
                            <Button to="/">home</Button>
                        </li>
                        <li>
                            <Button to="home2.html">home2</Button>
                        </li>
                        <li>
                            <Button to="home3.html">home3</Button>
                        </li>
                        <li>
                            <Button to="/product-gird">Productlitst</Button>
                        </li>
                        <li>
                            <Button to="/product-gird">Productgird</Button>
                        </li>
                        <li>
                            <Button to="details.html">Details</Button>
                        </li>
                        <li>
                            <Button to="cart.html">Cart</Button>
                        </li>
                        <li>
                            <Button to="checkout.html">CheckOut</Button>
                        </li>
                        <li>
                            <Button to="checkout2.html">CheckOut2</Button>
                        </li>
                        <li>
                            <Button to="contact.html">contact</Button>
                        </li>
                    </ul>
                </div>
            )}
        >
            <div className='dropdown-btn-header'>
            <Button href="/" className="dropdown-toggle" data-toggle="dropdown">
                {title}
            </Button>
            </div>
        </HeadlessTippy>
    );
}

export default DropdownMenu;
