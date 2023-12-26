import React from "react";
import "./CommonLayout.css";
import Header from "../Header";
import Main from "../Main";

function CommonLayout({ children }) {
    return (
        <div className="CommonLayout">
            <Header />
            <Main>{children}</Main>
        </div>
    );
}

export default CommonLayout;
