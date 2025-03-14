import React from 'react'
import { useAppSelector } from './redux/hooks'

function ListCakes() {
	let cakes = useAppSelector(state => state.cakes);
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th>Name</th>
					<th>Shape</th>
					<th>Size</th>
					<th>Servings</th>
					<th>Cake flavor</th>
					<th>Frosting</th>
					<th>Filling</th>
				</tr>
			</thead>
			<tbody>
				{
					cakes.map(cake => (
						<tr key={cake.id}>
							<td>{cake.name}</td>
							<td>{cake.shape}</td>
							<td>{cake.size}</td>
							<td>{cake.servings}</td>
							<td>{cake.cakeFlavor}</td>
							<td>{cake.frostingFlavor}</td>
							<td>{cake.fillingFlavor}</td>
						</tr>
					))
				}
			</tbody>
		</table>
	)
}

export default ListCakes