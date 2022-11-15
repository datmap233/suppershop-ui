function Review({ refReview1, refReview2 }) {
    return (
        <>
            <div className="tab-content" id="Reviews" style={{ display: 'none' }} ref={refReview1}>
                <form>
                    <table>
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th>1 star</th>
                                <th>2 stars</th>
                                <th>3 stars</th>
                                <th>4 stars</th>
                                <th>5 stars</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Quality</td>
                                <td>
                                    <input type="radio" name="quality" value="Blue" />
                                </td>
                                <td>
                                    <input type="radio" name="quality" value="" />
                                </td>
                                <td>
                                    <input type="radio" name="quality" value="" />
                                </td>
                                <td>
                                    <input type="radio" name="quality" value="" />
                                </td>
                                <td>
                                    <input type="radio" name="quality" value="" />
                                </td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>
                                    <input type="radio" name="price" value="" />
                                </td>
                                <td>
                                    <input type="radio" name="price" value="" />
                                </td>
                                <td>
                                    <input type="radio" name="price" value="" />
                                </td>
                                <td>
                                    <input type="radio" name="price" value="" />
                                </td>
                                <td>
                                    <input type="radio" name="price" value="" />
                                </td>
                            </tr>
                            <tr>
                                <td>Value</td>
                                <td>
                                    <input type="radio" name="value" value="" />
                                </td>
                                <td>
                                    <input type="radio" name="value" value="" />
                                </td>
                                <td>
                                    <input type="radio" name="value" value="" />
                                </td>
                                <td>
                                    <input type="radio" name="value" value="" />
                                </td>
                                <td>
                                    <input type="radio" name="value" value="" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="form-row">
                                <label className="lebel-abs">
                                    Your Name
                                    <strong className="red">*</strong>
                                </label>
                                <input type="text" name="" className="input namefild" />
                            </div>
                            <div className="form-row">
                                <label className="lebel-abs">
                                    Your Email
                                    <strong className="red">*</strong>
                                </label>
                                <input type="email" name="" className="input emailfild" />
                            </div>
                            <div className="form-row">
                                <label className="lebel-abs">
                                    Summary of You Review
                                    <strong className="red">*</strong>
                                </label>
                                <input type="text" name="" className="input summeryfild" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="form-row">
                                <label className="lebel-abs">
                                    Your Name
                                    <strong className="red">*</strong>
                                </label>
                                <textarea className="input textareafild" name="" rows="7"></textarea>
                            </div>
                            <div className="form-row">
                                <input type="submit" value="Submit" className="button" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="tab-content" style={{ display: 'none' }} ref={refReview2}>
                <div className="review">
                    <p className="rating">
                        <i className="fa fa-star light-red"></i>
                        <i className="fa fa-star light-red"></i>
                        <i className="fa fa-star light-red"></i>
                        <i className="fa fa-star-half-o gray"></i>
                        <i className="fa fa-star-o gray"></i>
                    </p>
                    <h5 className="reviewer">Reviewer name</h5>
                    <p className="review-date">Date: 01-01-2014</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros neque. In sapien est,
                        malesuada non interdum id, cursus vel neque.
                    </p>
                </div>
                <div className="review">
                    <p className="rating">
                        <i className="fa fa-star light-red"></i>
                        <i className="fa fa-star light-red"></i>
                        <i className="fa fa-star light-red"></i>
                        <i className="fa fa-star-half-o gray"></i>
                        <i className="fa fa-star-o gray"></i>
                    </p>
                    <h5 className="reviewer">Reviewer name</h5>
                    <p className="review-date">Date: 01-01-2014</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros neque. In sapien est,
                        malesuada non interdum id, cursus vel neque.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Review;
