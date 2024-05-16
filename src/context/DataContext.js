import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DataContext = createContext();
function DataProvider({ children }) {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [searchProduct, setSearchProduct] = useState('')
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    const [members, setMembers]= useState([])
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
        fetch('/data/data.json')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
            .then(setIsDataLoaded(true));
    }, []);

    useEffect(() =>{
        fetch ('/data/team.json')
        .then((res) => res.json())
        .then((data) => {setMembers(data)})
        
    },[])

    // ** Products Cart

    const [productCart, setProductCart] = useState([])
    const [totalPayment, setTotalPayment] = useState(0);

    //** Calculate Total payment***************************************
    useEffect(() => {
        let total = 0
        productCart.forEach((item) => {
            total = total + (+item.price * item.quantity)
        })
        setTotalPayment(total)
    }, [productCart])

    // ** Function Add product into Cart********************************
    const handleAddProductCart = (itemAdd) => {
        if (!productCart.some(item => item?.id === itemAdd.id)) {
            productCart.push({ id: itemAdd.id, name: itemAdd.name, img: itemAdd.image.mainImage, price: itemAdd.price, quantity: 1 });
        } else {
            productCart[productCart.indexOf(productCart.find(item => item.id === itemAdd.id))].quantity++;
        }
        setProductCart([...productCart])
    }


    // ** Function delete product from Cart*****************************
    const handleDeleteItem = (idDelete) => {
        setProductCart(productCart.filter(item => item.id !== idDelete))
    }

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
    handleAddProductCart,

    // function delete product from cart --> CartList.js, CartPage.js
    totalPayment,
    handleDeleteItem,

    // --> AboutPage.js
    members,
    setMembers,

}
const initialOptions = {
    clientId: 'AX1I0Rd45ExcqiNA2Zfa_RGZXsNLLG__6jiB1Dq1pKTCtLxjB1AIUM9fdnwcNyrqn09kSveTyWpGptCr',
    currency: 'USD',
    intent: 'capture',
    components: 'buttons',
};
return (
    <DataContext.Provider value={valueProvider}>
        <PayPalScriptProvider options={initialOptions}>

            {children}

        </PayPalScriptProvider>
    </DataContext.Provider>
)
}

export { DataContext, DataProvider };
