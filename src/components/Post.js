import React from "react"

export default ({ post }) => {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-tittle">{post.title} </h5>
			</div>
		</div>
	)
}
