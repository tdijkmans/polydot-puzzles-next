"use client";
import { Fragment, useState } from "react";
import Buttons from "../Buttons/Buttons";
import DrawingStatus from "../DrawingStatus/DrawingStatus";
import Letters from "../Letters/Letters";
import styles from "./Polywolf.module.css";
import { getClassName } from "./getClassName";
import { steps } from "./polyWolfData";

const Polywolf = () => {
	const [curStep, setCurStep] = useState(-1);

	const handleStep = (action: "draw line" | "color planes" | "go again") => {
		const step = curStep + 1;
		if (action === "go again") {
			setCurStep(-1);
		}
		if (action === "draw line" && step < steps.length) {
			setCurStep(step);
		} else if (action === "color planes" && step === steps.length) {
			setCurStep(steps.length);
		}
	};

	return (
		<div className={styles.polywolf}>
			<h2 className={styles.title}>Polydot | Hunt the Haunted</h2>
			<Letters steps={steps} curStep={curStep} />

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={500}
				height={549.865}
				viewBox="-10 -10 152.292 165.485"
				className={styles.svg}
			>
				<title>{"polywolf"}</title>

				<g transform="matrix(.21098 0 0 .21098 1.682 0)">
					<circle
						cx={410.958}
						cy={544.336}
						className={styles.fillCircle}
						r={1.512}
						id="fill_circle_1"
					/>
					<circle
						cx={262.89}
						cy={525.89}
						className={styles.fillCircle}
						r={1.512}
						id="fill_circle_2"
					/>
					<g transform="matrix(1.99262 0 0 1.99262 -501.384 -701.339)">
						{steps.map(({ dot, step }, index) => {
							const { cx, cy, label } = dot;

							const offsetStep = curStep + 1;
							const isNextStep = offsetStep + 1 === index;
							const circleClassName = getClassName(offsetStep, index, "circle");
							const textClassName = getClassName(offsetStep, index, "text");

							return (
								<Fragment key={`circle_${label}_${step}`}>
									<circle
										cx={cx}
										cy={cy}
										r={0.7}
										id={`circle_${label}`}
										className={circleClassName}
									/>

									{isNextStep && (
										<circle
											cx={cx}
											cy={cy}
											r={1.5}
											id={`circle_${label}_big`}
											className={styles.circleBig}
										/>
									)}
									<text
										x={cx}
										y={cy}
										id={`text_${label}`}
										className={textClassName}
									>
										{label}
									</text>
								</Fragment>
							);
						})}
					</g>
					<path
						id="resolved_polywolf"
						d="m294.71 630.917-71.507-33.615M223.203 597.302l-109.888 6.639M113.315 603.94l-62.742-29.277M50.573 574.663 8.128 513.11M8.128 513.11 1.05 467.829M1.05 467.829l162.668-93.32M163.718 374.51l14.78-13.903M178.498 360.607l-29.213-53.16M149.285 307.447l14.433 67.063M163.718 374.51l86.725 7.76M250.443 382.27l91.55 11.339M341.994 393.609l19.008-42.023M361.002 351.586l-65.035-21.51M295.967 330.076l-45.524 52.194M250.443 382.27l18.008-84.712M268.45 297.558l56.537-20.511M324.987 277.047l45.523-66.537M370.51 210.51l1.267-45.49M371.777 165.02l-106.123 30.424M265.654 195.444l-66.681 59.25M198.973 254.694l-49.688 52.753M149.285 307.447l29.119-19.898M178.404 287.549 227.612 311M227.612 311l14.713-76.933M242.325 234.067l23.326-38.621M198.973 254.694l-20.696-61.727M178.277 192.967l15.916-175.102M194.193 17.865 371.777 165.02M371.777 165.02 424.134 3.714M424.134 3.713l186.068 295.024M610.202 298.737l-198.615 387.12M411.587 685.857l-56.03-26.214"
					/>
					<g id="lines_group">
						{steps.map(({ line }, index) => (
							<line
								key={`line_${line.x1}_${line.y1}_${index}`}
								x1={line.x1}
								y1={line.y1}
								x2={line.x2}
								y2={line.y2}
								id={line.lineId}
								className={getClassName(curStep, index, "line")}
							/>
						))}
					</g>

					<path
						d="m349.856 562.485 45.524-52.194 66.448 20.687-20.421 42.846zM249.615 488.535l28.296 52.287-14.78 13.903-13.516-66.19"
						id="filled_plane"
						className={`
							${styles.planes}
							${curStep === steps.length ? styles.planesResolved : ""}
						`}
					/>
				</g>
			</svg>

			<DrawingStatus curStep={curStep} stepLength={steps.length} />
			<Buttons handleStep={handleStep} />
		</div>
	);
};
export default Polywolf;
