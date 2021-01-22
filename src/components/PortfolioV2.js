import React from 'react';
import react from '../images/react.png';
import react_covid19_tracker from '../images/react_covid19_tracker.jpg';
import node_express_mongo from '../images/node_express_mongo.png';
import Spring_Cloud_Config_Server from '../images/Spring-Cloud-Config-Server.png';
import e_commerce from '../images/e-commerce.png';
import react_charts from '../images/react_charts.jpg';
import react_amplify from '../images/react_amplify.jpg';
import zoom from '../images/zoom.jpg';
import instagram from '../images/instagram.jpg';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// POPUP BOX IMPORTS
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

const PortfolioV2 = () => {

    //INSTAGRAM Popup Box
    const openPopupboxInstagram = ()=>{
        const content=(
            <>
        <img src={instagram} alt="Instagram Clone Project"/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem laboriosam eveniet asperiores iure voluptates doloribus odio fuga molestiae ipsam. Ducimus, consequatur. Corporis aut inventore natus! Saepe asperiores dolorem nobis recusandae.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() =>window.open("https://insta-clone-96.herokuapp.com/signin","_blank")}>https://insta-clone-96.herokuapp.com/signin</a>
        </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigInstagram = {
    titleBar: {
      enable: true,
      text: "Instagram clone project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
    //Covid Tracker Popup Box
    const openPopupboxCovidTracker = ()=>{
        const content=(
            <>
        <img src={react_covid19_tracker} alt="React Covid Tracker Project"/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem laboriosam eveniet asperiores iure voluptates doloribus odio fuga molestiae ipsam. Ducimus, consequatur. Corporis aut inventore natus! Saepe asperiores dolorem nobis recusandae.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() =>window.open("https://jolly-kilby-fccf54.netlify.app/","_blank")}>https://jolly-kilby-fccf54.netlify.app/</a>
        </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigCovidTracker = {
    titleBar: {
      enable: true,
      text: "Covid19 Tracker project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
    //Mern Stack E-commerce Popup Box
    const openPopupboxMernECommerce = ()=>{
        const content=(
            <>
        <img src={e_commerce} alt="MERN stack e-commerce Project"/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem laboriosam eveniet asperiores iure voluptates doloribus odio fuga molestiae ipsam. Ducimus, consequatur. Corporis aut inventore natus! Saepe asperiores dolorem nobis recusandae.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() =>window.open("https://proshop96.herokuapp.com/","_blank")}>https://proshop96.herokuapp.com/</a>
        </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigMernECommerce = {
    titleBar: {
      enable: true,
      text: "Mern stack e-Commerce project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

	return (
		<div className="portfolio-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center py-5">portfolio</h1>
				{/* 1 */}
				<div className="image-box-wrapper row justify-content-center">
					<div className="portfolio-image-box">
						<img className="portfolio-image" src={react} alt="React beginner project" />
						<div className="overflow" />
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
					{/* 2 */}
					
						<div className="portfolio-image-box" onClick={openPopupboxCovidTracker}>
							<img
								className="portfolio-image"
								src={react_covid19_tracker}
								alt="React Covid19 tracker project"
							/>
							<div className="overflow" />
							<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
						</div>
					
					{/* 3 */}
					
						<div className="portfolio-image-box">
							<img
								className="portfolio-image"
								src={node_express_mongo}
								alt="Node Express Mongo project"
							/>
							<div className="overflow" />
							<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
						</div>
					
					{/* 4 */}
					
						<div className="portfolio-image-box">
							<img
								className="portfolio-image"
								src={Spring_Cloud_Config_Server}
								alt="Spring Cloud Config Server project"
							/>
							<div className="overflow" />
							<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
						</div>
					
					{/* 5 */}
					
						<div className="portfolio-image-box" onClick={openPopupboxMernECommerce}>
							<img className="portfolio-image" src={e_commerce} alt="E commerce project" />
							<div className="overflow" />
							<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
						</div>
					
					{/* 6 */}
					
						<div className="portfolio-image-box">
							<img className="portfolio-image" src={react_charts} alt="React Charts project" />
							<div className="overflow" />
							<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
						</div>
					
					{/* 7 */}
					
						<div className="portfolio-image-box">
							<img className="portfolio-image" src={react_amplify} alt="React Amplify project" />
							<div className="overflow" />
							<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
						</div>
					
					{/* 8 */}
					
						<div className="portfolio-image-box">
							<img className="portfolio-image" src={zoom} alt="zoom Clone project" />
							<div className="overflow" />
							<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
						</div>
					
					{/* 9 */}
					
						<div className="portfolio-image-box" onClick={openPopupboxInstagram}>
							<img className="portfolio-image" src={instagram} alt="Instagram Clone project" />
							<div className="overflow" />
							<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                            
						</div>
					
				</div>
			</div>
            <PopupboxContainer {...popupboxConfigInstagram}/>
            <PopupboxContainer {...popupboxConfigCovidTracker}/>
            <PopupboxContainer {...popupboxConfigMernECommerce}/>
		</div>
	);
};

export default PortfolioV2;
