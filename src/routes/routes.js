import config from '~/config/';

//Layout
import Home from '~/pages/Home';

const publicRoutes = [
    { path: config.routes.home, components: Home },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
