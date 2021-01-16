import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Box,
	Card,
	CardContent,
	Grid,
	CardActionArea,
	CardActions,
	CardMedia,
	Button,
	Typography
} from '@material-ui/core';
import project1 from '../images/react.png';
import project2 from '../images/react_covid19_tracker.jpg';
import project3 from '../images/node_express_mongo.png';
import project4 from '../images/Spring-Cloud-Config-Server.png';
import project5 from '../images/e-commerce.png';
import project6 from '../images/react_charts.jpg';
import project7 from '../images/react_amplify.jpg';
import project8 from '../images/zoom.jpg';
import project9 from '../images/instagram.jpg';

const useStyles = makeStyles({
	mainContainer: {
		background: '#233',
		height: '100%'
	},
	cardContainer: {
		maxWidth: 300,
		margin: '5rem auto'
	}
});

const Portfolio = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Box component="div" className={classes.mainContainer}>
				<Grid container justify="center" alignItems="baseline">
					{/* Project 1 */}
					<Grid item xs={12} sm={8} md={4}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia component="img" alt="project1" height="140" image={project1} />

								<CardContent>
									<Typography gutterBottom variant="h5">
										project 1
									</Typography>
									<Typography variant="body2" component="p" color="textSecondary">
										Spring boot + React Integration
									</Typography>
								</CardContent>
							</CardActionArea>
							{/* <CardActions>
								<Button color="primary" size="small">
									Share
								</Button>
								<Button color="primary" size="small">
									Live Demo
								</Button>
							</CardActions> */}
						</Card>
					</Grid>

					{/* Project 3 */}
					<Grid item xs={12} sm={8} md={4}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia component="img" alt="project3" height="140" image={project3} />

								<CardContent>
									<Typography gutterBottom variant="h5">
										project 2
									</Typography>
									<Typography variant="body2" component="p" color="textSecondary">
										Node, Express and Mongo Project
									</Typography>
								</CardContent>
							</CardActionArea>
							{/* <CardActions>
								<Button color="primary" size="small">
									Share
								</Button>
								<Button color="primary" size="small">
									Live Demo
								</Button>
							</CardActions> */}
						</Card>
					</Grid>
					{/* Project 4 */}
					<Grid item xs={12} sm={8} md={4}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia component="img" alt="project4" height="140" image={project4} />

								<CardContent>
									<Typography gutterBottom variant="h5">
										project 3
									</Typography>
									<Typography variant="body2" component="p" color="textSecondary">
										Spring Cloud Config Server Demo
									</Typography>
								</CardContent>
							</CardActionArea>
							{/* <CardActions>
								<Button color="primary" size="small">
									Share
								</Button>
								<Button color="primary" size="small">
									Live Demo
								</Button>
							</CardActions> */}
						</Card>
					</Grid>

					{/* Project 6 */}
					<Grid item xs={12} sm={8} md={4}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia component="img" alt="project6" height="140" image={project6} />

								<CardContent>
									<Typography gutterBottom variant="h5">
										project 4
									</Typography>
									<Typography variant="body2" component="p" color="textSecondary">
										React Js + Chart.js integration
									</Typography>
								</CardContent>
							</CardActionArea>
							{/* <CardActions>
								<Button color="primary" size="small">
									Share
								</Button>
								<Button color="primary" size="small">
									Live Demo
								</Button>
							</CardActions> */}
						</Card>
					</Grid>
					{/* Project 7 */}
					<Grid item xs={12} sm={8} md={4}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia component="img" alt="project7" height="140" image={project7} />

								<CardContent>
									<Typography gutterBottom variant="h5">
										project 5
									</Typography>
									<Typography variant="body2" component="p" color="textSecondary">
										React Js and Amplify Console App
									</Typography>
								</CardContent>
							</CardActionArea>
							{/* <CardActions>
								<Button color="primary" size="small">
									Share
								</Button>
								<Button color="primary" size="small">
									Live Demo
								</Button>
							</CardActions> */}
						</Card>
					</Grid>
					{/* Project 8 */}
					<Grid item xs={12} sm={8} md={4}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia component="img" alt="project8" height="140" image={project8} />

								<CardContent>
									<Typography gutterBottom variant="h5">
										project 6
									</Typography>
									<Typography variant="body2" component="p" color="textSecondary">
										Zoom Clone using Javascript
									</Typography>
								</CardContent>
							</CardActionArea>
							{/* <CardActions>
								<Button color="primary" size="small">
									Share
								</Button>
								<Button color="primary" size="small">
									Live Demo
								</Button>
							</CardActions> */}
						</Card>
					</Grid>
					{/* Project 2 */}
					<Grid item xs={12} sm={8} md={4}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia component="img" alt="project2" height="140" image={project2} />

								<CardContent>
									<Typography gutterBottom variant="h5">
										project 7
									</Typography>
									<Typography variant="body2" component="p" color="textSecondary">
										React and Material-ui based Covid-19 Tracker Apllication
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								{/*<Button color="primary" size="small">
									Share
								</Button> */}
								<Button color="primary" size="small">
									<a href="https://jolly-kilby-fccf54.netlify.app/">Live Demo</a>
								</Button>
							</CardActions>
						</Card>
					</Grid>
					{/* Project 9 */}
					<Grid item xs={12} sm={8} md={4}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia component="img" alt="project9" height="140" image={project9} />

								<CardContent>
									<Typography gutterBottom variant="h5">
										project 8
									</Typography>
									<Typography variant="body2" component="p" color="textSecondary">
										MERN Stack Instagram Clone Project
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								{/*<Button color="primary" size="small">
									Share
								</Button>*/}
								<Button color="primary" size="small">
									<a href="https://insta-clone-96.herokuapp.com/signin">Live Demo</a>
								</Button>
							</CardActions>
						</Card>
					</Grid>

					{/* Project 5 */}
					<Grid item xs={12} sm={8} md={4}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia component="img" alt="project5" height="140" image={project5} />

								<CardContent>
									<Typography gutterBottom variant="h5">
										project 9
									</Typography>
									<Typography variant="body2" component="p" color="textSecondary">
										MERN Stack eCommerce Application deployed on Heroku.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								{/* <Button color="primary" size="small">
									Share
								</Button> */}
								<Button color="primary" size="small">
									<a href="https://proshop96.herokuapp.com/">Live Demo</a>
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);
};

export default Portfolio;
