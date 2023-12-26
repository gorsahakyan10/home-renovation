import React from "react";

function Contacts({ name, workCity, phone, whatsApp }) {
    return (
        <div className="Contacts mb-2">
            <p className="m-0">
                <span className="KeyWord">Имя мастера:</span> {name}
            </p>
            <p className="m-0">
                <span className="KeyWord">Город:</span> {workCity}
            </p>
            <p className="m-0">
                <span className="KeyWord">Тел.:</span> {phone}
            </p>
            <p className="m-0">
                <span className="KeyWord">WhatsApp:</span> {whatsApp}
            </p>
        </div>
    );
}

export default Contacts;
