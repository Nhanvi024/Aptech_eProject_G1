import {useNavigate} from 'react-router-dom';
import './HomePage.css';
import '../../components/homepageComponents/ProductCard.css';

import React, {useContext, useEffect, useRef, useState} from 'react';
import ProductCard from '../../components/homepageComponents/ProductCard';
import {DataContext} from '../../context/DataContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

// import required modules
import {Grid, Navigation} from 'swiper/modules';
import {motion} from 'framer-motion';
function HomePage(props) {
	const Navigate = useNavigate();
	const {products, searchProduct, setSearchProduct, isDataLoaded, setIsDataLoaded} = useContext(DataContext);

	const [notebookList, setNotebookList] = useState([]);
	const [calendarList, setCalendarList] = useState([]);
	// check window side and set number of items to display
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	function resizeWindow() {
		setWindowWidth(window.innerWidth);
	}
	window.onresize = resizeWindow;
	let itemPerPage;
	function handleChangeScreenSize(e) {
		switch (true) {
			case e < 290:
				itemPerPage = 1;
				break;
			case e < 490:
				itemPerPage = 2;
				break;
			case e < 590:
				itemPerPage = 3;
				break;
			case e < 768:
				itemPerPage = 4;
				break;
			case e < 992:
				itemPerPage = 3;
				break;
			case e < 1200:
				itemPerPage = 4;
				break;
			default:
				itemPerPage = 5;
				break;
		}
	}
	handleChangeScreenSize(windowWidth);
	// ==================================================

	//Swiper
	const swiperRefNotebook = useRef();
	const swiperRefCalendar = useRef();

	// ==================================================

	// maxpage and switch page
	// next/prev notebook
	// let section1MaxPage = Math.ceil((+Object.keys(notebookList || {}).length - itemPerPage) / 2);
	// const [section1Page, setSection1Page] = useState(0);

	// function handleSection1PageNext(params) {
	// 	if (section1Page < section1MaxPage) {
	// 		setSection1Page((pre) => pre + 1);
	// 	} else {
	// 		setSection1Page(0);
	// 	}
	// }
	// function handleSection1PagePrev(params) {
	// 	if (section1Page > 0) {
	// 		setSection1Page((pre) => pre - 1);
	// 	} else {
	// 		setSection1Page(section1MaxPage);
	// 	}
	// }

	// next/prev calendar
	// let section2MaxPage = Math.ceil((+Object.keys(calendarList || {}).length - itemPerPage) / 2);
	// const [section2Page, setSection2Page] = useState(0);

	// function handleSection2PageNext(params) {
	// 	if (section2Page < section2MaxPage) {
	// 		setSection2Page((pre) => pre + 1);
	// 	} else {
	// 		setSection2Page(0);
	// 	}
	// }
	// function handleSection2PagePrev(params) {
	// 	if (section2Page > 0) {
	// 		setSection2Page((pre) => pre - 1);
	// 	} else {
	// 		setSection2Page(section2MaxPage);
	// 	}
	// }
	// ==================================================

	// Category list
	let category1List = ['all']; //notebook category list
	{
		products.length !== 0 &&
			products.noteBook.map((item, index) => {
				if (!category1List.includes(item.type)) {
					category1List = [...category1List, item.type];
				}
			});
	}
	let category2List = ['all']; //calendar category list
	{
		products.length !== 0 &&
			products.calendar.map((item, index) => {
				if (!category2List.includes(item.type)) {
					category2List = [...category2List, item.type];
				}
			});
	}
	// ==================================================

	// filter homepage by type
	// filter notebook
	const [notebookTypeFilter, setNotebookTypeFilter] = useState('all');

	useEffect(() => {
		if (isDataLoaded === true) {
			if (notebookTypeFilter === 'all') {
				setNotebookList(products.noteBook);
			} else {
				setNotebookList(products.noteBook.filter((item) => item.type === notebookTypeFilter));
			}
		} else {
			console.log('chua load data');
		}
	}, [notebookTypeFilter, products]);

	// filter calendar
	const [calendarTypeFilter, setCalendarTypeFilter] = useState('all');

	useEffect(() => {
		if (isDataLoaded === true) {
			if (calendarTypeFilter === 'all') {
				setCalendarList(products.calendar);
			} else {
				setCalendarList(products.calendar.filter((item) => item.type === calendarTypeFilter));
			}
		} else {
			console.log('chua load data');
		}
	}, [calendarTypeFilter, products]);
	// ==================================================

	return (
		<>
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1, transition: {duration: 1}}}
				exit={{opacity: 0, transition: {duration: 0}}}>
				<div className="homePageContainer container-fluid p-0">
					<section className="homepage-section-carousel container-fluid p-0 my-3 align-items-center">
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
										className="homepage-carousel-img d-block w-100"
										onClick={() => Navigate('/news')}
									/>
								</div>
								<div className="carousel-item" data-bs-interval="3000">
									<img
										src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_2.jpg?1711094550864"
										alt="Notebook 1"
										className="homepage-carousel-img d-block w-100"
										onClick={() => Navigate('/calendar')}
									/>
								</div>
								<div className="carousel-item" data-bs-interval="3000">
									<img
										src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_3.jpg?1711094550864"
										alt="Notebook 2"
										className="homepage-carousel-img d-block w-100"
									/>
								</div>
								<div className="carousel-item" data-bs-interval="3000">
									<img
										src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_4.jpg?1711094550864"
										alt="Notebook 3"
										className="homepage-carousel-img d-block w-100"
									/>
								</div>
								<div className="carousel-item" data-bs-interval="3000">
									<img
										src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_5.jpg?1711094550864"
										alt="Notebook 4"
										className="homepage-carousel-img d-block w-100"
									/>
								</div>
							</div>
							{/* <!-- Left and right controls --> */}
							<button className="carousel-control-prev" data-bs-target="#myCarousel" data-bs-slide="prev">
								<span className="carousel-control-prev-icon h-100 w-50" aria-hidden="true"></span>
							</button>
							<button className="carousel-control-next" data-bs-target="#myCarousel" data-bs-slide="next">
								<span className="carousel-control-next-icon h-100 w-50" aria-hidden="true"></span>
							</button>
						</div>
					</section>

					<section className="homepage-section-notebook-container container-md p-0 my-3 align-items-center">
						<div className="homepage-section-notebook row w-100 h-100 g-0 flex-row-reverse align-items-center">
							<div className="homepage-section-notebook-right col-md-8">
								<div className="row g-0">
									<div className="homepage-section-notebook-right-row1 row m-auto mb-2">
										<div className="col-7 col-sm-6 text-center align-content-center">
											<button
												className="homepage-redirect-button row m-0 mb-2 justify-items-center"
												onClick={() => Navigate('/notebook')}>
												<p className="m-0 py-3 homepage-redirect-button-text w-100">Notebook</p>
											</button>
										</div>
										<div className="d-block d-sm-none col-6 g-0 align-content-center py-3">
											<div className="dropdown">
												<button
													className="btn btn-lg dropdown-toggle"
													type="button"
													data-bs-toggle="dropdown"
													style={{background: 'var(--secondary-background-clr)', fontSize: 'var(--fs-500)'}}
													aria-expanded="false">
													<span>Category</span>
												</button>
												<ul className="dropdown-menu fs-2">
													{products.length !== 0 &&
														category1List.map((item, index) => {
															let navClass = item === notebookTypeFilter ? 'nav-item active' : 'nav-item';
															return (
																<li className={navClass} key={index}>
																	<a
																		className="nav-link"
																		onClick={() => {
																			setNotebookTypeFilter(item);
																		}}>
																		{item}
																	</a>
																</li>
															);
														})}
												</ul>
											</div>
										</div>
										<div className="col-6 col-sm-6 text-end align-content-center text-end">
											<span>
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
											</span>
										</div>
										<div className="d-none d-sm-block col-12 g-0">
											<ul className="nav nav-pills">
												{products.length !== 0 &&
													category1List.map((item, index) => {
														let navClass = item === notebookTypeFilter ? 'nav-item active' : 'nav-item';
														return (
															<li className={navClass} key={index}>
																<a
																	className="nav-link"
																	style={{fontSize: 'var(--fs-500)'}}
																	onClick={() => {
																		setNotebookTypeFilter(item);
																	}}>
																	{item}
																</a>
															</li>
														);
													})}
											</ul>
										</div>
									</div>
									<hr className="p-0"></hr>
									<div className="homepage-section-notebook-right-row2 row justify-content-center m-auto align-items-center">
										<div className="homepage-section-notebook-right-row2row row">
											<div className="swiper-container-notebook">
												<Swiper
													grid={{
														rows: 2,
														fill: 'row',
													}}
													breakpoints={{
														1: {
															slidesPerView: 1,
															grid: {rows: 2, fill: 'row'},
														},
														290: {
															slidesPerView: 2,
															grid: {rows: 2, fill: 'row'},
														},
														490: {
															slidesPerView: 3,
															grid: {rows: 2, fill: 'row'},
														},
														590: {
															slidesPerView: 4,
															grid: {rows: 2, fill: 'row'},
														},
														768: {
															slidesPerView: 3,
															grid: {rows: 2, fill: 'row'},
														},
														992: {
															slidesPerView: 4,
															grid: {rows: 2, fill: 'row'},
														},
														1200: {
															slidesPerView: 5,
															grid: {rows: 2, fill: 'row'},
														},
													}}
													// spaceBetween={30}
													rewind={true}
													modules={[Grid, Navigation]}
													onBeforeInit={(swiper) => {
														swiperRefNotebook.current = swiper;
													}}
													className="mySwiper"
													style={{width: `${itemPerPage * 150}px`}}>
													{products.length !== 0 &&
														notebookList.map((item, index) => {
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
								</div>
							</div>
							<div className="homepage-section-notebook-left col-md-4 p-3 d-flex my-3">
								<div id="homepage-notebookCarousel" className="carousel slide text-center m-auto w-100" data-bs-ride="carousel">
									{/* <!-- Wrapper for slides --> */}
									<div className="carousel-inner d-flex">
										{products.length === 0 && (
											<div className="d-flex justify-content-center">
												<div
													className="spinner-border text-danger"
													style={{
														width: '5rem',
														height: '5rem',
													}}
													role="status">
													<span className="visually-hidden">Loading...</span>
												</div>
											</div>
										)}
										{products.length !== 0 &&
											products.noteBook.map((item, index) => {
												let classCarousel = index === 0 ? 'carousel-item active' : 'carousel-item';
												return (
													<div
														key={index}
														className={classCarousel}
														data-bs-interval="3000"
														onClick={() => Navigate(`/detail/${item.id}`)}>
														<div className="homepage-productCard-carouselImgContainer">
															<img src={item.image.mainImage} className="d-flex w-100 homepage-productCard-carouselImg" alt="..." />
														</div>
														<div>
															<div className="homepage-productCard-nameCarousel mx-auto my-4">{item.name}</div>
															<div className="homepage-productCard-priceCarousel">${item.price}</div>
														</div>
													</div>
												);
											})}
									</div>

									{/* <!-- Left and right controls --> */}
									<button className="carousel-control-prev" data-bs-target="#homepage-notebookCarousel" data-bs-slide="prev">
										<span className="carousel-control-prev-icon h-100 w-100" aria-hidden="false"></span>
									</button>
									<button className="carousel-control-next" data-bs-target="#homepage-notebookCarousel" data-bs-slide="next">
										<span className="carousel-control-next-icon h-100 w-100" aria-hidden="false"></span>
									</button>
								</div>
							</div>
						</div>
					</section>
					<section className="homepage-section-notebook-container container-md p-0 my-3 align-items-center">
						<div className="homepage-section-notebook row w-100 h-100 g-0 flex-wrap align-items-center">
							<div className="homepage-section-notebook-right col-md-8">
								<div className="row g-0">
									<div className="homepage-section-notebook-right-row1 row m-auto mb-2">
										<div className="col-7 col-sm-6 text-center align-content-center">
											<button
												className="homepage-redirect-button row m-0 mb-2 justify-items-center"
												onClick={() => Navigate('/calendar')}>
												<p className="m-0 py-3 homepage-redirect-button-text w-100">calendar</p>
											</button>
										</div>
										<div className="d-block d-sm-none col-6 g-0 align-content-center py-3">
											<div className="dropdown">
												<button
													className="btn btn-lg dropdown-toggle"
													type="button"
													data-bs-toggle="dropdown"
													style={{background: 'var(--secondary-background-clr)', fontSize: 'var(--fs-500)'}}
													aria-expanded="false">
													<span>Category</span>
												</button>
												<ul className="dropdown-menu fs-2">
													{products.length !== 0 &&
														category2List.map((item, index) => {
															let navClass = item === calendarTypeFilter ? 'nav-item active' : 'nav-item';
															return (
																<li className={navClass} key={index}>
																	<a
																		className="nav-link"
																		onClick={() => {
																			setCalendarTypeFilter(item);
																		}}>
																		{item}
																	</a>
																</li>
															);
														})}
												</ul>
											</div>
										</div>
										<div className="col-6 col-sm-6text-end align-content-center text-end">
											<span>
												<button
													className="btn pt-4 pb-0 me-1 homepage-list-nextprevBtn"
													onClick={() => swiperRefCalendar.current?.slidePrev()}>
													<p className="homepage-nextPrevButton">&#8249;</p>
												</button>
												<button
													className="btn pt-4 pb-0 ms-1 homepage-list-nextprevBtn"
													onClick={() => swiperRefCalendar.current?.slideNext()}>
													<p className="homepage-nextPrevButton">&#8250;</p>
												</button>
											</span>
										</div>
										<div className="d-none d-sm-block col-12 g-0">
											<ul className="nav nav-pills">
												{products.length !== 0 &&
													category2List.map((item, index) => {
														let navClass = item === calendarTypeFilter ? 'nav-item active' : 'nav-item';
														return (
															<li className={navClass} key={index}>
																<a
																	className="nav-link"
																	style={{fontSize: 'var(--fs-500)'}}
																	onClick={() => {
																		setCalendarTypeFilter(item);
																	}}>
																	{item}
																</a>
															</li>
														);
													})}
											</ul>
										</div>
									</div>
									<hr className="p-0"></hr>
									<div className="homepage-section-notebook-right-row2 row justify-content-center m-auto align-items-center">
										<div className="homepage-section-notebook-right-row2row">
											<div className="swiper-container-calendar">
												<Swiper
													grid={{
														rows: 2,
														fill: 'row',
													}}
													breakpoints={{
														1: {
															slidesPerView: 1,
															grid: {rows: 2, fill: 'row'},
														},
														290: {
															slidesPerView: 2,
															grid: {rows: 2, fill: 'row'},
														},
														490: {
															slidesPerView: 3,
															grid: {rows: 2, fill: 'row'},
														},
														590: {
															slidesPerView: 4,
															grid: {rows: 2, fill: 'row'},
														},
														768: {
															slidesPerView: 3,
															grid: {rows: 2, fill: 'row'},
														},
														992: {
															slidesPerView: 4,
															grid: {rows: 2, fill: 'row'},
														},
														1200: {
															slidesPerView: 5,
															grid: {rows: 2, fill: 'row'},
														},
													}}
													// spaceBetween={30}
													slidesPerView={3}
													rewind={true}
													modules={[Grid, Navigation]}
													onBeforeInit={(swiper) => {
														swiperRefCalendar.current = swiper;
													}}
													// onSlideChange={() => console.log('slide change')}
													// onSwiper={(swiper) => console.log(swiper)}
													className="mySwiper2"
													style={{width: `${itemPerPage * 150}px`}}>
													{products.length !== 0 &&
														calendarList.map((item, index) => {
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
								</div>
							</div>
							<div className="homepage-section-notebook-left col-md-4 p-3 d-flex my-3">
								<div id="homepage-calendarCarousel" className="carousel slide text-center m-auto w-100" data-bs-ride="carousel">
									{/* <!-- Wrapper for slides --> */}
									<div className="carousel-inner d-flex">
										{products.length === 0 && (
											<div className="d-flex justify-content-center">
												<div
													className="spinner-border text-danger"
													style={{
														width: '5rem',
														height: '5rem',
													}}
													role="status">
													<span className="visually-hidden">Loading...</span>
												</div>
											</div>
										)}
										{products.length !== 0 &&
											products.calendar.map((item, index) => {
												let classCarousel = index === 0 ? 'carousel-item active' : 'carousel-item';
												return (
													<div
														key={index}
														className={classCarousel}
														data-bs-interval="3000"
														onClick={() => Navigate(`/detail/${item.id}`)}>
														<div className="homepage-productCard-carouselImgContainer">
															<img src={item.image.mainImage} alt="..." className="d-flex w-100 homepage-productCard-carouselImg" />
														</div>
														<div>
															<div className="homepage-productCard-nameCarousel mx-auto my-4">{item.name}</div>
															<div className="homepage-productCard-priceCarousel">${item.price}</div>
														</div>
													</div>
												);
											})}
									</div>

									{/* <!-- Left and right controls --> */}
									<button className="carousel-control-prev" data-bs-target="#homepage-calendarCarousel" data-bs-slide="prev">
										<span className="carousel-control-prev-icon h-100 w-100" aria-hidden="false"></span>
									</button>
									<button className="carousel-control-next" data-bs-target="#homepage-calendarCarousel" data-bs-slide="next">
										<span className="carousel-control-next-icon h-100 w-100" aria-hidden="false"></span>
									</button>
								</div>
							</div>
						</div>
					</section>
				</div>
			</motion.div>
		</>
	);
}

export default HomePage;
