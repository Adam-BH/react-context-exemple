import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { Navbar } from './components/Navbar';

import { UserProvider } from './Contexts/UserContext';

function App() {
	return (
		<>
			<UserProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</BrowserRouter>
			</UserProvider>
		</>
	);
}

export default App;
