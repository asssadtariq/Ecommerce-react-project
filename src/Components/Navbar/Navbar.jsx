import "./Navbar.css";
import logo from '../Assets/logo.png';
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
    return (
        <div className="navbar flex justify-around">
            <div className="nav-logo">
                <img src={logo} alt="" srcset="" />
                <p>My Shop</p>
            </div>

            <ul className="nav-menu">
                <li>Shop<hr></hr></li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" srcset="" />
                <div className="nav-cart-count">0</div>
            </div>

        </div>
    )
}

export default Navbar;
