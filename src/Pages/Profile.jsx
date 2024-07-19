import { ChangeName } from '../components/ChangeName';

import { useUser } from '../Contexts/UserContext';

export const Profile = () => {
	const { name } = useUser();

	return (
		<div>
			<h1>Profile page</h1>
			<h2>Profile name: {name}</h2>
			<ChangeName />
		</div>
	);
};
