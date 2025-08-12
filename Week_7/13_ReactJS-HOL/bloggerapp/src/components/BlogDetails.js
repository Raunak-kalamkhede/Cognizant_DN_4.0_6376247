import React from "react";

function BlogDetails() {
    
	const isPublished = true;

	return (
		<div style={{ padding: "20px" }}>
			<h2>Blog Details</h2>
			<h3>React Learning</h3>
			<p>Stephen Biz</p>
			<p>Welcome to learning React!</p>
			<br />
			{isPublished && (
				<>
					<h3>Installation</h3>
					<p>Schewzdenier</p>
					<p>You can install React from npm.</p>
				</>
			)}
		</div>
	);
}

export default BlogDetails;
