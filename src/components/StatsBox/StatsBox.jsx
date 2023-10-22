import "./StatsBox.scss";

function StatsBox({ words, time, status, tags }) {
    return (
        <div className="stats-box">
            {words && <p><b>Length:</b> {words} words.</p>}
            {time && <p><b>Reading time:</b> {time} minutes.</p>}
            {status ? <p><b>Status:</b> {status}</p> : undefined}
            {tags && <p><b>Tags:</b> (currently non-functional)</p>}
            {tags && tags.map(tag => <p className="tag">#{tag}</p>)}
        </div>
    );
}

export default StatsBox;