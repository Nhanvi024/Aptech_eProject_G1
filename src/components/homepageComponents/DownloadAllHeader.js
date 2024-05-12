import React from 'react';
import './DownloadAllHeader.css';
import RYANA9 from '../../assets/image/logo/RYANA9.png';

function DownloadAllHeader(props) {
	return (
		<div className="DownloadAllHeader-Container container-fluid row g-0">
			<div className="col-6">
				<img
					className=""
					src={RYANA9}
					// src={logoCalendar}
					alt="logoFooter"
				/>
			</div>
			<div className="col-6 align-content-center">
				<div className="DownloadAll-HeaderInfo">
					<p className="">Team Calendar</p>
					<p className="">T1.2401.E0</p>
					<p className="">590, Cach Mang Thang Tam street, ward 11, district 3, Ho Chi Minh city</p>
					<div className="row">
						<div className="">
							<span className="">SUPPORT: </span>
							<img
								className=""
								style={{height: 30}}
								src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/24-hours.svg?1714632381944"
								alt=""
							/>
							<span className="infoFooter_supports-hotline"> 0123.456.789</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DownloadAllHeader;
