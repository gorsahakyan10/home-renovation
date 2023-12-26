import React, { useEffect, useState } from "react";

function useGetStores() {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        async function defineStores() {
            const response = await fetch("http://localhost:8000/stores");
            const stores = await response.json();
            setStores(stores);
        }
        defineStores();
    },[]);
    return stores;
}

export default useGetStores;
