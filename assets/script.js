const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Creation des variables des fleches
const arrow_left = document.querySelector('.arrow_left')
console.log(arrow_left)
const arrow_right = document.querySelector('.arrow_right')
console.log(arrow_right)

//Ajout de l'évenement au click
let i = 0

arrow_left.addEventListener('click', () => {
		i--
		console.log(i)
	
})

arrow_right.addEventListener('click', () => {
		i++
		console.log(i)

})

//Creation des bullets points
let dots = document.querySelector('.dots')

let compteur = 0

while(compteur < slides.length) {

	let bulletPoint = document.createElement('div')
	bulletPoint.classList.add('dot')
	dots.appendChild(bulletPoint)

	compteur++
	console.log(compteur)

}