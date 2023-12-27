import React from "react";
import Carousel from "../Carousel";

function Store({ id, name, city, address, imageLinks }) {
    return (
        <div className="Store border p-3">
            <p className="m-0">
                <span className="KeyWord">Магазин:</span> {name}
            </p>
            <p className="m-0">
                <span className="KeyWord">Город:</span> {city}
            </p>
            <p className="m-0">
                <span className="KeyWord">Адресс:</span> {address}
            </p>
            <Carousel id={id} imageLinks={imageLinks} />
        </div>
    );
}

export default Store;
