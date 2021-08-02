const FeelingLucky = document.getElementById("lucky")
const googleLogo = document.getElementById("logo")
const logoIlMakiage = document.getElementById("il-makiage")

FeelingLucky.addEventListener('click', ShowILMakiage)
function ShowILMakiage() {
googleLogo.classList.add("logo_none")
logoIlMakiage.classList.remove("display_logo")
}