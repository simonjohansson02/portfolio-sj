import Header from '../components/Header/Header';
import LandingPage from '../components/LandingPage/LandingPage';
// import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
//BsLinkedin
export default function Home() {
	return (
		<div className=" w-screen h-screen bg-backgroundColor overflow-x-hidden">
			<Header />
			<LandingPage />
			{/* <AboutMe /> */}
			<Projects />
		</div>
	);
}
