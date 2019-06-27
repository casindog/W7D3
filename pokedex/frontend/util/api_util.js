export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: `/api/pokemon`
  })
);


// http://localhost:3000/api/pokemon