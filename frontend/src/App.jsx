import "./App.css";

import AboutSite from "./AboutSite/AboutSite";
import MasterBlocks from "./MasterBlocks/MasterBlocks";
import CommonLayout from "./CommonLayout";

import { Routes, Route } from "react-router";
import StoreList from "./StoreList";

function App() {
    return (
        <div className="App">
            <div className="container px-3 pt-1 pb-5">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <CommonLayout>
                                <AboutSite />
                                <MasterBlocks/>
                            </CommonLayout>
                        }
                    />
                    <Route
                        path="/stores"
                        element={
                            <CommonLayout>
                               <StoreList/>
                            </CommonLayout>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
