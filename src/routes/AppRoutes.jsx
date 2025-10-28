import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProductDetail from '../pages/ProductDetail';
import ActivateAccount from '../components/Registration/ActivateAccount';
import PrivateRoute from '../components/PrivateRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import Orders from '../pages/Orders';
import PaymentSuccess from '../pages/PaymentSuccess';
import AddProduct from '../pages/AddProduct';
import MainLayout from '../layouts/MainLayout';
import ContactPage from '../pages/ContactPage';
import Blog from '../pages/Blog';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes  */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="shop" element={<Shop />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="activate/:uid/:token" element={<ActivateAccount />} />
                <Route path="shop/:productId" element={<ProductDetail />} />
            </Route>

            {/* Private Routes  */}
            <Route
                path="dashboard"
                element={
                <PrivateRoute>
                    <DashboardLayout />
                </PrivateRoute>
                }
                >
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="cart" element={<Cart />} />
                <Route path="orders" element={<Orders />} />
                <Route path="payment/success/" element={<PaymentSuccess />} />
                <Route path="products/add" element={<AddProduct />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;