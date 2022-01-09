import Header from '../components/Header/Header';
import LandingPage from '../components/LandingPage/LandingPage';
import Projects from '../components/Projects/Projects';

export default function Home() {
	return (
		<div className=" w-screen h-screen bg-backgroundColor overflow-x-hidden">
			<Header />
			<LandingPage />
			<Projects />
		</div>
	);
}
