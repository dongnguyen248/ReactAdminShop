import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';

function App() {
    let admin = false;
    if (localStorage.getItem('persist:root') != null) {
        let userLocalStorage = JSON.parse(
            JSON.parse(localStorage.getItem('persist:root')).user,
        );
        if (userLocalStorage.currentUser != null) {
            admin = userLocalStorage.currentUser.isAdmin;
        }
    }
    // let userLocalStorage = JSON.parse(
    //   JSON.parse(localStorage.getItem("persist:root")).user
    // );
    // if (userLocalStorage.currentUser != null) {
    //   const admin = useSelector((state) => state.user.currentUser.isAdmin);
    // }
    // "format":"prettier --single-quote --trailing-comma all --tab-width 4  --write \"scr/**/*.{js,jsx,css}\"",

    console.log(admin);
    return (
        <Router>
            <Switch>
                <Route path='/login'>
                    <Login> </Login>
                </Route>
                {admin && (
                    <>
                        <Topbar />
                        <div className='container'>
                            <Sidebar />
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route path='/users'>
                                <UserList />
                            </Route>
                            <Route path='/user/:userId'>
                                <User />
                            </Route>
                            <Route path='/newUser'>
                                <NewUser />
                            </Route>
                            <Route path='/products'>
                                <ProductList />
                            </Route>
                            <Route path='/product/:productId'>
                                <Product />
                            </Route>
                            <Route path='/newproduct'>
                                <NewProduct />
                            </Route>
                        </div>
                    </>
                )}
            </Switch>
        </Router>
    );
}

export default App;
