import React, {useContext, useEffect} from 'react';
import {DataContext} from '../../context/DataContext';
import './DownloadAll.css';
import jsPDF from 'jspdf';
import {useNavigate} from 'react-router-dom';
import html2pdf from 'html2pdf.js';

function DownloadAll(props) {
	const {products} = useContext(DataContext);
	const navigate = useNavigate();
	const pagebreaknotebook = <div className="html2pdf__page-break"></div>;
	function downloadAll(params) {
		const testelement = document.getElementById('downloadAll');
		const options = {
			filename: `Ryana Calendar's products.pdf`,
			margin: [30, 50],
			image: {type: 'jpeg', quality: 0.98},
			html2canvas: {scale: 2, allowTaint: false, dpi: 900, letterRendering: true, logging: false},
			jsPDF: {unit: 'px', format: [1555, 1100], orientation: 'l'},
		};
		html2pdf().set(options).from(testelement).save();
	}
	useEffect(() => {
		downloadAll();
		navigate(-1);
	}, []);
	if (products.length !== 0) {
		return (
			<div className="container-fluid h-100" id="downloadAll" style={{zIndex: 2}}>
				<div id="content-notebook">
					<table className="text-center" style={{border: 'none'}}>
						<thead className="">
							<tr>
								<td colSpan={7} style={{lineHeight: '50px', fontSize: '32px'}}>
									NOTEBOOK
								</td>
							</tr>
							<tr>
								<th style={{width: '7.5%'}}>aNo.</th>
								<th style={{width: '7.5%'}}>ID</th>
								<th style={{width: '20%'}}>Name</th>
								<th style={{width: '20%'}}>Images</th>
								<th style={{width: '30%'}}>Specification</th>
								<th style={{width: '7.5%'}}>Price</th>
								<th style={{width: '7.5%'}}>Stock</th>
							</tr>
						</thead>
						{products.length !== 0 &&
							products.noteBook.map((item, index) => {
								return (
									<>
										<tbody>
											<tr>
												<th rowSpan={4}>{index + 1}</th>
												<th rowSpan={4}>{item.id}</th>
												<td rowSpan={4}>{item.name}</td>
												{/* <td rowSpan={4}>{item.image.mainImage}</td> */}
												<td rowSpan={4}>images</td>
												<td>{item.param.size}</td>
												<td rowSpan={4}>${item.price}</td>
												<td rowSpan={4}>{item.stock}</td>
											</tr>
											<tr>
												<td>{item.param.weight}</td>
											</tr>
											<tr>
												<td style={{height: '40px'}}>{item.param.material}</td>
											</tr>
											<tr>
												<td>{item.param.pages}</td>
											</tr>
										</tbody>
										{index == 4 ? pagebreaknotebook : ''}
										{index == 10 ? pagebreaknotebook : ''}
										{index == 16 ? pagebreaknotebook : ''}
										{index == 22 ? pagebreaknotebook : ''}
									</>
								);
							})}
					</table>
				</div>
				<div className="html2pdf__page-break"></div>
				{/* <br />
				<button onClick={() => generatePDF()}>Download</button>
				<button onClick={() => downloadAll()}>Download html2pdf</button>
				<br /> */}
				<div className="html2pdf__page-break"></div>
				<div id="content-calendar">
					<table className="text-center" style={{border: 'none'}}>
						<thead className="">
							<tr>
								<td colSpan={7} style={{lineHeight: '50px', fontSize: '32px'}}>
									CALENDAR
								</td>
							</tr>
							<tr>
								<th style={{width: '7.5%'}}>aNo.</th>
								<th style={{width: '7.5%'}}>ID</th>
								<th style={{width: '20%'}}>Name</th>
								<th style={{width: '20%'}}>Images</th>
								<th style={{width: '30%'}}>Specification</th>
								<th style={{width: '7.5%'}}>Price</th>
								<th style={{width: '7.5%'}}>Stock</th>
							</tr>
						</thead>
						{products.length !== 0 &&
							products.calendar.map((item, index) => {
								return (
									<>
										<tbody>
											<tr>
												<th rowSpan={4}>{index + 1}</th>
												<th rowSpan={4}>{item.id}</th>
												<td rowSpan={4}>{item.name}</td>
												{/* <td rowSpan={4}>{item.image.mainImage}</td> */}
												<td rowSpan={4}>images</td>
												<td>{item.param.size}</td>
												<td rowSpan={4}>${item.price}</td>
												<td rowSpan={4}>{item.stock}</td>
											</tr>
											<tr>
												<td>{item.param.weight}</td>
											</tr>
											<tr>
												<td style={{height: '40px'}}>{item.param.material}</td>
											</tr>
											<tr>
												<td>{item.param.pages}</td>
											</tr>
										</tbody>
										{index == 4 ? pagebreaknotebook : ''}
										{index == 10 ? pagebreaknotebook : ''}
										{index == 16 ? pagebreaknotebook : ''}
										{index == 22 ? pagebreaknotebook : ''}
									</>
								);
							})}
					</table>
				</div>
			</div>
		);
	}
}

export default DownloadAll;
