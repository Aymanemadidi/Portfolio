import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Skills from "./scenes/Skills";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";

function App() {
	const [selectedPage, setSelectedPage] = useState("home");
	const [isTopOfPage, setIsTopOfPage] = useState(true);
	const isDesktop = useMediaQuery("(min-width: 1060px)");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) setIsTopOfPage(true);
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="app bg-deep-blue">
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<div className="w-5/6 mx-auto md:h-full">
				{isDesktop && (
					<DotGroup
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				)}
				<Landing setSelectedPage={setSelectedPage} />
			</div>
			{/* <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div> */}
			<LineGradient />
			<div className="w-5/6 mx-auto">
				<Projects />
			</div>
			<LineGradient />
			<div className="w-5/6 mx-auto md:h-full">
				<Skills />
			</div>
			<LineGradient />
			<div className="w-5/6 mx-auto md:h-full">
				<Contact />
			</div>
			<LineGradient />
			<Footer />
		</div>
	);
}

export default App;
