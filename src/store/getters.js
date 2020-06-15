export default {
    animalsCount: function animalsCount(state){
        return state.cats.length + state.dogs.length;
    },
    getAllCats: function getAllCats(state){
        return state.pets.filter(function(pet){
            return pet.species === 'cat'
        })
    }
}