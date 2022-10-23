import { Fragment } from "react";
import LineGradient from "../components/LineGradient";
import { motion, useSpring } from "framer-motion";

import "../Skills.css";

import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import node from "../assets/skills/node.png";
import nextJs from "../assets/skills/next.png";
import tailwind from "../assets/skills/tailwind.png";
import typescript from "../assets/skills/typescript.png";
import docker from "../assets/skills/docker.png";
import socket from "../assets/skills/socket.png";
import c from "../assets/skills/c.png";

const transition = {
	duration: 0.3,
	type: useSpring,
};

const Skills = () => {
	return (
		<section id="skills" className=" pt-[120px] font-montserrat">
			<motion.section
				whileInView={{ transform: "translateY(0%)", opacity: [0, 1] }}
				transition={transition}
				className="skills"
			>
				<p className="text-center font-monoton font-semibold text-4xl text-violet-600">
					Skills
				</p>
				<div className="flex justify-center">
					<LineGradient width="w-1/4" />
				</div>

				<div className="skills__container">
					<div className="skills__list">
						<div className="skills__item app__flex">
							<div className="app__flex">
								<img src={html} alt="html" />
							</div>
							<p className="skill-name">HTML</p>
						</div>
						<div className="skills__item app__flex">
							<div className="">
								<img src={css} alt="css" />
							</div>
							<p className="skill-name">CSS</p>
						</div>
						<div className="skills__item app__flex">
							<div className="app__flex">
								<img src={javascript} alt="javascript" />
							</div>
							<p className="skill-name">Javascript</p>
						</div>
						<div className="skills__item app__flex">
							<div className="app__flex">
								<img src={react} alt="react" />
							</div>
							<p className="skill-name">React</p>
						</div>
						<div className="skills__item app__flex">
							<div className="app__flex">
								<img src={node} alt="nodeJs" />
							</div>
							<p className="skill-name">NodeJs</p>
						</div>
						<div className="skills__item app__flex">
							<div className="app__flex">
								<img src={typescript} alt="typescript" />
							</div>
							<p className="skill-name">Typescript</p>
						</div>
						<div className="skills__item app__flex">
							<div className="app__flex">
								<img src={redux} alt="redux" />
							</div>
							<p className="skill-name">redux</p>
						</div>
						<div className="skills__item app__flex">
							<div className="app__flex">
								<img src={nextJs} alt="nextJs" />
							</div>
							<p className="skill-name">NextJs</p>
						</div>
						<div className="skills__item app__flex">
							<div className="app__flex">
								<img src={tailwind} alt="tailwind" />
							</div>
							<p className="skill-name">Tailwind</p>
						</div>
						<div className="skills__item app__flex">
							<div className="app__flex">
								<img src={docker} alt="docker" />
							</div>
							<p className="skill-name">Docker</p>
						</div>
						<div className="skills__item app__flex">
							<div className="app__flex">
								<img src={socket} alt="socket" />
							</div>
							<p className="skill-name">Socket.io</p>
						</div>
						<div className="skills__item app__flex">
							<div className="app__flex">
								<img src={c} alt="c" />
							</div>
							<p className="skill-name">C Language</p>
						</div>
						{/* <div className="skills__item app__flex">
							<div className="app__flex">
								<img src={python} alt="c" />
							</div>
							<p className="skill-name">Python</p>
						</div> */}
					</div>

					{/* <div className="skills-certificates">
						{certificates.map((certificate) => {
							return (
								<div key={certificate.id} className="skills-cer">
									<a
										className="skills-cer-icon"
										target="_blank"
										rel="noreferrer"
										title="see the certificate"
										href={`${certificate.src}`}
									>
										<TbCertificate fontSize={40} />{" "}
									</a>
									<div>
										{certificate.certificate.map((item) => {
											return (
												<Fragment key={item.id}>
													<div
														key={item.id}
														className="skills-cer-text"
														data-tip
														data-for={item.name}
													>
														<h4>{item.name}</h4>
														<p>{item.company}</p>
													</div>
													<ReactTooltip
														id={item.name}
														effect="solid"
														arrowColor="#fff"
														className="skills-tooltip"
													>
														{item.desc}
													</ReactTooltip>
												</Fragment>
											);
										})}
									</div>
								</div>
							);
						})}
					</div> */}
				</div>
			</motion.section>
		</section>
	);
};

export default Skills;
