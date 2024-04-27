import './Calendar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState,useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import ProductCard from '../../components/homepageComponents/ProductCard';

function Calendar(props) {
    let{products, setProducts}=useContext(DataContext);
    const [calendars, setCalendars] = useState([]);
  
    const [idModal, setIdModal] = useState('');
    console.log(idModal)
    return (
        <div className='calendarPageContainer container-fluid p-0'>
            <img className='imageBanner'
                src='https://www.muji.us/cdn/shop/collections/collection_page_stationery_calendar_planner_2043x630.jpg?v=1668704287' alt='banner'></img>
            <div className='calendarPageContainer container p-0'>
                <div className='row w-100 g-0 mt-3'>
                    <div className='col-sm-3 bg-warning'>
                        <p>SILDE BAR</p>
                    </div>
                    <div className='col-sm-9  px-3'>
                        <div className='row m-auto mb-2'>
                            <div className='col-sm-6'>ALL PRODUCT
                            </div>
                            <div className='col-sm-6 text-end'>SORT</div>
                        </div>
                        <div className='row calendars_product'>
                            {products.calendar.map((item, index) => {
                                return (
                                    // <div className='col-sm-3 calendars_item' key={index}>
                                    //     <div className="card calendars_box  bg-primary" >
                                    //         <div className='row calendars_imgBox'>
                                    //             <img src={item.image.mainImage} className="card-img-top calendars_img" alt="..." ></img>
                                    //             <div className='row calendars_rowBtn'>
                                    //                 <button type="button" className="calendars_btn" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => { setIdModal(item.id) }}>
                                    //                     <i className="fas fa-eye fa-lg calendars_icon" style={{ color: "#1f1f1e" }} />
                                    //                 </button>
                                    //                 <button type="button" className="calendars_btn" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => { setIdModal(item.id) }}>
                                    //                     <i className="fas fa-eye fa-lg calendars_icon" style={{ color: "#1f1f1e" }} />
                                    //                 </button>
                                    //                 <button type="button" className="calendars_btn" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => { setIdModal(item.id) }}>
                                    //                     <i className="fas fa-eye fa-lg calendars_icon" style={{ color: "#1f1f1e" }} />
                                    //                 </button>
                                    //             </div>
                                    //         </div>

                                    //         <div className="card-body calendars_body">
                                    //             <h5 className="card-title calendars_text">{item.name}</h5>
                                    //             <p className="card-text calendars_price">$ {item.price}
                                    //             </p>
                                    //         </div>
                                    //     </div>
                                      
                                    // </div>
                                    <ProductCard key={index} item={item} />
                                )
                            })}
                            {/* Modal */}
                            {products.calendar.map((item, index) => {
                                console.log("test id", idModal)
                                return (
                                    <div className="modal" id="myModal" >
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className='container mt-3'>
                                                    <div className='row'>
                                                        <div className='col-sm-6'>PICTURE
                                                            {/* Carousel */}
                                                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-indicators">
                                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0}
                                                                        className="active" aria-current="true" aria-label="Slide 1" />
                                                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                                                        data-bs-slide-to={1} aria-label="Slide 2" />
                                                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                                                        data-bs-slide-to={2} aria-label="Slide 3" />
                                                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                                                        data-bs-slide-to={3} aria-label="Slide 4" />
                                                                </div>
                                                                <div className="carousel-inner ">
                                                                    <div className="carousel-item active calendars_boxCarImg">
                                                                        <img src={item.image.mainImage} className="d-block calendars_carouselImg" alt="mainImage" />
                                                                    </div>
                                                                    <div className="carousel-item  ">
                                                                        <img src={item.image.image1} className="d-block calendars_carouselImg " alt="image1" />
                                                                    </div>
                                                                    <div className="carousel-item ">
                                                                        <img src={item.image.image2} className="d-block calendars_carouselImg" alt="image2" />
                                                                    </div>
                                                                    <div className="carousel-item ">
                                                                        <img src={item.image.image3} className="d-block calendars_carouselImg " alt="image3" />
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    className="carousel-control-prev" type="button"
                                                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                                    <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button
                                                                      className="carousel-control-next" type="button"
                                                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next" >
                                                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                                                    <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className='col-6'>INFO
                                                            <h1>{item.name}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Calendar;