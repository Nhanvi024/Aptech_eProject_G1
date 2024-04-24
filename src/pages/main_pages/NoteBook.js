
import { DataContext } from '../../context/DataContext';
import './NoteBook.css'
import React, { useEffect, useState } from 'react';
import PriceFilter from '../../components/filterComponents/PriceFilter'
import SortSelect from '../../components/filterComponents/SortSelect'
import TypeFilter from '../../components/filterComponents/TypeFilter'



function NoteBook(props) {
    const [noteBooks, setNoteBooks] = useState([]);
    useEffect(() => {
        fetch('data/NoteBook.json')
            .then(res => res.json())
            .then(data => setNoteBooks(data))
    }, [])
    return (

        <div className='noteBookPageContainer container-fluid p-0'>
            <img className='imageBanner'
                src='https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/bg_breadcrumb.jpg?1709874054823' alt='banner'></img>
            <div className='noteBookPageContainer container p-0'>
                {/* Sidebar area */}
                <div className='row w-100 g-0 mt-3'>
                    <div className='col-sm-3 bg-info'>
                        <SortSelect />
                        <TypeFilter />
                        <PriceFilter />
                    </div>

                    <div className='col-sm-9 px-3'>
                        <div className='row m-auto mb-2'>
                            <div className='col-sm-6'>NOTEBOOK</div>
                            <div className='col-sm-6 text-end'>SORT</div>
                        </div>
                        <div className='row Notebook_products'>
                            {noteBooks.map((item, index) => {
                                return (
                                    <div className='col-sm-3 Notebook_item' key={index}>
                                        <div className='card text-center col Notebook_itembox'>
                                            <div className='row Notebook_imgContainer'>
                                                <img src={item.image.mainImage} className='Notebook_img card-img-top ' alt='...'></img>
                                                <div className='Notebook_imgbtn'>
                                                    <button className="notebook_btn btn-light" data-bs-toggle="modal" data-bs-target="#myModal">
                                                        <i className="fas fa-eye fa-lg Notebook_icon" style={{ color: "#1f1f1e" }} />
                                                    </button>
                                                </div>
                                                <div className="card-body Notebook_body">
                                                    <h5 className="card-title Notebook_name">{item.name}</h5>
                                                    <p className="card-text Notebook_price">$ {item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            {noteBooks.map((item, index) => {
                                return (
                                    <div className="modal Notebook_modal" id="myModal">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className='container mt-3'>
                                                    <div className='row'>
                                                        <div className='col-sm-5 '>PICTURE
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
                                                                <div className="carousel-inner" key={index}>
                                                                    <div className="carousel-item active">
                                                                        <img src={item.image.mainImage} className="d-block notebook_carouselImg" alt="mainImage" />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src={item.image.image1} className="d-block " alt="image1" />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src={item.image.image2} className="d-block " alt="image2" />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src={item.image.image3} className="d-block " alt="image3" />
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
                                                        <div className='col-7'>INFO</div>
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

export default NoteBook;