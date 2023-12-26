import React, { useEffect, useState } from "react";

function useGetMasters() {
    const [masters, setMasters] = useState([]);

    useEffect(() => {
        async function defineMasters() {
            const response = await fetch("http://localhost:8000/masters");
            const masters = await response.json();
            setMasters(masters);
        }
        defineMasters();
    }, []);

    return masters;
}

export default useGetMasters;
