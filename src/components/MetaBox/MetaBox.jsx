import "./MetaBox.scss";

function MetaBox({ children }) {
    return (
        <div className="meta-box">
            {children}
        </div>
    );
}

export default MetaBox;