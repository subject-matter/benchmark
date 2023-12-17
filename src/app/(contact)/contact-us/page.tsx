"use client";

import SlideMenu from "@/app/(site)/components/SlideMenu";
import Footer from "@/app/(site)/components/footer";
import Header from "@/app/(site)/components/header";
import SocialIcons from "@/app/(site)/components/social-icons";
import Link from "next/link";
import React from "react";
import ContactImage from "../../(site)/assets/images/Projects-Marshall-81500-x-1000-High-Res.jpg";
import Image from "next/image";
import LenisScroll from "@/app/(site)/components/lenis-provider";
import ContactForm from "@/app/(site)/components/contact-form";

function Contact() {
	return (
		<>
			<LenisScroll>
				<section className="md:h-screen bg-white">
					<div>
						<div className="grid md:grid-cols-2">
							<div className="flex flex-col justify-between p-[10px] md:p-5 h-screen">
								<div className="flex justify-between items-start">
									<h1 className="mt-[68px] md:mt-0 text-sm-xl md:text-xl">
										Contact
									</h1>
									<div className="absolute top-5 left-[10px] md:relative md:flex space-x-5 ">
										<SocialIcons />
									</div>
								</div>
								
								<ContactForm />
								<div className="grid grid-cols-6 md:grid-cols-2 text-xxs md:text-xs-medium">
									<span className="col-span-4 col-start-3 md:col-start-1">
										<p>
											<span className="font-medium">
												Office/Milns Park Showhome
											</span>
											<br />
											Mon–Fri: 9am–5pm
											<br />
											<br />
										</p>
									</span>

									<span className="mb-4 md:mb-0 col-span-6 md:col-span-1 md:col-start-1">
										<Link
											href="tel:033438260"
											className="hover:opacity-50 transition duration-250 w-fit"
										>
											+64 3 343 8260
										</Link>
										<br />
										<Link
											href="mailto:info@benchmarkhomes.co.nz"
											className="hover:opacity-50 transition duration-250 w-fit"
										>
											info@benchmarkhomes.co.nz
										</Link>
										<br />
									</span>
									<span className="col-span-4 col-start-3 md:col-span-1 md:col-start-2">
										<p>
											{" "}
											12 Whitburn Ave, Milns Park,
											<br /> Halswell, Christchurch, New Zealand
											<br />
										</p>
									</span>
								</div>
							</div>

							<div className="max-h-screen">
								<Image
									className="w-full h-full object-cover"
									src={ContactImage}
									alt=""
									width={1000}
									height={900}
								/>
							</div>
						</div>
					</div>
				</section>
			</LenisScroll>
		</>
	);
}
export default Contact;
