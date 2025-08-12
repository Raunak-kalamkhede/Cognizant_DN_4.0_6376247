import React from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
	const sayMessage = (msg) => alert(msg);

	const handleSyntheticClick = () => alert("I was clicked");

	return (
		<div style={{ padding: "20px" }}>
			<h2>Event Examples App</h2>

			<button onClick={() => sayMessage("Welcome!")}>Say Welcome</button>

			<br />
			<br />

			<button onClick={handleSyntheticClick}>Click on me</button>

			<br />
			<br />

			<CurrencyConvertor />
		</div>
	);
}

export default App;
