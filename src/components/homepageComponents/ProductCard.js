import React, {useContext, useState} from 'react';
import './ProductCard.css';
import {DataContext} from '../../context/DataContext';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';

function ProductCard(props) {
	let {item} = props;
	const {handleAddProductCart, isDataLoaded} = useContext(DataContext);
	const [show, setShow] = useState(false);
	const navigate = useNavigate();

	function handleClose(params) {
		setShow(false);
	}
	function handleShow(item) {
		setShow(true);
	}
	return (
		<>
			<div className="text-center mx-auto col homepage-productCard my-2">
				<div>
					<div className="homepage-productCard-imgContainer">
						<img
							className="homepage-productCard-img"
							src={item.image.mainImage}
							alt="..."
							onClick={() => navigate(`/detail/${item.id}`)}
						></img>
						<div className="productCard-button-container">
							{/* button add to cart */}
							<button className="productCard-button1 fas fa-cart-plus" onClick={() => handleAddProductCart(item)}></button>
							{/* button toggle modal */}
							<button className="productCard-button1 fas fa-info" onClick={() => handleShow(item)}></button>
							{/* button product detail */}
						</div>
					</div>
					<div>
						<div className="homepage-productCard-name">{item.name}</div>
						<div className="homepage-productCard-price">${item.price}</div>
					</div>
				</div>
			</div>
			<Modal
				show={show}
				onHide={handleClose}
				keyboard={false}
				animation={false}
				centered
				size="xl"
				fullscreen="sm-down"
				scrollable={true}
			>
				<Modal.Header closeButton>
					<Modal.Title>Product's detail</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{isDataLoaded && (
						<div
							className="container row p-0 mx-auto p-3"
							style={{fontSize: 'var(--fs-600)', fontFamily: 'var(--ff-primary-font)'}}
						>
							<div className="col-12 p-0 col-lg-6">
								<div id="modalCarousel" className="carousel slide" data-bs-ride="carousel">
									<div className="carousel-inner carda">
										<div className="carousel-item active">
											<img src={item.image.mainImage} className="largeImg d-block w-100" alt="..." />
										</div>
										<div className="carousel-item">
											<img src={item.image.image1} className="largeImg d-block w-100" alt="..." />
										</div>
										<div className="carousel-item">
											<img src={item.image.image2} className="largeImg d-block w-100" alt="..." />
										</div>
										<div className="carousel-item">
											<img src={item.image.image3} className="largeImg d-block w-100" alt="..." />
										</div>
									</div>
									<div className="carousel-indicators carda">
										<button
											type="button"
											data-bs-target="#modalCarousel"
											data-bs-slide-to="0"
											className="thumbnail active"
											aria-current="true"
											aria-label="Slide 1"
										>
											<img src={item.image.mainImage} className="thumbImg d-block w-100" alt="..." />
										</button>
										<button
											className="thumbnail"
											type="button"
											data-bs-target="#modalCarousel"
											data-bs-slide-to="1"
											aria-label="Slide 2"
										>
											<img src={item.image.image1} className="thumbImg d-block w-100" alt="..." />
										</button>
										<button
											className="thumbnail"
											type="button"
											data-bs-target="#modalCarousel"
											data-bs-slide-to="2"
											aria-label="Slide 3"
										>
											<img src={item.image.image2} className="thumbImg d-block w-100" alt="..." />
										</button>
										<button
											className="thumbnail"
											type="button"
											data-bs-target="#modalCarousel"
											data-bs-slide-to="3"
											aria-label="Slide 4"
										>
											<img src={item.image.image3} className="thumbImg d-block w-100" alt="..." />
										</button>
									</div>
									<button className="carousel-control-prev" data-bs-target="#modalCarousel" data-bs-slide="prev">
										<span className="carousel-control-prev-icon h-75 w-100 align-self-start" aria-hidden="true"></span>
									</button>
									<button className="carousel-control-next" data-bs-target="#modalCarousel" data-bs-slide="next">
										<span className="carousel-control-next-icon h-75 w-100 align-self-start" aria-hidden="true"></span>
									</button>
								</div>
							</div>
							<div
								className="col-12 p-0 col-lg-6 p-5"
								style={{fontSize: 'var(--fs-500)', fontFamily: 'var(--ff-primary-font)'}}
							>
								<h1 className="text-danger">{item.name}</h1>
								<div className="row">
									<div className="col">Category: {item.type}</div>
									<div className="col">Status: {item.stock > 0 ? item.stock + ' item(s) available' : 'Out of Stock'}</div>
								</div>
								<div className="modal-priceTag row justify-items-center ms-3 my-4 pt-1">
									<h2 className="modal-priceTag-text px-5 py-2">${item.price}</h2>
								</div>
								<div className="">
									<button
										className="btn btn-lg mx-1 px-5 my-1 btn-primary"
										style={{fontSize: 'var(--fs-500)'}}
										onClick={() => {
											handleAddProductCart(item);
										}}
									>
										Add to cart
									</button>
									<button
										className="btn btn-lg mx-1 px-5 my-1 btn-warning"
										style={{fontSize: 'var(--fs-500)'}}
										onClick={() => {
											handleAddProductCart(item);
											handleClose();
											navigate('/cart');
										}}
									>
										Buy now
									</button>
									<br />
									<button
										className="btn btn-lg mx-1 px-5 my-1 btn-danger"
										style={{fontSize: 'var(--fs-500)'}}
										onClick={() => navigate('/downloadproduct', {state: item})}
									>
										Download PDF
									</button>
								</div>
								<div className="">
									<br />
									<div className="fw-bold fs-2 text-center">Description</div>
									<hr />
									<div>{item.desc}</div>
									<br />
									<div>{item.descDetail}</div>
									<br />
								</div>
								<div>
									<div className="fw-bold fs-2 text-center">Specification</div>
									<hr />
									<div>Dimensions: {item.param.size}</div>
									<div>Weight: {item.param.weight}</div>
									<div>Pages: {item.param.pages}</div>
									<div>Material: {item.param.material}</div>
									<br />
								</div>
								<div className="text-end">
									<button
										className="btn btn-lg mx-1 px-5 my-1 btn-danger"
										style={{fontSize: 'var(--fs-500)'}}
										onClick={() => handleClose()}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					)}
				</Modal.Body>
			</Modal>
		</>
	);
}

export default ProductCard;
