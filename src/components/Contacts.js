import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contacts = () => {
	const [ successMessage, setSuccessMessage ] = useState('');
	const serviceId = 'service_ID';
	const templateId = 'template_ID';
	const userId = 'user_TqXFxprHxRnBMLYnxLlRa';

	const { register, handleSubmit, errors } = useForm();

	const sendEmail = (serviceId, templateId, variables, userId) => {
		emailjs
			.send(serviceId, templateId, variables, userId)
			.then(() => {
				setSuccessMessage('Form sent successfully!');
			})
			.catch((err) => console.error(`Something went wrong ${err}`));
	};

	const onSubmit = (data, r) => {
		sendEmail(
			serviceId,
			templateId,
			{
				name: data.name,
				phone_number: data.phone_number,
				email_id: data.email_id,
				subject: data.subject,
				description: data.description
			},
			userId
		);
		r.target.reset();
	};
	return (
		<div className="contacts">
			<div className="text-center">
				<h1>Contact Me</h1>
				<p>Please fill the form, to contact me</p>
				<span className="success-message">{successMessage}</span>
			</div>
			<div className="container">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="row">
						<div className="col-md-6 col-xs-12">
							<div className="text-center">
								<input
									type="text"
									className="form-control"
									placeholder="Enter Your Name"
									name="name"
									ref={register({
										required: 'Please enter your Name',
										maxLength: {
											value: 20,
											message: 'Please enter a name with fewer than 20 characters.'
										}
									})}
								/>
								<div className="line" />
							</div>
							<span className="error-message">{errors.name && errors.name.message}</span>
							<div className="text-center">
								<input
									type="text"
									className="form-control"
									placeholder="Enter Your Phone Number"
									name="phone_number"
									ref={register({
										required: 'Please add your Phone'
									})}
								/>
								<div className="line" />
							</div>
							<span className="error-message">{errors.phone_number && errors.phone_number.message}</span>
							<div className="text-center">
								<input
									type="email"
									className="form-control"
									placeholder="Enter Your Mail ID"
									name="email_id"
									ref={register({
										required: 'Please provide you email',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'invalid Email'
										}
									})}
								/>
								<div className="line" />
							</div>
							<span className="error-message">{errors.email_id && errors.email_id.message}</span>
							<div className="text-center">
								<input
									type="text"
									className="form-control"
									placeholder="Enter Subject"
									name="subject"
									ref={register({
										required: 'OOPS, You forgot to add the subject'
									})}
								/>
								<div className="line" />
							</div>
							<span className="error-message">{errors.subject && errors.subject.message}</span>
						</div>
						<div className="col-md-6 col-xs-12">
							<div className="text-center">
								<textarea
									type="text"
									className="form-control"
									placeholder="Enter Description"
									name="description"
									ref={register({
										required: 'Please describe something'
									})}
								/>
								<div className="line" />
							</div>
							<span className="error-message">{errors.description && errors.description.message}</span>
							<button type="submit" className="btn-main-offer contact-btn">
								Contact Me
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contacts;
