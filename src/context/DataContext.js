import { createContext, useEffect, useState } from "react";

const DataContext = createContext();
function DataProvider({ children }) {
    const [products, setProducts] = useState([])
    const [searchProduct, setSearchProduct] = useState('')
    const webPage = [
        { name: 'HOME', href: '/' },
        { name: 'NEWS', href: '/news' },
        { name: 'CALENDAR', href: '/calendar' },
        { name: 'NOTEBOOK', href: '/notebook' },
        { name: 'CONTACT', href: '/contact' },
        { name: 'ABOUT US', href: '/about' },
        { name: 'ALL PRODUCTS', href: '/products' },
        { name: 'DOWNLOAD', href: '/download' },
        { name: 'SEARCH', href: '/search' },
    ]
    const [btnActive, setBtnActive] = useState(webPage[0].name)


    useEffect(() => {
        fetch('data/data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    let valueProvider = {
        products,
        setProducts,
        searchProduct,
        setSearchProduct,
        btnActive,
        setBtnActive
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