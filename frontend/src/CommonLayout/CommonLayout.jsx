import React from "react";
import "./CommonLayout.css";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

function CommonLayout({ children }) {
    return (
        <div className="CommonLayout">
            <Header />
            <Main>{children}</Main>
            <Footer/>
        </div>
    );
}

export default CommonLayout;
