import config from '~/config/';

//Layout
import HomePage from '~/pages/Home';
import ProductGirdPage from '~/pages/ProductGird';

const publicRoutes = [
    { path: config.routes.home, components: HomePage },
    { path: config.routes.productgird, components: ProductGirdPage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
