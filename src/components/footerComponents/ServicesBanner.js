import React from 'react';
import './ServicesBanner.css';

function ServicesBanner(props) {
	return (
		<div className="servicesBanner-container">
			<div className="servicesBanner-delivery row text-center" style={{overflow: 'hidden'}}>
				<div className="col-12">
					<img
						className="servicesImage"
						src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/policy1.png?1711094550864"
						alt="deliveryIcon"
					/>
				</div>
				<div className="">
					<p className="servicesName d-none d-sm-block">DELIVERY</p>
				</div>
			</div>
			<div className="servicesBanner-support row text-center">
				<div className="col-12">
					<img
						className="servicesImage"
						src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/policy2.png?1711094550864"
						alt="supportIcon"
					/>
				</div>
				<div className="">
					<p className="servicesName d-none d-sm-block">SUPPORT 24/7</p>
				</div>
			</div>
			<div className="servicesBanner-exchange_return row text-center">
				<div className="col-12">
					<img
						className="servicesImage"
						src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/policy3.png?1711094550864"
						alt="exchangeIcon"
					/>
				</div>
				<div className="">
					<p className="servicesName d-none d-sm-block">EXCHANGE OR RETURN</p>
				</div>
			</div>
			<div className="servicesBanner-standardPrice row text-center">
				<div className="col-12">
					<img
						className="servicesImage"
						src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/policy4.png?1711094550864"
						alt="priceIcon"
					/>
				</div>
				<div className="">
					<p className="servicesName d-none d-sm-block">STANDARD PRICE</p>
				</div>
			</div>
		</div>
	);
}

export default ServicesBanner;
