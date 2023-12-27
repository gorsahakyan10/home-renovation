import React from "react";
import "./Master.css";
import Contacts from "../Contacts";
import Carousel from "../Carousel";

function Master({ id, name, workCity, phone, whatsApp, imageLinks }) {
    const contacts = [
        { key: "Имя мастера", value: name },
        { key: "Город", value: workCity },
        { key: "Тел.", value: phone },
        { key: "WhatsApp", value: whatsApp },
    ];
    return (
        <div className="Master border p-3">
            <Contacts
                contacts={contacts}
            />
            <Carousel id={id} imageLinks={imageLinks} />
        </div>
    );
}

export default Master;
