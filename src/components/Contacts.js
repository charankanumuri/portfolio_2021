import React from 'react';

const Contacts = () => {
	return (
		<div className="contacts">
			<div className="text-center">
				<h1>Contact Me</h1>
				<p>Please fill the form, to contact me</p>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-xs-12">
						<div className="text-center">
							<input type="text" className="form-control" placeholder="Enter Your Name" name="NAME" />
							<div className="line" />
						</div>
						<div className="text-center">
							<input
								type="text"
								className="form-control"
								placeholder="Enter Your Phone Number"
								name="Phone Number"
							/>
							<div className="line" />
						</div>
						<div className="text-center">
							<input
								type="email"
								className="form-control"
								placeholder="Enter Your Mail ID"
								name="Email ID"
							/>
							<div className="line" />
						</div>
						<div className="text-center">
							<input type="text" className="form-control" placeholder="Enter Subject" name="SUBJECT" />
							<div className="line" />
						</div>
					</div>
					<div className="col-md-6 col-xs-12">
						<div className="text-center">
							<textarea
								type="text"
								className="form-control"
								placeholder="Enter Description"
								name="description"
							/>
							<div className="line" />
						</div>
						<button type="submit" className="btn-main-offer contact-btn">
							Contact Me
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
