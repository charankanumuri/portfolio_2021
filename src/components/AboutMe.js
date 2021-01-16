import React from 'react';
import myPic from '../default_pic.jpg';
const AboutMe = () => {
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					<div className="photo-wrap mb-5">
						<img className="profile-img" src={myPic} alt="Charan..." />
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading">about me</h1>
					<p>
						I take pleasure in recommending Mr.Venkata Sai Charan Kanumuri, who is known to me for four
						years during his undergraduate major in Computer Science and Engineering. As the Head of the
						department for CSE, I have had regular interactions with him. I feel I am in a position to give
						you a good account of his intellectual capabilities and personality. I have found him to be
						sincere in his studies and perseverant in all jobs assigned. He has impressed me with his
						clarity of thought and good analytical skills and he stands out for his motivation and
						dedication. He is well versed with the rudiments of Computer Science and Engineering. He has not
						only excelled in the class but has greatly impressed me by his willingness to pursue courses and
						undertake projects outside the realm of undergraduate work, a good indicator of his potential as
						a research assistant. He is a highly motivated individual. In my opinion, he possesses all the
						intellectual skills required to succeed in graduate studies. He was also a member of the
						cultural club for the CSE department in which he actively participated in all events held. Also,
						a member of the coding club, where he actively participated in the coding competitions which
						were held regularly. He has a vision and he drives himself towards it with much dedication, I
						have also noticed strong leadership qualities in him, as people love to work with him due to his
						booming energy and optimism.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
