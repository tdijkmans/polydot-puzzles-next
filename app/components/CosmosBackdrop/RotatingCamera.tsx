import { useFrame, useThree } from "@react-three/fiber";

// Rotating Camera Component
const RotatingCamera = () => {
	const { camera } = useThree();
	const rotationSpeed = 0.01; // Control the speed of rotation
	const radius = 10; // Radius from the center of the scene to rotate around

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();
		camera.position.x = Math.cos(elapsedTime * rotationSpeed) * radius;
		camera.position.z = Math.sin(elapsedTime * rotationSpeed) * radius;
		camera.lookAt(0, 0, 0); // Make the camera always look at the center (0, 0, 0)
	});

	return null; // This component only modifies the camera and doesn't render anything
};

export default RotatingCamera;
