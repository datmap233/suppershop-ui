import config from '~/config/';
import CheckOutPage from '~/pages/CheckOut';
import DetailsPage from '~/pages/Details';

//Layout
import HomePage from '~/pages/Home';
import ProductGirdPage from '~/pages/ProductGird';

const publicRoutes = [
    { path: config.routes.home, components: HomePage },
    { path: config.routes.productgird, components: ProductGirdPage },
    { path: config.routes.details, components: DetailsPage },
    { path: config.routes.checkout, components: CheckOutPage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
