"use client";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { RepeatWrapping } from "three";

const Earth = () => {
	const earthRef = useRef<THREE.Mesh>(null);

	const textureLoader = new THREE.TextureLoader();
	const earthTexture = useMemo(() => {
		const texture = "./equirect_world.png";
		const tex = textureLoader.load(texture);
		tex.wrapS = tex.wrapT = RepeatWrapping;
		tex.repeat.set(1, 1);
		return tex;
	}, [textureLoader]);

	useFrame(({ clock }) => {
		const { current } = earthRef;
		const speed = 20;
		if (current) {
			const elapsedTime = clock.getElapsedTime();
			current.rotation.y = elapsedTime / speed;
			current.rotation.x = elapsedTime / speed;
		}
	});

	return (
		<>
			<mesh ref={earthRef} position={[4, -3, 0]}>
				<sphereGeometry args={[2, 16, 16]} />
				<meshStandardMaterial map={earthTexture} />
			</mesh>
		</>
	);
};

export default Earth;
