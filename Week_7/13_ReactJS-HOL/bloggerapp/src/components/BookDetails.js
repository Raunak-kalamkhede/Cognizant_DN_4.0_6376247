import React from "react";
import { books } from "../data/books";

function BookDetails() {

	if (books.length === 0) {
		return <p>No books available.</p>;
	} else {
		return (
			<div style={{ padding: "20px", borderRight: "2px solid green" }}>
				<h2>Book Details</h2>
				{books.map((book) => (
					<div key={book.id}>
						<h4>{book.bname}</h4>
						<p>{book.price}</p>
					</div>
				))}
			</div>
		);
	}
}

export default BookDetails;
