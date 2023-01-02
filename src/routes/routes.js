import config from '~/config/';
import AddProductPage from '~/pages/AddProduct';
import CheckOutPage from '~/pages/CheckOut';
import DetailsPage from '~/pages/Details';
import ForgotPassswordPage from '~/pages/ForgotPasssword';

//Layout
import HomePage from '~/pages/Home';
import LoginPage from '~/pages/Login';
import ManageOrderPage from '~/pages/ManageOrder';
import MessagePage from '~/pages/Message';
import ProductGirdPage from '~/pages/ProductGird';
import ProductsManagePage from '~/pages/ProductsManage';
import RegisterPage from '~/pages/Register';
import SalesManagerPage from '~/pages/SalesManager';
import ShopPage from '~/pages/Shop';
import TrackOrderStatusPage from '~/pages/TrackOrderStatus';

const publicRoutes = [
    { path: config.routes.home, components: HomePage },
    { path: config.routes.productGird, components: ProductGirdPage },
    { path: config.routes.details, components: DetailsPage },
    { path: config.routes.checkout, components: CheckOutPage },
    { path: config.routes.register, components: RegisterPage },
    { path: config.routes.login, components: LoginPage },
    { path: config.routes.forgotPassword, components: ForgotPassswordPage },
    { path: config.routes.productsManage, components: ProductsManagePage },
    { path: config.routes.salesManager, components: SalesManagerPage },
    { path: config.routes.trackOrderStatus, components: TrackOrderStatusPage },
    { path: config.routes.manageOrder, components: ManageOrderPage },
    { path: config.routes.shop, components: ShopPage },
    { path: config.routes.message, components: MessagePage },
    { path: config.routes.addProduct, components: AddProductPage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
