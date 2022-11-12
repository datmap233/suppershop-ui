import Button from '~/components/Button';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import "./DropdownMenu.scss"

function DropdownMenu({ list }) {
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
                            <Button href="index.html">home</Button>
                        </li>
                        <li>
                            <Button href="home2.html">home2</Button>
                        </li>
                        <li>
                            <Button href="home3.html">home3</Button>
                        </li>
                        <li>
                            <Button href="productlitst.html">Productlitst</Button>
                        </li>
                        <li>
                            <Button href="productgird.html">Productgird</Button>
                        </li>
                        <li>
                            <Button href="details.html">Details</Button>
                        </li>
                        <li>
                            <Button href="cart.html">Cart</Button>
                        </li>
                        <li>
                            <Button href="checkout.html">CheckOut</Button>
                        </li>
                        <li>
                            <Button href="checkout2.html">CheckOut2</Button>
                        </li>
                        <li>
                            <Button href="contact.html">contact</Button>
                        </li>
                    </ul>
                </div>
            )}
        >
            <div className='dropdown-btn-header'>
            <Button href="/" className="dropdown-toggle" data-toggle="dropdown">
                Home
            </Button>
            </div>
        </HeadlessTippy>
    );
}

export default DropdownMenu;
