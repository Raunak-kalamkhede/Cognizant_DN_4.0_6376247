import React, { useState } from "react";
import GuestPage from "./components/GuestPage";
import UserPage from "./components/UserPage";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// Element variable for conditional rendering
	let page;
	if (isLoggedIn) {
		page = <UserPage />;
	} else {
		page = <GuestPage />;
	}

	const handleLogin = () => setIsLoggedIn(true);
	const handleLogout = () => setIsLoggedIn(false);

	return (
		<div style={{ padding: "20px" }}>
			<h1>Ticket Booking App</h1>

			{isLoggedIn ? (
				<button onClick={handleLogout}>Logout</button>
			) : (
				<button onClick={handleLogin}>Login</button>
			)}

			<hr />

			{page}
		</div>
	);
}

export default App;
