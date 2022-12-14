import images from '~/assets/images';

function HomeSlider() {
    return (
        <div className="hom-slider">
            <div className="container">
                <div id="sequence">
                    <div className="sequence-prev">
                        <i className="fa fa-angle-left"></i>
                    </div>
                    <div className="sequence-next">
                        <i className="fa fa-angle-right"></i>
                    </div>
                    <ul className="sequence-canvas">
                        <li className="animate-in">
                            <div className="flat-caption caption1 formLeft delay300 text-center">
                                <span className="suphead">Paris show 2014</span>
                            </div>
                            <div className="flat-caption caption2 formLeft delay400 text-center">
                                <h1>Collection For Winter</h1>
                            </div>
                            <div className="flat-caption caption3 formLeft delay500 text-center">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    <br />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                </p>
                            </div>
                            <div className="flat-button caption4 formLeft delay600 text-center">
                                <a
                                    className="more"
                                    href="/"
                                    style={{ background: `url(${images.moreIcon}) right 10px top 7px no-repeat` }}
                                >
                                    More Details
                                </a>
                            </div>
                            <div className="flat-image formBottom delay200" data-duration="5" data-bottom="true">
                                <img src={images.sliderImage01} alt="" />
                            </div>
                        </li>
                        <li>
                            <div className="flat-caption caption2 formLeft delay400">
                                <h1>Collection For Winter</h1>
                            </div>
                            <div className="flat-caption caption3 formLeft delay500">
                                <h2>
                                    Etiam velit purus, luctus vitae velit sedauctor
                                    <br />
                                    egestas diam, Etiam velit purus.
                                </h2>
                            </div>
                            <div className="flat-button caption5 formLeft delay600">
                            <a
                                    className="more"
                                    href="/"
                                    style={{ background: `url(${images.moreIcon}) right 10px top 7px no-repeat` }}
                                >
                                    More Details
                                </a>
                            </div>
                            <div className="flat-image formBottom delay200" data-bottom="true">
                                <img src={images.sliderImage02} alt="" />
                            </div>
                        </li>
                        <li>
                            <div className="flat-caption caption2 formLeft delay400 text-center">
                                <h1>New Fashion of 2013</h1>
                            </div>
                            <div className="flat-caption caption3 formLeft delay500 text-center">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                </p>
                            </div>
                            <div className="flat-button caption4 formLeft delay600 text-center">
                            <a
                                    className="more"
                                    href="/"
                                    style={{ background: `url(${images.moreIcon}) right 10px top 7px no-repeat` }}
                                >
                                    More Details
                                </a>
                            </div>
                            <div className="flat-image formBottom delay200" data-bottom="true">
                                <img src={images.sliderImage03} alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="promotion-banner"
                style={{ background: `url(${images.black_transparent50}) left top repeat` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="promo-box">
                                <img src={images.promotion01} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="promo-box">
                                <img src={images.promotion02} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="promo-box">
                                <img src={images.promotion03} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSlider;
