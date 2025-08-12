import React from "react";

function CourseDetails() {

	const isReactCourse = true;
	const courseName = isReactCourse ? "React" : "Angular";

	return (
		<div style={{ padding: "20px", borderRight: "2px solid green" }}>
			<h2>Course Details</h2>
			<h3>{courseName}</h3>
			<p>6/3/20201</p>
		</div>
	);
}

export default CourseDetails;
