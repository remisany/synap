import React, {lazy, Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//import components
const Home = lazy(() => import("./home/Home"));
const Loading = lazy(() => import("./common/Loading"));
const Header = lazy(() => import("./common/header/Header"));
const Weather = lazy(() => import("./weather/Weather"));
const Library = lazy(() => import("./library/Library"));

function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div className="loading-router" ><Loading/></div>}>
                <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/meteo" element={<Weather/>}/>
                    <Route path="/bibliotheque" element={<Library/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;