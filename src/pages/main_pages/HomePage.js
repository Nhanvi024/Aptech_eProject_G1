import './HomePage.css'

import React from 'react';

function HomePage(props) {
    return (
        <div className='homePageContainer'>
            <div className="homepageCarousel">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* <!-- Indicators --> */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="4"></li>
                    </ol>

                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner">
                        <div className="item active">
                            <img
                                src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_1.jpg?1711094550864"
                                alt="Los Angeles"
                                style={{ width: '100%' }} />
                        </div>

                        <div className="item">
                            <img
                                src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_2.jpg?1711094550864"
                                alt="Los Angeles"
                                style={{ width: '100%' }} />
                        </div>

                        <div className="item">
                            <img
                                src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_3.jpg?1711094550864"
                                alt="Los Angeles"
                                style={{ width: '100%' }} />
                        </div>
                        <div className="item">
                            <img
                                src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_4.jpg?1711094550864"
                                alt="Los Angeles"
                                style={{ width: '100%' }} />
                        </div>
                        <div className="item">
                            <img
                                src="https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/slider_5.jpg?1711094550864"
                                alt="Los Angeles"
                                style={{ width: '100%' }} />
                        </div>
                    </div>

                    {/* <!-- Left and right controls --> */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
        </div>
    );
}

export default HomePage;