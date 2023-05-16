const price = document.getElementById('price')
const people = document.getElementById('people')
const tip = document.getElementById('tip')
const error = document.querySelector('.error')
const countBtn = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const checkList = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.textContent = 'Musisz uzupełnić wszystkie pola'
		costInfo.style.display = 'none'
	} else {
		error.textContent = ''
		countBill()
	}
}

const countBill = () => {
	const newPrice = parseFloat(price.value)
	const newPeople = parseInt(people.value)
	const newTip = parseFloat(tip.value)
	const sum = (newPrice + (newPrice * newTip)) / newPeople;

	costInfo.style.display = 'block'
	cost.textContent = sum.toFixed(2)

}

countBtn.addEventListener('click', checkList)
