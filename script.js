const checkbox = document.getElementById('theme-box')
const colorTest = document.querySelector('.color-test')

checkbox.addEventListener('click', colorTheme)

function colorTheme(e) {
	if (checkbox.checked == false) {
		colorTest.style.setProperty('--dark-theme', 'false')
	} else {
		colorTest.style.setProperty('--dark-theme', 'true')
	}
}
