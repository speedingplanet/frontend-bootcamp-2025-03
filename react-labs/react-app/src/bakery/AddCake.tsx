import React from 'react';
import { CakeShapes, getTypedFormData, InputCake } from './bakery-types';
import { useAppDispatch } from './redux/hooks';
import { addCake, saveCake } from './redux/cake-slice';

function AddCake() {
	let dispatch = useAppDispatch();

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		let form = event.currentTarget;
		let formData = getTypedFormData<Record<keyof InputCake, string | CakeShapes>>(form);
		let newCake: Partial<InputCake> = {};
		for (let [key, value] of formData.entries()) {
			if (key === 'shape') {
				newCake[key] = value as CakeShapes;
			} else if (key === 'servings') {
				newCake[key] = Number(value);
			} else {
				newCake[key] = value;
			}
		}

		// dispatch(addCake(newCake as InputCake));
		dispatch(saveCake(newCake as InputCake));
	};

	return (
		// form>div.row>label.col-form-label+div.col>input:text.form-control
		<form onSubmit={handleSubmit}>
			<div className="row">
				<label
					htmlFor="cake-name"
					className="col-form-label"
				>
					Name:
				</label>
				<div className="col">
					<input
						type="text"
						name="name"
						id="cake-name"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row">
				<label
					htmlFor="cake-shape"
					className="col-form-label"
				>
					Shape:
				</label>
				<div className="col">
					<select
						name="shape"
						id="cake-shape"
						className="form-select"
					>
						<option value="">Please choose a shape</option>
						<option value="circle">Circle</option>
						<option value="square">Square</option>
						<option value="rectangle">Rectangle</option>
						<option value="custom">Custom</option>
					</select>
				</div>
			</div>
			<div className="row">
				<label
					htmlFor="cake-servings"
					className="col-form-label"
				>
					Servings:
				</label>
				<div className="col">
					<input
						type="text"
						name="servings"
						id="cake-servings"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row">
				<label
					htmlFor="cake-flavor"
					className="col-form-label"
				>
					Flavor:
				</label>
				<div className="col">
					<input
						type="text"
						name="cakeFlavor"
						id="cake-flavor"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row">
				<label
					htmlFor="cake-frosting-flavor"
					className="col-form-label"
				>
					Frosting Flavor:
				</label>
				<div className="col">
					<input
						type="text"
						name="frostingFlavor"
						id="cake-frosting-flavor"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row">
				<label
					htmlFor="cake-filling-flavor"
					className="col-form-label"
				>
					Filling Flavor:
				</label>
				<div className="col">
					<input
						type="text"
						name="fillingFlavor"
						id="cake-filling-flavor"
						className="form-control"
					/>
				</div>
			</div>
			<div className="mt-1">
				<button className="btn btn-primary">Add Cake</button>
			</div>
		</form>
	);
}

export default AddCake;
