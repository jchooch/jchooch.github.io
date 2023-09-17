import { useState } from "react";
import collapseIcon from "../../assets/boxes/collapse.png";
import expandIcon from "../../assets/boxes/expand.png";
import "./AsideBox.scss";

function AsideBox({ title, children }) {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = (event) => {
        setCollapsed(!collapsed);
    }

    const titleWeight = (collapsed ? "normal" : "bold");

    return (
        <div className="aside-box">
            <div>
                <p className="aside-box__title"><b>Aside:</b> <span style={{ fontWeight: titleWeight }}>{title}</span></p>
                {!collapsed && children}
            </div>
            {!collapsed && <img src={collapseIcon} alt="toggle-collapse" className="toggle-collapse" onClick={handleToggle}/>}
            {collapsed && <img src={expandIcon} alt="toggle-expand" className="toggle-expand" onClick={handleToggle}/>}
        </div>
    );
}

export default AsideBox;