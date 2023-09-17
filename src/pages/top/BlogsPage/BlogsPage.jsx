import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./BlogsPage.scss";

function BlogsPage() {
    return (
        <>
            <Header thisTitle={"Blogs"}/>

            <main>
                <ul className="blogs-list">
                    <li className="blogs-list__month">Drafts</li>
                    <ul>
                        <li>0000-00-00: <Link to="">Invention and Perfection</Link></li>
                    </ul>
                    <li className="blogs-list__month">July 2023</li>
                    <ul>
                        <li>Test</li>
                        <li>Test</li>
                    </ul>
                    <li className="blogs-list__month">April 2023</li>
                    <ul>
                        <li>2023-04-18: <Link to="">Great Minds, Short Lived</Link></li>
                        <li>2023-04-17: <Link to="/blogs/template">Template</Link></li>
                    </ul>
                </ul>
            </main>

            <Footer />
        </>    
    );
}

export default BlogsPage;