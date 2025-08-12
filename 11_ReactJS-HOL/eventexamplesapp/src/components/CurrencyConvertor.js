import React, { useState } from "react";

const CurrencyConvertor = () => {
	const [rupees, setRupees] = useState("");
	const [euro, setEuro] = useState("");

	const increment = () => {
		const value = parseFloat(rupees) || 0;
		setRupees((value + 1).toString());
	};

	const decrement = () => {
		const value = parseFloat(rupees) || 0;
		setRupees((value - 1).toString());
	};

	const handleCurrencyConvert = (e) => {
		e.preventDefault();
		if (rupees === "" || isNaN(rupees)) {
			alert("Please enter a valid amount in INR.");
			return;
		}
		const euroValue = (parseFloat(rupees) / 101.33).toFixed(2);
		setEuro(euroValue);
		alert(`${rupees} INR is approximately €${euroValue}`);
	};

	return (
		<div>
			<h3>Currency Converter (INR to EUR)</h3>
			<form onSubmit={handleCurrencyConvert}>
				<input
					type="text"
					placeholder="Amount in INR"
					value={rupees}
					onChange={(e) => setRupees(e.target.value)}
				/>
				<br />
				<button type="button" onClick={increment}>
					Increment
				</button>
				<button type="button" onClick={decrement}>
					Decrement
				</button>
				<br />
				<br />
				<button type="submit">Convert</button>
			</form>
			{euro && <p>Converted: €{euro}</p>}
		</div>
	);
};

export default CurrencyConvertor;
