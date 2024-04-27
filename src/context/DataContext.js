import { createContext, useEffect, useState } from "react";

const DataContext = createContext();
function DataProvider({ children }) {
    const [products, setProducts] = useState([])
    const [searchProduct, setSearchProduct] = useState('')
    const [isDataLoaded, setIsDataLoaded] = useState(false)
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

    const [productCart, setProductCart] = useState([])

    useEffect(() => {
        fetch('data/data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .then(setIsDataLoaded(true))
    }, [])


    // ** Function Add product into Cart***********************************************
    const handleAddProductCart = (itemAdd) => {
        if (!productCart.some(item => item?.id === itemAdd.id)) {
            productCart.push({ id: itemAdd.id, name: itemAdd.name, img: itemAdd.image.mainImage, price: itemAdd.price, quantity: 1 });
        } else {
            productCart[productCart.indexOf(productCart.find(item => item.id === itemAdd.id))].quantity++;
        }
        setProductCart([...productCart])
    }
    // ********************************************************************************

    let valueProvider = {
        // products data read from json file --> many components are in use
        products,
        setProducts,

        // Search Name of product
        searchProduct,  // --> SearchPage.js
        setSearchProduct, //--> SearchBox.js

        // Button Link is activated, --> NavBar.js, Menu.js
        btnActive,
        setBtnActive,

        // --> HomePage.js
        isDataLoaded,
        setIsDataLoaded,

        // product list in Cart --> CartList.js
        productCart,
        setProductCart,

        // function add product to cart --> ProductCard.js
        handleAddProductCart
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