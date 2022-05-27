const button = document.querySelector('.button')
const xIcon = document.querySelector('.alert-x')
const copyBold = document.querySelector('bold-copy')
const alertContainer = document.querySelector('.alert-container')
let number = 0
const myHidAllert = () => {
	document.querySelector('.alert-container').classList.remove('visibility')
	document.querySelector('.shadow').classList.remove('visibility-shadow')
}
button.addEventListener('click', () => {
	document.querySelector('.alert-container').classList.add('visibility')

	document.querySelector('.bold-copy').textContent = number++ + ' times'
})
xIcon.addEventListener('click', myHidAllert)
