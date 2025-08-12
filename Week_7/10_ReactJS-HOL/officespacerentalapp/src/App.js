import React from "react";
import "./App.css";

function App() {
	const heading = "Office Space Rental Listings";

	const officeList = [
		{
			id: 1,
			name: "TechPark Tower",
			rent: 55000,
			address: "1234 Silicon Avenue, Bangalore",
			image: "/office_images/office1.jpeg",
		},
		{
			id: 2,
			name: "iBusiness Center",
			rent: 75000,
			address: "FC Street, Pune",
			image: "/office_images/office2.jpeg",
		},
		{
			id: 3,
			name: "Green Valley Hub",
			rent: 60000,
			address: "FC Street, Pune",
			image: "/office_images/office3.jpeg",
		},
	];

	return (
		<div className="App">
			<h1>{heading}</h1>
			<div className="office-list">
				{officeList.map((office) => (
					<div className="office-card" key={office.id}>
						<img src={office.image} alt={office.name} />
						<h3>{office.name}</h3>
						<p style={{ color: office.rent < 60000 ? "red" : "green" }}>
							Rent: ₹{office.rent}
						</p>
						<p>Address: {office.address}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
