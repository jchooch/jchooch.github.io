import React, { useState } from "react";
import collapseIcon from "../../assets/boxes/collapse.png";
import expandIcon from "../../assets/boxes/expand.png";
import "./PaperNote.scss";

function PaperNote({ date, authors, venue, year, title, children }) {
    return (
        <div className="paper-note">
            <div className="paper-note__header">
                <p>[<span className="paper-note__date">{date ?? "00-00-0000"}</span>]</p>
                <p>{authors ?? "n.a."} ({year ?? "n.d."})</p>
                <p><i>{venue ?? "n.v."}</i></p>
            </div>
            <h2>{title ?? "Untitled"}</h2>
            {children}
        </div>
    );
}

export default PaperNote;