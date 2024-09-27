"use client";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { RepeatWrapping } from "three";

const Moon = () => {
	const moonRef = useRef<THREE.Mesh>(null);

	const textureLoader = new THREE.TextureLoader();
	const texture = "./moon1.jpg";
	const moonTexture = useMemo(() => {
		const tex = textureLoader.load(texture);
		tex.wrapS = tex.wrapT = RepeatWrapping;
		tex.repeat.set(1, 1);
		return tex;
	}, [textureLoader]);

	useFrame(({ clock }) => {
		const { current } = moonRef;
		if (current) {
			const elapsedTime = clock.getElapsedTime();
			const speedMultiplier = 0.1; // Reduce this value to slow down the speed
			current.position.x = Math.cos(elapsedTime * speedMultiplier) * 4 + 4;
			current.position.z = Math.sin(elapsedTime * speedMultiplier) * 4;
			current.position.y = Math.sin(elapsedTime * speedMultiplier) * 4 - 3;
		}
	});

	return (
		<mesh ref={moonRef}>
			<sphereGeometry args={[0.2, 12, 12]} />
			<meshStandardMaterial map={moonTexture} />
		</mesh>
	);
};

export default Moon;
