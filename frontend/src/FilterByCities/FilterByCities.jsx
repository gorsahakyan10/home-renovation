import React from "react";

function FilterByCities({ cities, setSelectedCity, value, searchText }) {
    function handleChange(e) {
        setSelectedCity(e.target.value);
        e.target.blur();
    }
    return (
        <div className="FilterByCities my-3">
            <select
                className="form-select"
                name="cities"
                value={value}
                onChange={handleChange}
            >
                <option value={""}>{searchText}</option>
                {cities.map((city, i) => {
                    return (
                        <option value={city} key={i + Math.random()}>
                            {city}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default FilterByCities;
