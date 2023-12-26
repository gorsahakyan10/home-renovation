import React from "react";
import "./Master.css";
import Contacts from "../Contacts";
import Carousel from "../Carousel";

function Master({ id, name, workCity, phone, whatsApp, imageLinks }) {
    return (
        <div className="Master border p-3">
            <Contacts
                name={name}
                workCity={workCity}
                phone={phone}
                whatsApp={whatsApp}
            />
           <Carousel id={id} imageLinks={imageLinks}/>
        </div>
    );
}

export default Master;
