import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import image from "../assets/first-image.png";

const Landing = ({ setSelectedPage }) => {
	const isAboveLarge = useMediaQuery("(min-width: 1060px)");
	return (
		<>
			{/* <img src={image}></img> */}

			<section
				id="home"
				className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
			>
				{/* IMAGE SECTION */}
				<div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
					{isAboveLarge ? (
						<div
							className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 
              before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
						>
							<img
								src={image}
								alt="aymane"
								className="hover:filter hover:saturate-200 transition duration-500 z-10 w-[450px] max-w-[400px] md:max-w-[600px] rounded-full"
							></img>
							{/* <img
								src={image}
								alt="profile"
								className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
							/> */}
						</div>
					) : (
						<img
							src={image}
							alt="aymane"
							className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full"
						></img>
						// <img
						// 	alt="profile"
						// 	className="z-10 w-full max-w-[400px] md:max-w-[600px]"
						// 	src="assets/aymane-image.png"
						// />
					)}
				</div>

				{/* MAIN TEXT */}
				<div className="z-30 basis-2/5 mt-12 md:mt-32">
					{/* HEADINGS */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<p className="text-white text-5xl font-monoton xs:font-semibold z-10 text-center md:text-start">
							Aymane {""}
							<span
								className="xs:relative xs:text-white xs:font-semibold z-10 
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
							>
								Elmadidi
							</span>
						</p>

						<p className="mt-10 mb-7 text-lg text-center md:text-start font-montserrat font-bold">
							I'm full stack developer specialized in the MERN stack, I am also
							a former 1337 student where I developed strong problem solving
							skills.
						</p>
					</motion.div>

					{/* CALL TO ACTIONS */}
					<motion.div
						className="flex mt-5 justify-center md:justify-start"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<AnchorLink
							className="bg-gradient-violetblue text-black rounded-sm py-3 px-7 font-semibold font-monoton
              hover:bg-blue hover:text-white transition duration-500"
							onClick={() => setSelectedPage("contact")}
							href="#contact"
						>
							Contact Me
						</AnchorLink>
						<AnchorLink
							className="rounded-r-sm bg-gradient-violetblue py-0.5 pr-0.5"
							onClick={() => setSelectedPage("contact")}
							href="#contact"
						>
							<div className="bg-black hover:text-violet-500 transition duration-500 w-full h-full flex items-center justify-center px-10 font-monoton">
								Let's talk.
							</div>
						</AnchorLink>
					</motion.div>

					<motion.div
						className="flex mt-5 justify-center md:justify-start"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<SocialMediaIcons />
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default Landing;
