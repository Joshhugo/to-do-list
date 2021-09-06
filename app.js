let myForm = document.querySelector('#my-form');
let taskInput = document.querySelector('.input');
let addList = document.querySelector('.arrange');

function submit() {
	if (taskInput.value === '') {
		alert('input a task');
	} else {
		icon = document.createElement('i');
		icon.classList.add('fas', 'fa-times', 'close');
		const li = document.createElement('li');
		li.classList.add('list');
		li.append(taskInput.value, icon);
		addList.appendChild(li);
		taskInput.value = '';
	}
}

let items = document.querySelector('ul');
items.addEventListener(
	'click',
	function (e) {
		if (e.target.classList.contains('close')) {
			let le;
			let del = confirm('Delete task?');
			if (del == true) {
				le = e.target.parentNode;
				items.removeChild(le);
			}
		}

		if (e.target.tagName === 'LI') {
			e.target.classList.toggle('strike');
		}
	},
	false
);
