import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
	const [state, handleSubmit] = useForm("mdorqbgd");
	if (state.succeeded) {
		return (
			<p className="text-xxs md:text-xs-medium w-full col-span-2">
				Thanks for contacting us. One of our team will be in touch!
			</p>
		);
	}
	return (
		<>
			<form className="col-span-2" onSubmit={handleSubmit}>
				<div className="flex space-x-[10px] mb-[10px]">
					<input
						className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 w-full"
						placeholder="First Name"
						name="first_name"
						id="firstname"
					/>
					<ValidationError
						field="firstname"
						prefix="First Name"
						errors={state.errors}
					/>

					<input
						className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 col-start-2 w-full"
						placeholder="Last Name"
						name="last_name"
						id="lastname"
					/>

					<ValidationError
						field="lastname"
						prefix="Last Name"
						errors={state.errors}
					/>
				</div>

				<div className="flex space-x-[10px] mb-[10px]">
					<input
						className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 w-full"
						placeholder="Email"
						name="email"
						id="email"
					/>

					<ValidationError field="email" prefix="Email" errors={state.errors} />

					<input
						className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 col-start-2 w-full"
						placeholder="Phone"
						name="phone"
						id="phone"
					/>

					<ValidationError field="phone" prefix="Phone" errors={state.errors} />
				</div>

				<div className="relative h-[100px] col-span-2">
					<textarea
						className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 w-full h-full"
						placeholder="Message"
						name="message"
						id="message"
					/>

					<ValidationError
						field="message"
						prefix="Message"
						errors={state.errors}
					/>

					<button
						className="h-[35px] flex absolute items-center right-3 bottom-[10px] bg-white p-3 rounded-[5px] z-10 transition duration-300 hover:bg-opacity-50"
						disabled={state.submitting}
					>
						<span className="mr-9">Send</span>
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
								fill="black"
							/>
						</svg>
					</button>
				</div>
			</form>
		</>
	);
}

export default ContactForm;
