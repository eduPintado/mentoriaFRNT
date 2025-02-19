const axios = require('axios');

const getPokemon = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

getPokemon();
