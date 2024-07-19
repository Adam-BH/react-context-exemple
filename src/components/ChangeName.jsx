import { useState } from 'react';

import { useUser } from '../Contexts/UserContext';

export const ChangeName = () => {
	const [newName, setNewName] = useState('');

	const { setName } = useUser();

	return (
		<div>
			<input
				onChange={(e) => setNewName(e.target.value)}
				type="text"
				placeholder="new name"
			/>
			<button onClick={() => setName(newName)}>Submit</button>
		</div>
	);
};
