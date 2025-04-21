function LastUpdated({ lastUpdated }) {

    const lastUpdatedStyles = {
        backgroundColor: "whitesmoke",
        borderRadius: "1rem",
        color: "#FF4136",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "1.2rem",
        marginBottom: "1rem",
        padding: "0.5rem",
    }

    return (
        <p style={lastUpdatedStyles}>Last updated: {lastUpdated}</p>
    );
}

export default LastUpdated;