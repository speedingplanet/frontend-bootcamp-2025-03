import { NavLink, Route, Routes } from 'react-router-dom';
import './bakery.css'
import BakeryHome from './BakeryHome';
import AddCake from './AddCake';
import EditCake from './EditCake';
import RetireCake from './RetireCake';
import SearchCakes from './SearchCakes';
import OrderCake from './OrderCake';
import BakeryCart from './BakeryCart';

function BakeryManager() {
	return (
		<main className="container">
			<header className="row">
				<div className="col">
					<h1>🎂 Welcome to Rolling Scones 🥐</h1>
					<hr />
				</div>
			</header>
			<div className="row">
				<div className="col-3">
					<div className="nav">
						<ul className="list-unstyled">
							<li>
								<NavLink to="/bakery/add-cake">Add a cake</NavLink>
							</li>
							<li>
								<NavLink to="/bakery/edit-cake">Change a cake</NavLink>
							</li>
							<li>
								<NavLink to="/bakery/retire-cake">Retire a cake</NavLink>
							</li>
							<li>
								<NavLink to="/bakery/search-cakes">Find cakes</NavLink>
							</li>
							<li>
								<NavLink to="/bakery/order-cake">Order a cake</NavLink>
							</li>
							<li>
								<NavLink to="/bakery/cart">View my cart</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="/"
							element={<BakeryHome />}
						/>
						<Route
							path="add-cake"
							element={<AddCake />}
						/>
						<Route
							path="edit-cake"
							element={<EditCake />}
						/>
						<Route
							path="retire-cake"
							element={<RetireCake />}
						/>
						<Route
							path="search-cakes"
							element={<SearchCakes />}
						/>
						<Route
							path="order-cake"
							element={<OrderCake />}
						/>
						<Route
							path="cart"
							element={<BakeryCart />}
						/>
					</Routes>
				</div>
			</div>
		</main>
	);
}

export default BakeryManager;
