import { useNavigate } from 'react-router-dom';
import './HomePage.css'
import '../../components/homepageComponents/ProductCard.css'

import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../../components/homepageComponents/ProductCard';
import { DataContext } from '../../context/DataContext';

function HomePage(props) {
    const Navigate = useNavigate();
    const { products, searchProduct, setSearchProduct } = useContext(DataContext)
    // console.log(products.noteBook);

    // check window side to set number of items to display
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // console.log("test width:",windowWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // ==================================================

    let itemPerPage = windowWidth >= 1200 ? 8 : windowWidth >= 992 ? 6 : windowWidth >= 768 ? 4 : windowWidth >= 576 ? 4 : 4;

    let section1MaxPage = Math.floor(+Object.keys(products.noteBook || {}).length / itemPerPage);
    // console.log("item per page1: ", itemPerPage);
    // console.log("max page 1:", section1MaxPage);
    // console.log("product notebook length: ", Object.keys(products.noteBook || {}).length);

    // console.log("test item per page: ",itemPerPage);
    let [section1Page, setSection1Page] = useState(0)
    // console.log("section1Page: ", section1Page);
    function handleSection1PageNext(params) {
        if (section1Page < section1MaxPage) {
            setSection1Page(pre => pre + 1)
        } else {
            setSection1Page(0)
        }
    }
    function handleSection1PagePrev(params) {
        if (section1Page > 0) {
            setSection1Page(pre => pre - 1)
        } else {
            setSection1Page(section1MaxPage)
        }
    }

    // 
    let category1List = ['all'];
    {
        products.length !== 0 && products.noteBook.map((item, index) => {
            if (!category1List.includes(item.type)) {
                category1List = [...category1List, item.type];
            }
        })
    };
    // console.log("test category1List:", category1List);
    //

    //
    const [notebookList, setNotebookList] = useState([]);
    const [notebookTypeFilter, setNotebookTypeFilter] = useState('all')
    console.log(notebookTypeFilter);
    useEffect(() => {
        // let result
        if (notebookTypeFilter == 'all') {
            setNotebookList(products.noteBook)
        } else {
           let result = products.noteBook.filter(item => item.type == notebookTypeFilter)
            // console.log("test item list:",notebookList);
            setNotebookList(result)
        }
    },[notebookTypeFilter])
    console.log("test notebooklist:", notebookList);
    return (
        <div className='homePageContainer container-fluid p-0'>
            <section className="section-homepage-carousel">
                <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

                    {/* <!-- Indicators --> */}
                    <div className="carousel-indicators">
                        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
                    </div>

                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img
                                src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_1.jpg?1711094550864"
                                alt="Ribbon Collection"
                                className='d-block w-100'
                                onClick={() => Navigate("/news")} />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img
                                src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_2.jpg?1711094550864"
                                alt="Notebook 1"
                                className='d-block w-100'
                                onClick={() => Navigate("/calendar")} />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img
                                src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_3.jpg?1711094550864"
                                alt="Notebook 2"
                                className='d-block w-100' />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img
                                src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_4.jpg?1711094550864"
                                alt="Notebook 3"
                                className='d-block w-100' />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img
                                src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_5.jpg?1711094550864"
                                alt="Notebook 4"
                                className='d-block w-100' />
                        </div>
                    </div>

                    {/* <!-- Left and right controls --> */}
                    <button className="carousel-control-prev" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </section>
            <section className='section-calendar container-md p-0 mt-3'>
                <div className='row w-100 g-0 flex-row-reverse align-items-center'>
                    <div className='col-sm-8 px-3'>g
                        <div className='row '>
                            <div className='row m-auto mb-2'>
                                <div className='col-8'>
                                    <ul className="nav nav-tabs">
                                        {products.length !== 0 && category1List.map((item, index) => {
                                            return (
                                                <li className="nav-item" key={index}>
                                                    <a className="nav-link" onClick={() => setNotebookTypeFilter(item)} >{item}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className='col-4 text-end'>
                                    <button className="btn btn-primary btn-lg me-1" onClick={handleSection1PagePrev}>
                                        <p className='homepage-nextPrevButton'>&#8249;</p>
                                    </button>
                                    <button className="btn btn-primary btn-lg ms-1" onClick={handleSection1PageNext}>
                                        <p className='homepage-nextPrevButton'>&#8250;</p>
                                    </button>
                                </div>
                            </div>
                            <div className='row m-auto align-items-center' style={{ height: "480px" }}>
                                {products.length === 0 &&
                                    <div className="d-flex justify-content-center">
                                        <div className="spinner-border text-danger" style={{ width: "5rem", height: "5rem" }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>}
                                {products.length !== 0 && products.noteBook.map((item, index) => {
                                    if (index >= (section1Page * itemPerPage) && index < (section1Page + 1) * itemPerPage) {
                                        return (
                                            <ProductCard key={index} item={item} />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 homepage-notebookCarousel-container p-3 d-flex' style={{ height: "480px" }}>
                        <div id="homepage-notebookCarousel" className="carousel slide text-center m-auto w-100" data-bs-ride="carousel">

                            {/* <!-- Wrapper for slides --> */}
                            <div className="carousel-inner d-flex">
                                {products.length === 0 &&
                                    <div className="d-flex justify-content-center">
                                        <div className="spinner-border text-danger" style={{ width: "5rem", height: "5rem" }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>}
                                {products.length !== 0 && products.noteBook.map((item, index) => {
                                    let classCarousel = index === 0 ? "carousel-item active" : "carousel-item"
                                    return (
                                        <div key={index} className={classCarousel} data-bs-interval="3000">
                                            <div className='homepage-productCard-carouselImgContainer'>
                                                <img
                                                    src={item.image.mainImage}
                                                    className='d-flex w-100 homepage-productCard-carouselImg' />
                                            </div>
                                            <div>
                                                <div className='homepage-productCard-name'>{item.name}</div>
                                                <div className='homepage-productCard-price'>${item.price}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* <!-- Left and right controls --> */}
                            <button className="carousel-control-prev" data-bs-target="#homepage-notebookCarousel" data-bs-slide="prev">
                                <span className="" aria-hidden="true"></span>
                            </button>
                            <button className="carousel-control-next" data-bs-target="#homepage-notebookCarousel" data-bs-slide="next">
                                <span className="" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-notebook container-md p-0'>
                <div className='row w-100 g-0'>
                    <div className='col-sm-8 bg-warning'>333</div>
                    <div className='col-sm-4 bg-success'>444</div>
                </div>

            </section>

        </div>
    );
}

export default HomePage;