import React, { useState } from "react";

import Master from "../Master";
import FilterByCities from "../FilterByCities";

import useGetMasters from "./hooks/useGetMasters";

import { cities } from "../cities";

function MasterBlocks() {
    const [selectedCity, setSelectedCity] = useState("");
    let masters = useGetMasters();

    if (selectedCity) {
        masters = masters.filter(
            (master) =>
                master.workCity.toLowerCase() === selectedCity.toLowerCase()
        );
    }

    return (
        <div className="MasterBlocks mt-5">
            <h2>Работы мастеров</h2>
            <FilterByCities
                cities={cities}
                setSelectedCity={setSelectedCity}
                value={selectedCity}
                searchText={'Поиск мастера по городу'}
            />
            {masters.length === 0 ? <h2>Ничего не найдено</h2> : ""}
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                {masters.map((master, i) => {
                    return (
                        <div className="col mb-3" key={i + Math.random()}>
                            <Master
                                id={master.id}
                                name={master.name}
                                workCity={master.workCity}
                                phone={master.phone}
                                whatsApp={master.whatsApp}
                                imageLinks={master.workImages || []}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MasterBlocks;
