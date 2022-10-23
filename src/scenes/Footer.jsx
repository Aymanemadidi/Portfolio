import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
	return (
		<footer className="h-64 bg-black pt-10">
			<div className="w-10/12 mx-auto">
				<SocialMediaIcons />
				<div className="md:flex justify-center md:justify-between text-center ">
					<p className="font-monoton font-semibold text-2xl text-white">
						Elmadidi Aymane
					</p>
					<p className="text-md text-white font-montserrat">
						©2022. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
