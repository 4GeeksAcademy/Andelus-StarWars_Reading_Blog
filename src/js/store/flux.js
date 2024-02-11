// get state es una función. Importante el store y el action
const getState = ({ getStore, getActions, setStore }) => {
	return {
		// store es un objeo con variables globales
		store: {
			// STAR WARS
			favorites: [],
			characters: [],
			planets: [],
			starships: [],
			detailCharacter: {},
			detailPlanet: {},
			detailStarship: {}
		},
		actions: {

			addFavorite: (item) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, item] })
			},

			removeFavorite: (name) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter((item, id) => { return item != name }) })

			},

			getCharacters: async () => {
				const url = "https://www.swapi.tech/api/people";
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({ "characters": data.results })
					localStorage.setItem('characters', JSON.stringify(data.results));
					console.log(data);

				} else {
					console.log('Error:', response.status, response.statusText)
				}
			},
			getPlanets: async () => {
				const url = "https://www.swapi.tech/api/planets";
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({ "planets": data.results });
					console.log(data);
				} else {
					console.log('Error:', response.status, response.statusText)
				}
			},

			getStarships: async () => {
				const url = "https://www.swapi.tech/api/starships";
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({ "starships": data.results });
					console.log(data);
				} else {
					console.log('Error:', response.status, response.statusText)
				}
			},

			getCharactersDetail: async (id) => {
				// const url = `${process.env.API_URL}/people/${id}`;
				const url = `https://www.swapi.tech/api/people/${id}`;
				console.log("Esto es la url -> ",url);
				const options = { 
					method: 'GET'
				};
				const response = await fetch(url, options);
				
				if (response.ok) {
					const data = await response.json();
					setStore({ detailCharacter: data });
					console.log("Get character detail -> ",data)
				} else {
					console.log('Error:', response.status, response.statusText);
				}
			},

			getPlanetsDetail: async (id) => {
				const url = `https://www.swapi.tech/api/planets/${id}`;
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				
				if (response.ok) {
					const data = await response.json();
					setStore({ detailPlanet: data });
				} else {
					console.log('Error:', response.status, response.statusText);
				}
			},

			getStarshipDetail: async (id) => {
				console.log("Esto es el id -> ",id);
				const url = `https://www.swapi.tech/api/starships/${id}`;
				const options = { method: 'GET' };
				console.log("Esto es la url -> ",url);
				const response = await fetch(url, options);
				console.log("Esto es la response -> ",response);

				if (response.ok) {
					const data = await response.json();
					setStore({ detailStarship: data });
				} else {
					console.log('Error:', response.status, response.statusText);
				}
			}

		}
	};
};

export default getState;
