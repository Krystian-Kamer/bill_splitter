const price = document.getElementById('price')
const people = document.getElementById('people')
const tip = document.getElementById('tip')
const error = document.querySelector('.error')
const countBtn = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const checkList = e => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.textContent = 'Musisz uzupełnić wszystkie pola'
	} else {
		countBill()
	}
}

const countBill = () => {
	cost.textContent = ((price.value * tip.value) / people.value).toFixed(2)
	costInfo.style.display = 'block'
	cost.style.display = 'block'

}

countBtn.addEventListener('click', checkList)