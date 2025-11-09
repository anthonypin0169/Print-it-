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



//Variables
const bannerImg = document.querySelector('.banner-img')
const bannerTxt = document.querySelector('#banner p')
const arrow_left = document.querySelector('.arrow_left')
const arrow_right = document.querySelector('.arrow_right')
let dots = document.querySelector('.dots')




//Creation des bullets points
let compteur = 0 

while(compteur < slides.length) {

	let bulletPoint = document.createElement('div')
	bulletPoint.classList.add('dot')
	dots.appendChild(bulletPoint)
	compteur++

}
//Ajout dans le DOM des bullet point creer dans la boucle
const allBulletPoint = document.querySelectorAll('.dot')




//Fonction qui gere le carousel
let i = 0 

function uptdateCarousel(){

	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`
	bannerTxt.innerHTML = slides[i].tagLine
	
	allBulletPoint.forEach((dot,index) => { 
		dot.classList.toggle('dot_selected', index === i)
	})
}




//Ajout de l'évenement au click
arrow_left.addEventListener('click', () => {
		if (i === 0) {
			i = slides.length -1
		} else {
			i = i - 1
		}
		uptdateCarousel()
		console.log(i)

})
arrow_right.addEventListener('click', () => {
		if (i === slides.length -1) {
			i = 0
		} else {
			i = i + 1
		}
		uptdateCarousel()
		console.log(i)

})
uptdateCarousel()