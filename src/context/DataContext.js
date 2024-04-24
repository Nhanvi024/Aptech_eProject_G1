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
            // .then(setIsDataLoaded(true))
    }, [])

    const handleAddProductCart = (idAdd) =>{
        let productAdd = {};
        if (!productCart.some(item=>item?.id === idAdd)) {
            productAdd = products.noteBook.find(item=>item.id === idAdd)
            if(!productAdd){
                productAdd = products.calendar.find(item=>item.id === idAdd)
            }
            productCart.push({id: productAdd.id, name: productAdd.name, img: productAdd.image.mainImage, price: productAdd.price, quantity: 1});
        } else{
            productCart[productCart.indexOf(productCart.find(item=>item.id === idAdd))].quantity++;
        }
        setProductCart([...productCart])
    }

    let valueProvider = {
        products,
        setProducts,
        searchProduct,
        setSearchProduct,
        btnActive,
        setBtnActive,
        isDataLoaded,
        setIsDataLoaded,

        productCart,
        setProductCart,

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