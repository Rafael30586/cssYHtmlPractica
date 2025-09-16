const changeImageButton = document.getElementById("change-image-button")
const pokemonImage = document.getElementById("pokemon-image")
let frontPicture = true

function changePicture(){
    if(frontPicture){
        pokemonImage.setAttribute("src","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/471.png")
        frontPicture = false
    }else{
        pokemonImage.setAttribute("src","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png")
        frontPicture = true
    } 
}

changeImageButton.addEventListener("click",changePicture)