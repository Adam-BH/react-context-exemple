import { useUser } from '../Contexts/UserContext';

export const Home = () => {
	const { name } = useUser();

	return (
		<div>
			<h1>This is the home component</h1>
			<h2>Home page of user : {name}</h2>
		</div>
	);
};
