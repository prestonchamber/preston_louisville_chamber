"use client";

import {
	ArrowRightIcon,
	BadgeInfo,
	BadgePlus,
	BadgeQuestionMark,
	ChevronRightIcon,
	Instagram,
	X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GradientCard } from "@/components/marketing/primitives/gradient-card";
import { CustomBadgeIcon } from "@/components/ui/fleur-di-lis-badge";
import { MorphicBackground } from "@/components/ui/MorphicBackground";
import { MorphingText } from "@/components/ui/MorphingText";
import RotatingText from "@/components/ui/RotatingText";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const coming = [
	"Coming Soon", // English
	"Próximamente", // Spanish
	"Bientôt disponible", // French
	"قريباً", // Arabic
	"به زودی", // Persian (Farsi)
];

export function HeroSection() {
	return (
		<main className="relative min-h-screen w-full">
			<MorphicBackground ballColor="#F7EBCD" />
			<section id="hero" className=" scroll-mt-14 ">
				<div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 md:max-w-3xl lg:max-w-7xl lg:px-10">
					<div className="flex flex-col gap-32">
						<div className="flex flex-col items-start gap-6">
							{/* <HeroScreenshot /> */}
							<main className="relative pt-20 pb-20">
								{/* Announcement Pill */}
								{/* <div className="flex flex-col items-center justify-center">
										<Link
											href="#"
											className={cn(
												"relative inline-flex max-w-full items-center gap-3 overflow-hidden rounded-md px-3.5 py-2 text-sm",
												"bg-marketing-card",
												"hover:bg-marketing-card-hover",
												"dark:ring-inset dark:ring-1 dark:ring-white/5",
												"sm:flex-row sm:items-center sm:gap-3 sm:rounded-full sm:px-3 sm:py-0.5",
											)}
										>
											<span className="truncate text-pretty sm:truncate">
												Introducing our latest features
											</span>
											<span className="hidden h-3 w-px bg-marketing-card-hover sm:block" />
											<span className="inline-flex shrink-0 items-center gap-1 font-semibold">
												Learn more
												<ChevronRightIcon className="size-3" />
											</span>
										</Link>
									</div> */}

								<div className="flex relative gap-2 px-6 md:items-center w-full flex-col justify-center">
									<div className="md:flex gap-6 items-center">
										<p className="text-xs text-muted-foreground md:text-sm text-start md:text-right leading-5 max-w-[220px] md:max-w-[180px]">
											Fostering an inclusive community where diverse members
											thrive and succeed together.
										</p>
										<h1 className="text-6xl md:text-7xl xl:text-[10rem] font-light leading-none tracking-wider">
											PRESTON
										</h1>
									</div>

									<div className="md:flex gap-6 items-center">
										<h1 className="text-6xl md:text-7xl xl:text-[10rem] flex font-light leading-none tracking-wider">
											<span>CH</span>
											{/* <BadgeInfo
												type="solid"
												className="lg:size-40 size-14 md:size-18 text-primary"
											/> */}
											<CustomBadgeIcon
												color="#E2AC25"
												type="solid"
												className="lg:size-40 size-14 md:size-18 text-primary"
											/>
											<span>MBER</span>
										</h1>
										<p className="text-xs text-muted-foreground md:text-sm pt-8 leading-5 max-w-[250px] md:max-w-[180px]">
											Connecting leaders to cultivate a supportive, and thriving
											business network.
										</p>
									</div>

									<div className="md:flex gap-6 items-center">
										{/* <h1 className="text-6xl md:text-7xl xl:text-[10rem] md:flex justify-center items-center font-light leading-none tracking-wider"> */}
										<h1 className="text-6xl md:text-7xl xl:text-[10rem] flex flex-wrap justify-center items-center font-light leading-none tracking-wider text-center">
											{/* <span>COMING</span> */}

											{/* Fixed-size wrapper container */}
											<div className="w-[200px] md:w-[800px] inline-flex items-center justify-center shrink-0 overflow-hidden">
												<RotatingText
													texts={[
														"Coming Soon", // English
														"Próximamente", // Spanish
														"Bientôt disponible", // French
														"قريباً", // Arabic
														"به زودی", // Persian (Farsi)
													]}
													mainClassName="w-full text-2xl sm:text-3xl md:text-4xl xl:text-7xl px-3 py-1 bg-indigo-300 text-black font-medium overflow-hidden justify-center items-center rounded-lg whitespace-nowrap"
													staggerFrom="last"
													initial={{ y: "100%" }}
													animate={{ y: 0 }}
													exit={{ y: "-120%" }}
													staggerDuration={0.06}
													rotationInterval={4000}
													splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
													transition={{
														duration: 0.8,
														ease: [0.25, 1, 0.5, 1],
													}}
												/>
											</div>

											<div className="inline-flex items-center justify-center shrink-0">
												<div className="hidden lg:block">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="160"
														height="160"
														viewBox="0 0 24 24"
														fill="#81C36F"
													>
														<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
													</svg>
												</div>
												<div className="block lg:hidden">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="70"
														height="70"
														viewBox="0 0 24 24"
														fill="#81C36F"
													>
														<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
													</svg>
												</div>
											</div>

											{/* <span>SOON</span> */}
										</h1>
									</div>
								</div>
								<div className="mx-auto max-w-7xl w-full px-6 gap-3">
									<div className="md:flex md:mx-8 grid md:justify-end items-center gap-3">
										<Separator className="w-full my-6 mx-auto max-w-3xl" />
										<div className="text-xs whitespace-nowrap md:text-sm">
											CITY OF LYNNVIEW, LOUISVILLE, KY 40213
										</div>
										<div className="flex w-full items-end gap-3">
											<span className="text-2xl md:text-4xl font-thin">
												SUPPORT
											</span>
											<span className="text-3xl md:text-5xl font-bold italic text-[#E2AC25]">
												local
											</span>
										</div>
									</div>
								</div>

								{/* CTA Buttons */}
								{/* <div className="flex items-center gap-4">
									<Link
										href="/auth/sign-up"
										className={cn(
											"inline-flex shrink-0 items-center justify-center gap-1 rounded-full px-4 py-2 text-sm font-medium",
											"bg-marketing-accent text-marketing-accent-fg hover:bg-marketing-accent-hover",
										)}
									>
										Get Started
									</Link>
									<Link
										href="/contact"
										className={cn(
											"group inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
											"text-marketing-fg hover:bg-marketing-card-hover",
										)}
									>
										Book a Demo
										<ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
									</Link>
								</div> */}

								{/*  */}

								<div className="md:px-20 px-6 gap-6 items-end md:flex pt-12">
									{/* <div className="w-84 h-48 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
											<img
												src="https://cdn.21st.dev/assets/localized/74e550b9690bacf66ebd69b3516ef9c8734a44a247d4b6b6de2b86919aa367b3.jpg"
												alt="Portfolio"
												className="w-full h-full object-cover"
											/>
										</div> */}
									<p className="text-xs text-muted-foreground md:text-sm pt-8 leading-5">
										Advancing the local economic to empower all local business
										owners.
									</p>
								</div>

								<div className="absolute bottom-8 right-8 md:right-12 flex gap-6">
									<Instagram />
									{/* <X /> */}
								</div>

								<div className="fixed right-0 top-1/2 h-36 items-center flex transform -translate-y-1/2  ">
									<div className="bg-foreground text-background py-6 px-3 text-sm font-bold ">
										<span className="rotate-180 [writing-mode:vertical-rl]">
											Coming Soon
										</span>
									</div>
								</div>
							</main>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
