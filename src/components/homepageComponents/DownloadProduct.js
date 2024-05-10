import React, {useContext, useEffect, useRef, useState} from 'react';
import './DownloadProduct.css';
import {useLocation, useNavigate} from 'react-router-dom';
import {jsPDF} from 'jspdf';

function DownloadProduct(props) {
	// let {item} = props;
	const location = useLocation();
	const item = location.state;
	const navigate = useNavigate();
	console.log('-----------------');
	console.log('test pass item:', item);
	console.log('type of pass item:', typeof item);
	console.log('-----------------');
	const trang1 = useRef();
	const trang2 = useRef();
	function generatePDF() {
		let pdf = new jsPDF('p', 'px', 'a4');
		let input = document.getElementById('download-content');
		const opt = {
			callback: function (pdf) {
				pdf.save(`${item.name}.pdf`);
			},
			margin: [0, 0, 0, 20],
			autoPaging: 'text',
			html2canvas: {
				allowTaint: false,
				dpi: 600,
				letterRendering: true,
				logging: false,
				scale: 0.43,
			},
		};
		pdf.html(input, opt);

		console.log(trang1.current);
		console.log('input test:', input);
	}
	useEffect(() => {
		generatePDF();
		navigate(-1);
	}, [item]);
	return (
		<div className="downloadproduct-container">
			<div className="content row">
				<div className="container row" id="download-content">
					<div className="download-text-container" style={{fontSize: 'var(--fs-600)', fontFamily: 'var(--ff-primary-font)'}}>
						<div className="text-danger" style={{fontSize: '55px'}}>
							{item.name}
						</div>
						<div className="">
							<div className="fs-2">
								<span className="fw-bold fs-1 text-primary">Category:</span> {item.type}
							</div>
						</div>
						<br />
						<div className="modal-priceTag justify-items-center ms-3 my-4 pt-1">
							<div className="modal-priceTag-text px-5 py-2" style={{fontSize: '40px'}}>
								${item.price}
							</div>
						</div>
						<br />
						<div className="">
							<br />
							<div className="fw-bold fs-1 text-primary">Description</div>
							<hr />
							<div className="fs-2">{item.desc}</div>
							<br />
							<div className="fs-2">{item.descDetail}</div>
							<br />
						</div>
						<div>
							<div className="fw-bold fs-1 text-primary">Specification</div>
							<hr />
							<div className="fs-2">Dimensions: {item.param.size}</div>
							<div className="fs-2">Weight: {item.param.weight}</div>
							<div className="fs-2">Pages: {item.param.pages}</div>
							<div className="fs-2">Material: {item.param.material}</div>
							<br />
						</div>
					</div>
					<div className="container p-5"></div>
					<div className="download-img-container">
						<h1 className="text-danger">Product images</h1>
						<hr />
						<div className="row h-50">
							<div className="col-6 h-100">
								<img src={item.image.mainImage} className="largeImg d-block w-100" alt="..." />
							</div>
							<div className="col-6 h-100">
								<img src={item.image.image2} className="largeImg d-block w-100" alt="..." />
							</div>
						</div>
						<div className="row h-50">
							<div className="col-6 h-100">
								<img src={item.image.image1} className="largeImg d-block w-100" alt="..." />
							</div>
							<div className="col-6 h-100">
								<img src={item.image.image3} className="largeImg d-block w-100" alt="..." />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DownloadProduct;
