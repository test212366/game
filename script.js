const area = document.getElementById('area'),
	contentWrapper = document.getElementById('content'),
	modalButton = document.getElementById('btn-close'),
	modal = document.getElementById('modal-result-wrapper')
const boxes = document.querySelectorAll('.box')
let move = 0
let result = ''

area.addEventListener('click', e => {
	if (e.target.className == 'box') {
		move % 2 === 0 ? e.target.textContent = 'X' : e.target.textContent = '0'
		move++
		check()
	}
})
function check() {
	const arr = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		//
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		//
		[0, 4, 8],
		[6, 4, 2]
	]
	for (let i = 0; i < arr.length; i++) {
		if (boxes[arr[i][0]].textContent == 'X' && boxes[arr[i][1]].textContent == 'X' && boxes[arr[i][2]].textContent == 'X') {
			result = 'крестики'
			prepareResult(result)
		} else if (boxes[arr[i][0]].textContent == '0' && boxes[arr[i][1]].textContent == '0' && boxes[arr[i][2]].textContent == '0') {
			result = 'нолики'
			prepareResult(result)
		}
	}
}
const prepareResult = winner => {
	contentWrapper.textContent = winner
	modal.style.display = 'block'
	modalButton.addEventListener('click', () => {
		modal.style.display = 'none'
		result = ''
		move = 0
		boxes.forEach(item => {
			item.textContent = ''
		})
	})
}