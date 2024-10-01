"use client";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { colors } from "../../colors";
import AsteroidBelt from "./Asteroids";
import Earth from "./Earth";
import RotatingCamera from "./RotatingCamera";

// Main Scene with Post-Processing Effects and Controls
const ThreeScene = () => {
	return (
		<Canvas camera={{ position: [10, 5, 10], fov: 60 }}>
			<RotatingCamera />

			{/* Objects */}
			<Earth />
			{/* <Moon /> */}
			<AsteroidBelt />
			<Stars
				radius={15}
				depth={100}
				count={100}
				factor={4}
				saturation={3}
				fade
			/>


			{/* Lighting */}
			<ambientLight intensity={0.2} />
			<pointLight
				position={[0, 0, 0]}
				intensity={100}
				color={colors.MountbattenPink[1]}
			/>

			{/* Post-Processing Effects */}
			<EffectComposer>
				<Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
				<Vignette eskil={false} offset={0.1} darkness={1.1} />
			</EffectComposer>

			{/* Controls */}
			<OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
		</Canvas>
	);
};

export default ThreeScene;
