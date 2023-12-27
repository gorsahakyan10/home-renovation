import React, { useState } from "react";
import useGetStores from "./hook/useGetStores";
import Store from "../Store/Store";
import FilterByCities from "../FilterByCities";

import { cities } from "../cities";

function StoreList() {
    const [selectedCity, setSelectedCity] = useState("");
    let stores = useGetStores();

    if (selectedCity) {
        stores = stores.filter(
            (store) => store.city.toLowerCase() === selectedCity.toLowerCase()
        );
    }
    return (
        <div className="StoreList">
            <FilterByCities
                    cities={cities}
                    setSelectedCity={setSelectedCity}
                    value={selectedCity}
                    searchText={'Поиск магазина по городу'}
                />
            <div className="row row-cols-md-2 row-cols-lg-3 row-cols-1">
                {stores.length === 0 ? <h2>Ничего не найдено</h2> : ""}
                {stores.map((store, i) => {
                    return (
                        <div className="col mb-3" key={i + Math.random()}>
                            <Store
                                id={store.id}
                                name={store.name}
                                city={store.city}
                                address={store.address}
                                imageLinks={store.imageLinks}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default StoreList;
