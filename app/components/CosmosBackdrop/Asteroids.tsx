import { colors } from "@/app/colors";
import { useMemo } from "react";

const AsteroidBelt = () => {
	const radius = 15;
	const asteroidColors = Object.values(colors).map((color) => color[1]);
	const numberOfAsteroids = 100;

	const asteroids = useMemo(
		() =>
			Array.from({ length: numberOfAsteroids }, () => ({
				position: [
					Math.random() * 360,
					(Math.random() - 0.5) * 0.2,
					Math.random() * 360,
				],
				scale: Math.random() * 0.5,
				id: Math.random(),
				color:
					asteroidColors[Math.floor(Math.random() * asteroidColors.length)],
			})),
		[asteroidColors],
	);

	return (
		<>
			{asteroids.map((asteroid) => (
				<mesh
					key={asteroid.id}
					position={[
						Math.cos(asteroid.position[0]) * radius,
						asteroid.position[1],
						Math.sin(asteroid.position[2]) * radius,
					]}
					scale={asteroid.scale}
				>
					<dodecahedronGeometry args={[0.1, 0]} />
					<meshBasicMaterial color={asteroid.color} />
				</mesh>
			))}
		</>
	);
};

export default AsteroidBelt;
