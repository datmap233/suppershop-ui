import { useRef } from 'react';
import Button from '~/components/Button';

import './CheckOut.scss';

function CheckOut() {
    const refSteps = useRef();

    // eslint-disable-next-line no-const-assign
    refSteps.current = [];
    const pushRefSteps = (el) => {
        if (el && !refSteps.current.includes(el)) {
            refSteps.current.push(el);
        }
    };
    const handleOnClickSteps = (index) => {
        // eslint-disable-next-line array-callback-return
        refSteps.current.map((value, indexSub) => {
            if (indexSub === index) refSteps.current[indexSub].classList.add('active');
            else refSteps.current[indexSub].classList.remove('active');
        });
    };
    return (
        <>
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <div className="row">
                        <div className="checkout-page">
                            <ol className="checkout-steps">
                                <li className="steps active" ref={pushRefSteps}>
                                    <Button className="step-title" onClick={() => handleOnClickSteps(0)}>
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
                                                        By creating an account you will be able to shop faste be up to
                                                        date on an order's status, and keep track of the orders you have
                                                        previously made.
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
                                                            <input
                                                                type="email"
                                                                className="input namefild"
                                                                name=""
                                                                placeholder="Enter your email"
                                                            />
                                                        </div>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                Password
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input
                                                                type="password"
                                                                className="input namefild"
                                                                name=""
                                                                placeholder="Enter your password"
                                                            />
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
                                <li className="steps" ref={pushRefSteps}>
                                    <Button className="step-title" onClick={() => handleOnClickSteps(1)}>
                                        02. billing information
                                    </Button>
                                    <div className="step-description">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="your-details">
                                                        <h5>Your Persional Details</h5>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                First Name
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input type="text" className="input namefild" name="" />
                                                        </div>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                Last Name
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input type="text" className="input namefild" name="" />
                                                        </div>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                Email
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input type="text" className="input namefild" name="" />
                                                        </div>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                Telephone
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input type="text" className="input namefild" name="" />
                                                        </div>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                Fax
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input type="text" className="input namefild" name="" />
                                                        </div>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                Company
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input type="text" className="input namefild" name="" />
                                                        </div>
                                                        <div className="pass-wrap">
                                                            <div className="form-row">
                                                                <label className="lebel-abs">
                                                                    Your Password
                                                                    <strong className="red">*</strong>
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    className="input namefild"
                                                                    name=""
                                                                />
                                                            </div>
                                                            <div className="form-row">
                                                                <label className="lebel-abs">
                                                                    Confird Your Password
                                                                    <strong className="red">*</strong>
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    className="input cpass"
                                                                    name=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <h5>Method Payment</h5>
                                                        <p>
                                                            <span className="input-radio">
                                                                <input type="radio" name="user" />
                                                            </span>
                                                            <span className="text">
                                                            Payment on delivery.
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <span className="input-radio">
                                                                <input type="radio" name="user" />
                                                            </span>
                                                            <span className="text">
                                                            Online payment.
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="your-details">
                                                        <h5>Your Address</h5>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                Address 01
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input type="text" className="input namefild" name="" />
                                                        </div>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                Address 02
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input type="text" className="input namefild" name="" />
                                                        </div>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                City
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input type="text" className="input namefild" name="" />
                                                        </div>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                Pass Code
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input type="text" className="input namefild" name="" />
                                                        </div>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                Country
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input type="text" className="input namefild" name="" />
                                                        </div>
                                                        <div className="form-row">
                                                            <label className="lebel-abs">
                                                                Region / State
                                                                <strong className="red">*</strong>
                                                            </label>
                                                            <input type="text" className="input namefild" name="" />
                                                        </div>
                                                        <p className="privacy">
                                                            <span className="input-radio">
                                                                <input type="radio" name="user" />
                                                            </span>
                                                            <span className="text">
                                                                I have read and agree to the
                                                                <a href="/" className="red">
                                                                    Privacy Policy
                                                                </a>
                                                            </span>
                                                        </p>
                                                        <button>Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default CheckOut;
