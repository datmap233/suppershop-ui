function Report({ refReport }) {
    return (
        <>
            <div className="tab-content" style={{ display: 'none' }} ref={refReport}>
                <form>
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
                                    Your Report
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
        </>
    );
}

export default Report;
