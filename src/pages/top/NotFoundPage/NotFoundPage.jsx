import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <p>Now... you really are lost.</p>
            <br />
            <Link to="/">Return home.</Link>
        </>
    );
}

export default NotFoundPage;