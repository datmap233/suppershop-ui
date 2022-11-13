import { ListBrand, ListItem } from "~/components/Popper";
import HomeSlider from "./HomeSlider";

function Home() {
    return (
        <>
            <div className="clearfix"></div>
            <HomeSlider/>
            <div className="clearfix"></div>
            <div className="container_fullwidth">
                <div className="container">
                    <ListItem className="hot-products" classNameCol="col-md-3 col-sm-6"/>
                    <div className="clearfix"></div>
                    <ListItem className="featured-products" classNameCol="col-md-3 col-sm-6"/>
                    <div className="clearfix"></div>
                    <ListBrand />
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default Home;
