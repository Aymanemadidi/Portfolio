import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		console.log("~ e", e);
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section id="contact" className="contact py-48">
			{/* HEADINGS */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: 50 },
					visible: { opacity: 1, x: 0 },
				}}
				className="flex justify-end w-full"
			>
				<div>
					<p className="font-monoton font-semibold text-4xl">
						<span className="text-white">CONTACT ME</span>
					</p>
					<div className="flex md:justify-end my-5">
						<LineGradient width="w-full" />
					</div>
				</div>
			</motion.div>

			{/* FORM & IMAGE */}
			<div className="md:flex md:justify-between gap-16 mt-5">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
					className="basis-1/2 flex justify-center"
				>
					<img src="../assets/contact-image.jpeg" alt="contact" />
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
					className="basis-1/2 mt-10 md:mt-0"
				>
					<form
						target="_blank"
						onSubmit={onSubmit}
						action="https://formsubmit.co/aymanelmadidi@gmail.com"
						method="POST"
					>
						<input
							className="w-full bg-white text-black font-semibold placeholder-opaque-black p-3"
							type="text"
							placeholder="NAME"
							{...register("name", {
								required: true,
								maxLength: 100,
							})}
						/>
						{errors.name && (
							<p className="text-violet-800 mt-1">
								{errors.name.type === "required" && "This field is required."}
								{errors.name.type === "maxLength" && "Max length is 100 char."}
							</p>
						)}

						<input
							className="w-full text-black bg-wihte font-semibold placeholder-opaque-black p-3 mt-5 font-montserrat"
							type="text"
							placeholder="EMAIL"
							{...register("email", {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
						/>
						{errors.email && (
							<p className="text-violet-800 mt-1">
								{errors.email.type === "required" && "This field is required."}
								{errors.email.type === "pattern" && "Invalid email address."}
							</p>
						)}

						<textarea
							className="w-full text-black bg-white font-semibold font-montserrat placeholder-opaque-black p-3 mt-5"
							name="message"
							placeholder="MESSAGE"
							rows="4"
							cols="50"
							{...register("message", {
								required: true,
								maxLength: 2000,
							})}
						/>
						{errors.message && (
							<p className="text-violet-800 mt-1">
								{errors.message.type === "required" &&
									"This field is required."}
								{errors.message.type === "maxLength" &&
									"Max length is 2000 char."}
							</p>
						)}

						<button
							className="p-5 bg-white font-semibold font-montserrat text-deep-blue mt-5 hover:bg-violet-800 hover:text-white transition duration-500"
							type="submit"
						>
							SEND ME A MESSAGE
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
