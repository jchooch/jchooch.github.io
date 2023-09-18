import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./NotesPage.scss";

function NotesPage() {
    return (
        <>
            <Header thisTitle={"Notes"}/>

            <main>
                <ul className="notes-list">
                    <li className="notes-list__item notes-list__item--pinned">
                        <Link to="/notes/recommendations">Recommendations</Link>
                    </li>
                    {/* <li className="notes-list__item">
                        <Link to="/notes/probability">Probability Distributions</Link>
                    </li> */}
                    <li className="notes-list__item">
                        <Link to="/notes/template">Note template</Link>
                    </li>
                </ul>
            </main>

            <Footer />
        </>    
    );
}

export default NotesPage;