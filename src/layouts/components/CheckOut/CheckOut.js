import { FblBox } from '~/components/Box';
import Newsletter from '~/components/Box/Newsletter';
import Special from '~/components/Box/Special';
import Button from '~/components/Button';
import { ListBrand } from '~/components/Popper';
import Tags from '../Details/Tags';

import './CheckOut.scss'

function CheckOut() {
    return (
        <>
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Special position={'leftbar'} />
                            <Tags position={'leftbar'} />
                            <Newsletter position={'leftbar'} />
                            <FblBox position={'leftbar'} />
                        </div>
                        <div className="col-md-9">
                            <div className="checkout-page">
                                <ol className="checkout-steps">
                                    <li className="steps active">
                                        <Button href="checkout.html" className="step-title">
                                            01. checkout opition
                                        </Button>
                                        <div className="step-description">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="new-customer">
                                                        <h5>New Customer</h5>
                                                        <label>
                                                            <span className="input-radio">
                                                                <input type="radio" name="user" />
                                                            </span>
                                                            <span className="text">
                                                                I wish to subscribe to the Herbal Store newsletter.
                                                            </span>
                                                        </label>
                                                        <label>
                                                            <span className="input-radio">
                                                                <input type="radio" name="user" />
                                                            </span>
                                                            <span className="text">
                                                                My delivery and billing addresses are the same.
                                                            </span>
                                                        </label>
                                                        <p className="requir">
                                                            By creating an account you will be able to shop faste be up
                                                            to date on an order's status, and keep track of the orders
                                                            you have previously made.
                                                        </p>
                                                        <button>Continue</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="run-customer">
                                                        <h5>Rerunning Customer</h5>
                                                        <form>
                                                            <div className="form-row">
                                                                <label className="lebel-abs">
                                                                    Email
                                                                    <strong className="red">*</strong>
                                                                </label>
                                                                <input type="email" className="input namefild" name="" placeholder='Enter your email'/>
                                                            </div>
                                                            <div className="form-row">
                                                                <label className="lebel-abs">
                                                                    Password
                                                                    <strong className="red">*</strong>
                                                                </label>
                                                                <input type="password" className="input namefild" name="" placeholder='Enter your password'/>
                                                            </div>
                                                            <p className="forgoten">
                                                                <Button href="/">Forgoten your password?</Button>
                                                            </p>
                                                            <button>Login</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="steps">
                                        <Button href="checkout2.html" className="step-title">
                                            02. billing information
                                        </Button>
                                    </li>
                                    <li className="steps">
                                        <Button href="checkout2.html" className="step-title">
                                            03. Shipping information
                                        </Button>
                                    </li>
                                    <li className="steps">
                                        <Button href="/" className="step-title">
                                            04. shipping method
                                        </Button>
                                    </li>
                                    <li className="steps">
                                        <Button href="/" className="step-title">
                                            05. payment information
                                        </Button>
                                    </li>
                                    <li className="steps">
                                        <Button href="/" className="step-title">
                                            06. oder review
                                        </Button>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <ListBrand className="our-brand" />
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default CheckOut;
