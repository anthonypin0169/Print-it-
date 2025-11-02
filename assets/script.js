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

//On recupere les variables

const bannerImg = document.querySelector('.banner-img')
const bannerTxt = document.querySelector('#banner p')
const arrow_left = document.querySelector('.arrow_left')
const arrow_right = document.querySelector('.arrow_right')
let dots = document.querySelector('.dots')



//Creation des bullets points

let compteur = 0 //Compteur de la boucle bullets points

while(compteur < slides.length) {

	let bulletPoint = document.createElement('div')
	bulletPoint.classList.add('dot')
	dots.appendChild(bulletPoint)
	compteur++

}
//Ajout dans le DOM des bullet point creer dans la boucle
const bulletPoint = document.querySelectorAll('.dot')


//Fonction qui gere le carousel

let i = 0 //Variable qui sert d'index

function uptdateCarousel(){

//Changer l'image en liant la variable d'index au tableau
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`
//Idem pour changer le texte
	bannerTxt.innerHTML = slides[i].tagLine
//Selectionner un point
	bulletPoint.forEach((dot,index) => { // Les 2 parametres correspondent a 1: l'objet(un point) , 2: la valeur(lequel).
		dot.classList.toggle('dot_selected', index === i)
	})
}



//Ajout de l'évenement au click

arrow_left.addEventListener('click', () => {
		i=(i- 1 + slides.length) % slides.length // % slides.length pour boucler
		uptdateCarousel()
		console.log(i)

})
arrow_right.addEventListener('click', () => {
		i=(i + 1) % slides.length
		uptdateCarousel()
		console.log(i)

})
uptdateCarousel()