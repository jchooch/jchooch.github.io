import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./TrackingPage.scss";

function TrackingPage() {
    return (
        <>
            <Header thisTitle="Tracking"/>

            <main className="tracking-main">
                <div className="tracking-filtersbox">
                    <h2 className="tracking-filters-title">FILTERS</h2>
                    <div className="tracking-filters">
                        <button className="tracking-filter tracking-filter--all">All</button>
                        <button className="tracking-filter">Albums</button>
                        <button className="tracking-filter">Books</button>
                        <button className="tracking-filter">Films</button>
                        <button className="tracking-filter">Live Shows</button>
                        <button className="tracking-filter">MOOCs</button>
                        <button className="tracking-filter">Papers</button>
                        <button className="tracking-filter">Podcasts</button>
                        <button className="tracking-filter">Poems</button>
                        <button className="tracking-filter">Talks</button>
                        <button className="tracking-filter">Travel</button>
                        <button className="tracking-filter">TV Shows</button>
                    </div>
                </div>
                <div className="tracking-results">
                        <div className="tracking-result">
                            <p>Example</p>
                            <p>Description</p>
                            <p>Details</p>
                        </div>
                        <div className="tracking-result">
                            <p>Example</p>
                            <p>Description</p>
                            <p>Details</p>
                        </div>
                        <div className="tracking-result">
                            <p>Example</p>
                            <p>Description</p>
                            <p>Details</p>
                        </div>
                        <div className="tracking-result">
                            <p>Example</p>
                            <p>Description</p>
                            <p>Details</p>
                        </div>
                    </div>
            </main>

            <Footer />

        </>
    )
}

export default TrackingPage;