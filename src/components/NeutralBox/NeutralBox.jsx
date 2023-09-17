import React, { useState } from "react";
import collapseIcon from "../../assets/boxes/collapse.png";
import expandIcon from "../../assets/boxes/expand.png";
import "./NeutralBox.scss";

function NeutralBox({ recCat, children }) {
    const [collapsed, setCollapsed] = useState(true);

    const handleToggle = (event) => {
        setCollapsed(!collapsed);
    }

    return (
        <div className={collapsed ? "neutral-box" : "neutral-box neutral-box--" + recCat}>
            <div>
                {collapsed && React.Children.toArray(children)[0]}
                {!collapsed && children}
            </div>
            {!collapsed && <img src={collapseIcon} alt="toggle-collapse" className="toggle-collapse" onClick={handleToggle}/>}
            {collapsed && <img src={expandIcon} alt="toggle-expand" className="toggle-expand" onClick={handleToggle}/>}
        </div>
    );
}

export default NeutralBox;