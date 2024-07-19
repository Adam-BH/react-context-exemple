import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [name, setName] = useState('Adam');
	const [age, setAge] = useState(0);

	useEffect(() => {
		// fetch data from database
		// setState(data)
	}, []);

	return (
		<UserContext.Provider value={{ name, setName, age, setAge }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}

	return context;
};
