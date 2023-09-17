import { Link } from "react-router-dom";
import returnIcon from "../../assets/header/return13.png";
import "./Header.scss";

function Header({ thisTitle, returnDestination }) {

    if (returnDestination === "Blogs") {
        return (
            <header className="header header--with-back">
                <div>
                    <h1 className="header__title">{thisTitle}</h1>
                    <Link to="/">
                        <h3 className="header__subtitle">Joe Choo-Choy</h3>
                    </Link>
                </div>
                <Link to="/blogs">
                    <img src={returnIcon} alt="back" className="return" />
                    <span>All Blogs</span>
                </Link>
            </header>
        );
    }
    else if (returnDestination === "Notes") {
        return (
            <header className="header header--with-back">
                <div>
                    <h1 className="header__title">{thisTitle}</h1>
                    <Link to="/">
                        <h3 className="header__subtitle">Joe Choo-Choy</h3>
                    </Link>
                </div>
                <Link to="/notes">
                    <img src={returnIcon} alt="back" className="return" />
                    <span>All Notes</span>
                </Link>
            </header>
        );
    }
    else {
        if (thisTitle === "") {
            return (
                <header className="header">
                    <h1 className="header__title">Joe Choo-Choy</h1>
                </header>
            );
        }
        else {
            return (
                <header className="header">
                    <h1 className="header__title">{thisTitle}</h1>
                    <Link to="/">
                        <h3 className="header__subtitle">Joe Choo-Choy</h3>
                    </Link>
                </header>
            );
        }
    }
}

export default Header;