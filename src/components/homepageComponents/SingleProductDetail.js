import React, {useContext, useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {DataContext} from '../../context/DataContext';
import ProductCard from './ProductCard';
import './SingleProductDetail.css';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

// import required modules
import {Navigation} from 'swiper/modules';

function SingleProductDetail(props) {
	const {products, handleAddProductCart, isDataLoaded} = useContext(DataContext);
	const navigate = useNavigate();
	const {productId} = useParams();
	const [relateList, setRelateList] = useState([]);
	const [itemSingle, setItemSingle] = useState({
		id: '',
		name: '',
		type: '',
		price: '',
		stock: '',
		desc: '',
		descDetail: '',
		param: {
			size: '',
			pages: '',
			material: '',
			weight: '',
		},
		image: {
			mainImage: '',
			image1: '',
			image2: '',
			image3: '',
		},
	});
	const swiperRefNotebook = useRef();
	useEffect(() => {
		if (products.length !== 0) {
			products.noteBook.map((itema) => {
				if (itema.id === productId) {
					setItemSingle(itema);
					setRelateList(products.noteBook.filter((item) => item.type === itema.type));
				}
			});
			products.calendar.map((itema) => {
				if (itema.id === productId) {
					setItemSingle(itema);
					setRelateList(products.calendar.filter((item) => item.type === itema.type));
				}
			});
		}
	}, [isDataLoaded, products, productId]);
	if (products.length !== 0) {
		return (
			<>
				<img
					className="imageBanner"
					src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/bg_breadcrumb.jpg?1709874054823"
					alt="banner"></img>
			<div className="container" style={{cursor:'default'}}>
			<div className="container">
				<div className="container row mx-auto p-3 mt-5">
					<div className="col-12 p-0 col-lg-6">
						<div id="modalCarouselDetail" className="carousel slide" data-bs-ride="carousel">
							<div className="carousel-inner carda">
								<div className="carousel-item active">
									<img src={itemSingle.image.mainImage} className="largeImg d-block w-100" alt="..." />
								</div>
								<div className="carousel-item">
									<img src={itemSingle.image.image1} className="largeImg d-block w-100" alt="..." />
								</div>
								<div className="carousel-item">
									<img src={itemSingle.image.image2} className="largeImg d-block w-100" alt="..." />
								</div>
								<div className="carousel-item">
									<img src={itemSingle.image.image3} className="largeImg d-block w-100" alt="..." />
								</div>
							</div>
							<div className="carousel-indicators carda mt-5">
								<button
									type="button"
									data-bs-target="#modalCarouselDetail"
									data-bs-slide-to="0"
									className="thumbnail active"
									aria-current="true"
									aria-label="Slide 1">
									<img src={itemSingle.image.mainImage} className="thumbImg d-block w-100" alt="..." />
								</button>
								<button
									className="thumbnail"
									type="button"
									data-bs-target="#modalCarouselDetail"
									data-bs-slide-to="1"
									aria-label="Slide 2">
									<img src={itemSingle.image.image1} className="thumbImg d-block w-100" alt="..." />
								</button>
								<button
									className="thumbnail"
									type="button"
									data-bs-target="#modalCarouselDetail"
									data-bs-slide-to="2"
									aria-label="Slide 3">
									<img src={itemSingle.image.image2} className="thumbImg d-block w-100" alt="..." />
								</button>
								<button
									className="thumbnail"
									type="button"
									data-bs-target="#modalCarouselDetail"
									data-bs-slide-to="3"
									aria-label="Slide 4">
									<img src={itemSingle.image.image3} className="thumbImg d-block w-100" alt="..." />
								</button>
							</div>
							<button className="carousel-control-prev" data-bs-target="#modalCarouselDetail" data-bs-slide="prev">
								<span className="carousel-control-prev-icon h-75 w-100 align-self-start" aria-hidden="true"></span>
							</button>
							<button className="carousel-control-next" data-bs-target="#modalCarouselDetail" data-bs-slide="next">
								<span className="carousel-control-next-icon h-75 w-100 align-self-start" aria-hidden="true"></span>
							</button>
						</div>
					</div>
					<div className="col-12 p-0 col-lg-6 p-5" style={{fontSize: 'var(--fs-500)'}}>
						<h1 className="text-danger" style={{fontSize: 'var(--fs-900)'}}>
							{itemSingle.name}
						</h1>
						<div className="row">
							<div className="col">Category: {itemSingle.type}</div>
							<div className="col">
								Stock: {itemSingle.stock > 0 ? itemSingle.stock + ' item(s) available' : 'Out of Stock'}
							</div>
						</div>
						<div className="modal-priceTag row justify-items-center ms-3 my-4 pt-2">
							<h2 className="modal-priceTag-text px-5 py-2">${itemSingle.price}</h2>
						</div>
						<div className="">
							<button
								className="btn btn-lg mx-1 my-1 px-5 btn-primary fs-3"
								onClick={() => {
									handleAddProductCart(itemSingle);
								}}>
								Add to cart
							</button>
							<button
								className="btn btn-lg mx-1 my-1 px-5 btn-warning fs-3"
								onClick={() => {
									handleAddProductCart(itemSingle);
									navigate('/cart');
								}}>
								Buy now
							</button>
							<button
								className="btn btn-lg mx-1 my-1 px-5 btn-danger fs-3"
								onClick={() => navigate('/downloadproduct', {state: itemSingle})}>
								Download PDF
							</button>
							<br />
							<button className="btn btn-lg mx-1 my-1 px-4 btn-info fs-3" onClick={() => navigate('/')}>
								Back to homepage
							</button>
						</div>
						<div className="">
							<br />
							<br />
							<div className="fw-bold fs-2 text-center">Description</div>
							<hr></hr>
							<div>{itemSingle.desc}</div>
							<br />
							<div>{itemSingle.descDetail}</div>
							<br />
						</div>
						<div>
							<div className="fw-bold fs-2 text-center">Specification</div>
							<hr></hr>
							<div>Dimensions: {itemSingle.param.size}</div>
							<div>Weight: {itemSingle.param.weight}</div>
							<div>Pages: {itemSingle.param.pages}</div>
							<div>Material: {itemSingle.param.material}</div>
							<br />
						</div>
					</div>
				</div>
				<div className="row m-0 ms-3 my-4 mt-0">
					<div className="row">
						<div className="col-8">
							<div className="modal-priceTag text-center">
								<h2 className="modal-priceTag-text m-0 pt-3 pb-2 px-4">Related products</h2>
							</div>
						</div>
						<div className="col-4 text-end">
							<button
								className="btn btn-success pt-4 pb-0 me-1 homepage-list-nextprevBtn"
								onClick={() => swiperRefNotebook.current?.slidePrev()}>
								<p className="homepage-nextPrevButton">&#8249;</p>
							</button>
							<button
								className="btn btn-success pt-4 pb-0 ms-1 homepage-list-nextprevBtn"
								onClick={() => swiperRefNotebook.current?.slideNext()}>
								<p className="homepage-nextPrevButton">&#8250;</p>
							</button>
						</div>
					</div>
				</div>
				<hr></hr>
				<div className="container row mx-auto p-3">
					{/* {relateList.length !== 0 &&
						relateList.map((item, index) => {
							return <ProductCard key={index} item={item} />;
						})} */}
					<Swiper
						breakpoints={{
							1: {
								slidesPerView: 1,
							},
							290: {
								slidesPerView: 2,
							},
							490: {
								slidesPerView: 3,
							},
							768: {
								slidesPerView: 4,
							},
							992: {
								slidesPerView: 5,
							},
							1200: {
								slidesPerView: 6,
							},
							1400: {
								slidesPerView: 7,
							},
						}}
						// spaceBetween={30}
						rewind={true}
						modules={[Navigation]}
						onBeforeInit={(swiper) => {
							swiperRefNotebook.current = swiper;
						}}
						className="mySwiper">
						{relateList.length !== 0 &&
							relateList.map((item, index) => {
								return (
									<SwiperSlide key={index}>
										<ProductCard item={item} />
									</SwiperSlide>
								);
							})}
					</Swiper>
				</div>
			</div>
			</div>
			</>
		);
	}
}

export default SingleProductDetail;
