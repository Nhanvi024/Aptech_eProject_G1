import { createContext, useEffect, useState } from "react";

const DataContext = createContext();
function DataProvider({ children }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data/data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    let valueProvider = {
        products,
        setProducts
    }
    return (
        <DataContext.Provider value={valueProvider}>
            {children}
        </DataContext.Provider>
    )
}

export {
    DataContext,
    DataProvider
}