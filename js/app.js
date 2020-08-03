const pok_btn = document.getElementById('get_pokemons');
pok_btn.addEventListener('click', getPokemons);


function getPokemons() {
	fetch('https://pokeapi.co/api/v2/pokemon/?results=10')
		.then(res => res.json())
		.then(data => {
			let pokemeons = data.results ;
				 
			    return  pokemeons.map(function(pokemon){
				console.log(pokemon)
				var li = document.createElement('li');
				var t = document.createTextNode(pokemon.name);
				li.appendChild(t);
				document.getElementById('pokedex').appendChild(li);
			})
			
			
		});
}