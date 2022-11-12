import config from '~/config/';

//Layout
import HomePage from '~/pages/Home';

const publicRoutes = [
    { path: config.routes.home, components: HomePage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
