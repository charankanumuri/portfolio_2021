import React from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TelegramShareButton,
	TelegramIcon
} from 'react-share';

const Footer = () => {
	return (
		<div id="footer" className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="d-flex">
							<p>2-165 Ikkurru Village Narasaraopet Guntur AP</p>
						</div>
						<div className="d-flex">
							<a href="tel:9160430468">tel: +91-9160430468</a>
						</div>
						<div className="d-flex">
							<p>charan.kanumuri@gmail.com</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-2 col-sm-6">
						<div className="row">
							<div className="col">
								<a className="footer-nav">Home</a>
								<br />
								<a className="footer-nav">Resume</a>
								<br />
								<a className="footer-nav">About me</a>
							</div>
							<div className="col">
								<a className="footer-nav">Portfolio</a>
								<br />
								<a className="footer-nav">Contact me</a>
								<br />
								<a className="footer-nav">Footer</a>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
						<div className="d-flex justify-content-center">
							<FacebookShareButton
								url={'https://github.com/charankanumuri?tab=repositories'}
								quote={'Fullstack developer'}
								hashtag="#java"
							>
								<FacebookIcon className="mx-3" size={36} />
							</FacebookShareButton>
							<TwitterShareButton
								url={'https://github.com/charankanumuri?tab=repositories'}
								quote={'Fullstack developer'}
								hashtag="#java"
							>
								<TwitterIcon className="mx-3" size={36} />
							</TwitterShareButton>
							<LinkedinShareButton
								url={'https://github.com/charankanumuri?tab=repositories'}
								quote={'Fullstack developer'}
								hashtag="#java"
							>
								<LinkedinIcon className="mx-3" size={36} />
							</LinkedinShareButton>
							<TelegramShareButton
								url={'https://github.com/charankanumuri?tab=repositories'}
								quote={'Fullstack developer'}
								hashtag="#java"
							>
								<TelegramIcon className="mx-3" size={36} />
							</TelegramShareButton>
						</div>
						<p className="pt-3 text-center">
							Copyright&copy;
							{new Date().getFullYear()}&nbsp;Charan Kanumuri|All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
