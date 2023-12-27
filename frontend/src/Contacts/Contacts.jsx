import React from "react";

function Contacts({ contacts }) {
    return (
        <div className="Contacts mb-2">
            {contacts.map((contact) => {
                if (contact.isLink === true) {
                    return (
                        <p className="m-0">
                            <span className="KeyWord">
                                {contact.key}: 
                            </span>
                           <a href={contact.value} target="_blank">{contact.value}</a> 
                        </p>
                    );
                }
                return (
                    <p className="m-0">
                        <span className="KeyWord">{contact.key}:</span>{" "}
                        {contact.value}
                    </p>
                );
            })}
        </div>
    );
}

export default Contacts;
