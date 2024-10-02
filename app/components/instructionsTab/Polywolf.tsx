'use client'
import { colors } from '@/app/colors';
import { SVGProps, useEffect, useState } from 'react';

const Polywolf = (props: SVGProps<SVGSVGElement>) => {

    const [currentStep, setCurrentStep] = useState(0);

    const sequence = [
        { letter: "aa", line: 'line_1', circle: 'circle_aa', text: 'text_aa' },
        { letter: "ab", line: 'line_2', circle: 'circle_ab', text: 'text_ab' },
        { letter: "ac", line: 'line_3', circle: 'circle_ac', text: 'text_ac' },
        { letter: "ad", line: 'line_4', circle: 'circle_ad', text: 'text_ad' },
        { letter: "ae", line: 'line_5', circle: 'circle_ae', text: 'text_ae' },
        { letter: "af", line: 'line_6', circle: 'circle_af', text: 'text_af' },
        { letter: "ag", line: 'line_7', circle: 'circle_ag', text: 'text_ag' },
        { letter: "ah", line: 'line_8', circle: 'circle_ah', text: 'text_ah' },
        { letter: "ai", line: 'line_9', circle: 'circle_ai', text: 'text_ai' },
        { letter: "ag", line: 'line_10', circle: 'circle_ag', text: 'text_ag' },
        { letter: "aj", line: 'line_11', circle: 'circle_aj', text: 'text_aj' },
        { letter: "ak", line: 'line_12', circle: 'circle_ak', text: 'text_ak' },
        { letter: "al", line: 'line_13', circle: 'circle_al', text: 'text_al' },
        { letter: "am", line: 'line_14', circle: 'circle_am', text: 'text_am' },
        { letter: "aj", line: 'line_15', circle: 'circle_aj', text: 'text_aj' },
        { letter: "an", line: 'line_16', circle: 'circle_an', text: 'text_an' },
        { letter: "ao", line: 'line_17', circle: 'circle_ao', text: 'text_ao' },
        { letter: "ap", line: 'line_18', circle: 'circle_ap', text: 'text_ap' },
        { letter: "aq", line: 'line_19', circle: 'circle_aq', text: 'text_aq' },
        { letter: "ar", line: 'line_20', circle: 'circle_ar', text: 'text_ar' },
        { letter: "as", line: 'line_21', circle: 'circle_as', text: 'text_as' },
        { letter: "ai", line: 'line_22', circle: 'circle_ai', text: 'text_ai' },
        { letter: "at", line: 'line_23', circle: 'circle_at', text: 'text_at' },
        { letter: "au", line: 'line_24', circle: 'circle_au', text: 'text_au' },
        { letter: "av", line: 'line_25', circle: 'circle_av', text: 'text_av' },
        { letter: "ar", line: 'line_26', circle: 'circle_ar', text: 'text_ar' },
        { letter: "as", line: 'line_21', circle: 'circle_as', text: 'text_as' },
        { letter: "aw", line: 'line_27', circle: 'circle_aw', text: 'text_aw' },
        { letter: "ax", line: 'line_28', circle: 'circle_ax', text: 'text_ax' },
        { letter: "ay", line: 'line_29', circle: 'circle_ay', text: 'text_ay' },
        { letter: "az", line: 'line_30', circle: 'circle_az', text: 'text_az' },
        { letter: "a1", line: 'line_31', circle: 'circle_a1', text: 'text_a1' },
        { letter: "a2", line: 'line_32', circle: 'circle_a2', text: 'text_a2' },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep(prevStep => {
                const nextStep = prevStep === sequence.length ? 1 : prevStep + 1;
                return nextStep;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const previousStep = currentStep === 1 ? sequence.length : currentStep - 1;
        const currentLine = document.getElementById(sequence[currentStep]?.line);
        const previousLine = document.getElementById(sequence[previousStep]?.line);
        const currentCircle = document.getElementById(sequence[currentStep]?.circle);
        const previousCircle = document.getElementById(sequence[previousStep]?.circle);
        const currentText = document.getElementById(sequence[currentStep]?.text);
        const previousText = document.getElementById(sequence[previousStep]?.text);
        const currentLetter = document.getElementById(sequence[currentStep]?.letter);
        const previousLetter = document.getElementById(sequence[previousStep]?.letter);

        console.log(sequence[currentStep]?.letter)



        if (currentLine && currentCircle && currentText && currentLetter) {
            currentLine.style.stroke = 'red';
            currentCircle.style.stroke = 'red';
            currentText.style.fill = 'red';
            currentLetter.style.fill = 'red';

        }

        if (previousLine && previousCircle && previousText && previousLetter) {
            previousLine.style.stroke = "green";
            previousCircle.style.stroke = "green";
            previousText.style.fill = "green";
            previousLetter.style.fill = "green";


        }







    }, [currentStep]);


    const circleStyle = {
        r: 0.7,
        style: {
            stroke: "none",
            strokeWidth: "2pt",
        }
    }

    const textStyle = {
        dominantBaseline: "middle",
        letterSpacing: 1,
        textAnchor: "middle",
        style: {
            fontWeight: 400,
            fontSize: 10,
            fontFamily: "Consolas",
            fill: "#000",
            fillOpacity: 1,
        }
    }

    const fillCircleStyle = {
        style: {
            fill: "#000",
            stroke: "#fff",
            strokeWidth: 0.755906,

        },
        transform: "translate(-99.413 -180.215)",
        r: 1.512
    }

    return (

        <div>
            <div style={{ 'display': 'flex' }}>
                {sequence.map((s, index) => (
                    <div key={index} id={s.letter}>
                        {s.letter} {(index + 1) % 5 === 0 && <span />}
                    </div>
                ))}
            </div>



            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={500}
                height={549.865}
                viewBox="0 0 132.292 145.485"
                {...props}
            >
                <g transform="matrix(.21098 0 0 .21098 1.682 0)">
                    <path
                        d="m349.856 562.485 45.524-52.194 66.448 20.687-20.421 42.846zM249.615 488.535l28.296 52.287-14.78 13.903-13.516-66.19"
                        style={{ fill: "none" }}
                        transform="translate(-99.413 -180.215)"
                        id="filled_plane_1"
                    />

                    <circle
                        cx={410.958}
                        cy={544.336}
                        {...fillCircleStyle}
                        id='fill_circle_1'
                    />
                    <circle
                        cx={262.89}
                        cy={525.89}
                        {...fillCircleStyle}
                        id='fill_circle_2'
                    />
                    <g transform="matrix(1.99262 0 0 1.99262 -501.384 -701.339)">
                        <circle
                            cx={400}
                            cy={669}
                            {...circleStyle}
                            id="circle_aa"
                        />
                        <text
                            x={400}
                            y={669}
                            {...textStyle}
                            id="text_aa"
                        >
                            {"aa"}
                        </text>

                        <circle
                            cx={364}
                            cy={652}
                            {...circleStyle}
                            id="circle_ab"
                        />
                        <text
                            x={364}
                            y={652}
                            {...textStyle}
                            id="text_ab"
                        >
                            {"ab"}
                        </text>

                        <circle
                            cx={308}
                            cy={655}
                            {...circleStyle}
                            id="circle_ac"
                        />
                        <text
                            x={308}
                            y={655}
                            {...textStyle}
                            id="text_ac"
                        >
                            {"ac"}
                        </text>

                        <circle
                            cx={277}
                            cy={640}
                            {...circleStyle}
                            id="circle_ad"
                        />
                        <text
                            x={277}
                            y={640}
                            {...textStyle}
                            id="text_ad"
                        >
                            {"ad"}
                        </text>

                        <circle
                            cx={256}
                            cy={609}
                            {...circleStyle}
                            id="circle_ae"
                        />
                        <text
                            x={256}
                            y={609}
                            {...textStyle}
                            id="text_ae"
                        >
                            {"ae"}
                        </text>

                        <circle
                            cx={252}
                            cy={587}
                            {...circleStyle}
                            id="circle_af"
                        />
                        <text
                            x={252}
                            y={587}
                            {...textStyle}
                            id="text_af"
                        >
                            {"af"}
                        </text>

                        <circle
                            cx={334}
                            cy={540}
                            {...circleStyle}
                            id="circle_ag"
                        />
                        <text
                            x={334}
                            y={540}
                            {...textStyle}
                            id="text_ag"
                        >
                            {"ag"}
                        </text>

                        <circle
                            cx={341}
                            cy={533}
                            {...circleStyle}
                            id="circle_ah"
                        />
                        <text
                            x={341}
                            y={533}
                            {...textStyle}
                            id="text_ah"
                        >
                            {"ah"}
                        </text>

                        <circle
                            cx={327}
                            cy={506}
                            {...circleStyle}
                            id="circle_ai"
                        />
                        <text
                            x={327}
                            y={506}
                            {...textStyle}
                            id="text_ai"
                        >
                            {"ai"}
                        </text>

                        <circle
                            cx={377}
                            cy={544}
                            {...circleStyle}
                            id="circle_aj"
                        />
                        <text
                            x={377}
                            y={544}
                            {...textStyle}
                            id="text_aj"
                        >
                            {"aj"}
                        </text>

                        <circle
                            cx={423}
                            cy={550}
                            {...circleStyle}
                            id="circle_ak"
                        />
                        <text
                            x={423}
                            y={550}
                            {...textStyle}
                            id="text_ak"
                        >
                            {"ak"}
                        </text>

                        <circle
                            cx={433}
                            cy={528}
                            {...circleStyle}
                            id="circle_al"
                        />
                        <text
                            x={433}
                            y={528}
                            {...textStyle}
                            id="text_al"
                        >
                            {"al"}
                        </text>

                        <circle
                            cx={400}
                            cy={518}
                            {...circleStyle}
                            id="circle_am"
                        />
                        <text
                            x={400}
                            y={518}
                            {...textStyle}
                            id="text_am"
                        >
                            {"am"}
                        </text>

                        <circle
                            cx={386}
                            cy={501}
                            {...circleStyle}
                            id="circle_an"
                        />
                        <text
                            x={386}
                            y={501}
                            {...textStyle}
                            id="text_an"
                        >
                            {"an"}
                        </text>

                        <circle
                            cx={415}
                            cy={491}
                            {...circleStyle}
                            id="circle_ao"
                        />
                        <text
                            x={415}
                            y={491}
                            {...textStyle}
                            id="text_ao"
                        >
                            {"ao"}
                        </text>

                        <circle
                            cx={438}
                            cy={458}
                            {...circleStyle}
                            id="circle_ap"
                        />
                        <text
                            x={438}
                            y={458}
                            {...textStyle}
                            id="text_ap"
                        >
                            {"ap"}
                        </text>

                        <circle
                            cx={438}
                            cy={435}
                            {...circleStyle}
                            id="circle_aq"
                        />
                        <text
                            x={438}
                            y={435}
                            {...textStyle}
                            id="text_aq"
                        >
                            {"aq"}
                        </text>

                        <circle
                            cx={385}
                            cy={450}
                            {...circleStyle}
                            id="circle_ar"
                        />
                        <text
                            x={385}
                            y={450}
                            {...textStyle}
                            id="text_ar"
                        >
                            {"ar"}
                        </text>

                        <circle
                            cx={351}
                            cy={480}
                            {...circleStyle}
                            id="circle_as"
                        />
                        <text
                            x={351}
                            y={480}
                            {...textStyle}
                            id="text_as"
                        >
                            {"as"}
                        </text>

                        <circle
                            cx={341}
                            cy={496}
                            {...circleStyle}
                            id="circle_at"
                        />
                        <text
                            x={341}
                            y={496}
                            {...textStyle}
                            id="text_at"
                        >
                            {"at"}
                        </text>

                        <circle
                            cx={366}
                            cy={508}
                            {...circleStyle}
                            id="circle_au"
                        />
                        <text
                            x={366}
                            y={508}
                            {...textStyle}
                            id="text_au"
                        >
                            {"au"}
                        </text>

                        <circle
                            cx={373}
                            cy={469}
                            {...circleStyle}
                            id="circle_av"
                        />
                        <text
                            x={373}
                            y={469}
                            {...textStyle}
                            id="text_av"
                        >
                            {"av"}
                        </text>

                        <circle
                            cx={341}
                            cy={449}
                            {...circleStyle}
                            id="circle_aw"
                        />
                        <text
                            x={341}
                            y={449}
                            {...textStyle}
                            id="text_aw"
                        >
                            {"aw"}
                        </text>

                        <circle
                            cx={349}
                            cy={361}
                            {...circleStyle}
                            id="circle_ax"
                        />
                        <text
                            x={349}
                            y={361}
                            {...textStyle}
                            id="text_ax"
                        >
                            {"ax"}
                        </text>

                        <circle
                            cx={464}
                            cy={354}
                            {...circleStyle}
                            id="circle_ay"
                        />
                        <text
                            x={464}
                            y={354}
                            {...textStyle}
                            id="text_ay"
                        >
                            {"ay"}
                        </text>

                        <circle
                            cx={558}
                            cy={502}
                            {...circleStyle}
                            id="circle_az"
                        />
                        <text
                            x={558}
                            y={502}
                            {...textStyle}
                            id="text_az"
                        >
                            {"az"}
                        </text>

                        <circle
                            cx={458}
                            cy={696}
                            {...circleStyle}
                            id="circle_a1"
                        />
                        <text
                            x={458}
                            y={696}
                            {...textStyle}
                            id="text_a1"
                        >
                            {"a1"}
                        </text>

                        <circle
                            cx={422}
                            cy={679}
                            {...circleStyle}
                            id="circle_a2"
                        />
                        <text
                            x={422}
                            y={679}
                            {...textStyle}
                            id="text_a2"
                        >
                            {"a2"}
                        </text>
                    </g>
                    <g
                        id="polywolf"
                        style={{
                            fill: "none",
                            stroke: "yellow",
                            strokeWidth: "0pt",
                        }}
                    >
                        <path d="m294.71 630.917-71.507-33.615M223.203 597.302l-109.888 6.639M113.315 603.94l-62.742-29.277M50.573 574.663 8.128 513.11M8.128 513.11 1.05 467.829M1.05 467.829l162.668-93.32M163.718 374.51l14.78-13.903M178.498 360.607l-29.213-53.16M149.285 307.447l14.433 67.063M163.718 374.51l86.725 7.76M250.443 382.27l91.55 11.339M341.994 393.609l19.008-42.023M361.002 351.586l-65.035-21.51M295.967 330.076l-45.524 52.194M250.443 382.27l18.008-84.712M268.45 297.558l56.537-20.511M324.987 277.047l45.523-66.537M370.51 210.51l1.267-45.49M371.777 165.02l-106.123 30.424M265.654 195.444l-66.681 59.25M198.973 254.694l-49.688 52.753M149.285 307.447l29.119-19.898M178.404 287.549 227.612 311M227.612 311l14.713-76.933M242.325 234.067l23.326-38.621M198.973 254.694l-20.696-61.727M178.277 192.967l15.916-175.102M194.193 17.865 371.777 165.02M371.777 165.02 424.134 3.714M424.134 3.713l186.068 295.024M610.202 298.737l-198.615 387.12M411.587 685.857l-56.03-26.214" />
                    </g>
                    <g id="lines_group" style={{
                        fill: "none",
                        stroke: colors['Jet'][0],
                        strokeWidth: "2pt",
                    }} transform="translate(-99.413461,-180.21509)">
                        <line x1="394.12424" y1="811.13184" x2="322.61557" y2="777.51727" id="line_1" />
                        <line x1="322.61557" y1="777.51727" x2="212.728" y2="784.15601" id="line_2" />
                        <line x1="212.728" y1="784.15601" x2="149.98563" y2="754.87848" id="line_3" />
                        <line x1="149.98563" y1="754.87848" x2="107.5413" y2="693.32532" id="line_4" />
                        <line x1="107.5413" y1="693.32532" x2="100.46325" y2="648.04437" id="line_5" />
                        <line x1="100.46325" y1="648.04437" x2="263.13138" y2="554.72534" id="line_6" />
                        <line x1="263.13138" y1="554.72534" x2="277.9108" y2="540.82166" id="line_7" />
                        <line x1="277.9108" y1="540.82166" x2="248.69846" y2="487.66248" id="line_8" />
                        <line x1="248.69846" y1="487.66248" x2="263.13138" y2="554.72534" id="line_9" />
                        <line x1="263.13138" y1="554.72534" x2="349.85623" y2="562.4848" id="line_10" />
                        <line x1="349.85623" y1="562.4848" x2="441.40659" y2="573.82379" id="line_11" />
                        <line x1="441.40659" y1="573.82379" x2="460.41495" y2="531.80084" id="line_12" />
                        <line x1="460.41495" y1="531.80084" x2="395.37973" y2="510.29086" id="line_13" />
                        <line x1="395.37973" y1="510.29086" x2="349.85623" y2="562.4848" id="line_14" />
                        <line x1="349.85623" y1="562.4848" x2="367.86411" y2="477.77341" id="line_15" />
                        <line x1="367.86411" y1="477.77341" x2="424.3996" y2="457.26221" id="line_16" />
                        <line x1="424.3996" y1="457.26221" x2="469.92313" y2="390.72546" id="line_17" />
                        <line x1="469.92313" y1="390.72546" x2="471.19003" y2="345.23621" id="line_18" />
                        <line x1="471.19003" y1="345.23621" x2="365.06668" y2="375.65936" id="line_19" />
                        <line x1="365.06668" y1="375.65936" x2="298.38599" y2="434.90948" id="line_20" />
                        <line x1="298.38599" y1="434.90948" x2="248.69846" y2="487.66248" id="line_21" />
                        <line x1="248.69846" y1="487.66248" x2="277.81735" y2="467.76428" id="line_22" />
                        <line x1="277.81735" y1="467.76428" x2="327.02521" y2="491.21567" id="line_23" />
                        <line x1="327.02521" y1="491.21567" x2="341.73849" y2="414.2821" id="line_24" />
                        <line x1="341.73849" y1="414.2821" x2="365.06448" y2="375.66129" id="line_25" />
                        <line x1="298.38599" y1="434.90948" x2="277.69003" y2="373.1824" id="line_26" />
                        <line x1="277.69003" y1="373.1824" x2="293.60587" y2="198.0798" id="line_27" />
                        <line x1="293.60587" y1="198.0798" x2="471.19003" y2="345.23621" id="line_28" />
                        <line x1="471.19003" y1="345.23621" x2="523.54681" y2="183.92769" id="line_29" />
                        <line x1="523.54681" y1="183.92769" x2="709.61517" y2="478.95169" id="line_30" />
                        <line x1="709.61517" y1="478.95169" x2="510.99994" y2="866.07239" id="line_31" />
                        <line x1="510.99994" y1="866.07239" x2="454.97137" y2="839.85809" id="line_32" />
                    </g>
                </g>
            </svg>
        </div>
    )
}
export default Polywolf
