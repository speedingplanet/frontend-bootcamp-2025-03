import { Cake, InputCake } from './bakery-types';

let baseURL = 'http://localhost:5100/cakes';

export async function getAllCakes(): Promise<Array<Cake>> {
	try {
		let response = await fetch(baseURL);
		if (response.ok) {
			return (await response.json()) as Array<Cake>;
		} else {
			throw new Error(`Bad response ${response.status}`);
		}
	} catch (error) {
		console.error('DAO failed to fetch cakes:', error);
		throw error;
	}
}

export async function persistCake(cake: InputCake): Promise<Cake> {
	try {
		let response = await fetch(baseURL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({...cake, retired: false}),
		});
		if (response.ok) {
			return (await response.json()) as Cake;
		} else {
			throw new Error(`Bad response ${response.status}`);
		}
	} catch (error) {
		console.error('DAO failed to add a cake:', error);
		throw error;
	}
}

export async function persistCakes(cakes: Array<Cake>): Promise<Array<Cake>> {
	try {
		let response = await fetch(baseURL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(cakes),
		});
		if (response.ok) {
			return (await response.json()) as Array<Cake>;
		} else {
			throw new Error(`Bad response ${response.status}`);
		}
	} catch (error) {
		console.error('DAO failed to save cakes:', error);
		throw error;
	}
}


