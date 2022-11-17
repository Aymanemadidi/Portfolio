import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
// import Travel from "../assets/Travel.png";

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const projectVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description }) => {
	const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-violet-800 z-30 text-white flex flex-col justify-center items-center text-center p-16`;
	// const projectTitle = title.split(" ").join("-").toLowerCase();

	return (
		<motion.div variants={projectVariant} className="relative">
			<div className={overlayStyles}>
				<p className="text-2xl font-monoton">{title}</p>
				<p className="mt-7 font-montserrat">{description}</p>
			</div>
			<img src={require(`../assets/${title}.png`)} alt="" />
		</motion.div>
	);
};

const Projects = () => {
	return (
		<section id="projects" className="pt-[100px] pb-[5rem]">
			{/* HEADINGS */}
			<motion.div
				className="md:w-2/5 mx-auto text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div>
					<p className="font-monoton font-semibold text-4xl">
						<span className="text-violet-600">PROJECTS</span>
					</p>
					<div className="flex justify-center mt-5">
						<LineGradient width="w-2/3" />
					</div>
				</div>
				<p className="mt-10 mb-10 text-lg font-montserrat">
					Here are some of the projects I realized from scratch using the
					Javascript ecosystem
				</p>
			</motion.div>

			{/* PROJECTS */}
			<div className="flex justify-center flex-row">
				<motion.div
					className="sm:flex sm:flex-col sm:gap-4 "
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{/* ROW 1 */}
					{/* <div
						className="flex justify-center text-center items-center p-10 bg-gray-900
              max-w-[400px] max-h-[400px] text-2xl font-monoton font-semibold"
					>
						BEAUTIFUL USER INTERFACES
					</div> */}
					<Project
						title="realtime game"
						description="A realtime X O game using the MERN stack + Socket.io"
					/>
					<div className="flex justify-center gap-3 mt-3 mb-5">
						<a
							href="https://www.loom.com/share/eff6492d9e8d4125ab2e1517f6e2723e"
							target="_blank"
							rel="noreferrer"
						>
							<button className="bg-violet-800 pt-2 pb-2 pl-5 pr-5 rounded-md font-monoton">
								Demo
							</button>
						</a>
						<a
							href="https://github.com/Aymanemadidi/gaming-socket"
							target="_blank"
							rel="noreferrer"
						>
							<button className="bg-violet-800 pt-2 pb-2 pl-5 pr-5 rounded-md font-monoton">
								Repo
							</button>
						</a>
					</div>

					<Project
						title="Login/Logout demo"
						description="A demo showing the flow of a Login/Logout process using the MERN stack + tailwindcss"
					/>
					<div className="flex justify-center gap-3 mt-3 mb-5">
						<a
							href="https://www.loom.com/share/1f4fda5a89f84130971deb638d6e8b00"
							target="_blank"
							rel="noreferrer"
						>
							<button className="bg-violet-800 pt-2 pb-2 pl-5 pr-5 rounded-md font-monoton">
								Demo
							</button>
						</a>
						<a
							href="https://github.com/Aymanemadidi/Login-Logout-flow"
							target="_blank"
							rel="noreferrer"
						>
							<button className="bg-violet-800 pt-2 pb-2 pl-5 pr-5 rounded-md font-monoton">
								Repo
							</button>
						</a>
					</div>

					<Project
						title="memory game"
						description="A memory game inspired by 1337's online tests"
					/>
					<div className="flex justify-center gap-3 mt-3 mb-5">
						<a
							href="https://stately-donut-11b7a4.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							<button className="bg-violet-800 pt-2 pb-2 pl-5 pr-5 rounded-md font-monoton">
								Demo
							</button>
						</a>
						<a
							href="https://github.com/Aymanemadidi/memory-game"
							target="_blank"
							rel="noreferrer"
						>
							<button className="bg-violet-800 pt-2 pb-2 pl-5 pr-5 rounded-md font-monoton">
								Repo
							</button>
						</a>
					</div>

					<Project
						title="travel agency website"
						description="A simple travel agency website using react and SASS"
					/>
					<div className="flex justify-center gap-3 mt-3 mb-5">
						<a
							href="https://stunning-frangipane-72d79c.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							<button className="bg-violet-800 pt-2 pb-2 pl-5 pr-5 rounded-md font-monoton">
								Demo
							</button>
						</a>
						<a
							href="https://github.com/Aymanemadidi/react-landing-page"
							target="_blank"
							rel="noreferrer"
						>
							<button className="bg-violet-800 pt-2 pb-2 pl-5 pr-5 rounded-md font-monoton">
								Repo
							</button>
						</a>
					</div>

					{/* ROW 2 */}
					<Project
						title="image generator"
						description="An image generator thats lets you customize the image and then download it"
					/>
					<div className="flex justify-center gap-3 mt-3 mb-5">
						<a
							href="https://www.loom.com/share/eff6492d9e8d4125ab2e1517f6e2723e"
							target="_blank"
							rel="noreferrer"
						>
							<button className="bg-violet-800 pt-2 pb-2 pl-5 pr-5 rounded-md font-monoton">
								Demo
							</button>
						</a>
						<a
							href="https://github.com/Aymanemadidi/gaming-socket"
							target="_blank"
							rel="noreferrer"
						>
							<button className="bg-violet-800 pt-2 pb-2 pl-5 pr-5 rounded-md font-monoton">
								Repo
							</button>
						</a>
					</div>

					<Project
						title="NBA Stats"
						description="A website that gives all NBA statistics by date"
					/>
					<div className="flex justify-center gap-3 mt-3 mb-5">
						<a
							href="https://effortless-gecko-eaed49.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							<button className="bg-violet-800 pt-2 pb-2 pl-5 pr-5 rounded-md font-monoton">
								Demo
							</button>
						</a>
						<a
							href="https://github.com/Aymanemadidi/NBA-react"
							target="_blank"
							rel="noreferrer"
						>
							<button className="bg-violet-800 pt-2 pb-2 pl-5 pr-5 rounded-md font-monoton">
								Repo
							</button>
						</a>
					</div>

					{/* <Project title="Project 5" /> */}

					{/* ROW 3 */}
					{/* <Project title="Project 6" />
					<Project title="Project 7" /> */}
					{/* <div
						className="flex justify-center text-center items-center p-10 bg-gray-900
              max-w-[400px] max-h-[400px] text-2xl font-monoton font-semibold"
					>
						SMOOTH USER EXPERIENCE
					</div> */}
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
