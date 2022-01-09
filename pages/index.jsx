import Header from '../components/Header/Header';
import LandingPage from '../components/LandingPage/LandingPage';
import Projects from '../components/Projects/Projects';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Simon Johanssons | Portfolio</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="coding.png" />
			</Head>
			<div className=" w-screen h-screen bg-backgroundColor overflow-x-hidden">
				<Header />
				<LandingPage />
				<Projects />
			</div>
		</>
	);
}
