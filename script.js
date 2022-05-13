const container = document.getElementById('container');

const options = document.getElementById('options');

const reloadBtn = document.createElement('button');
	reloadBtn.textContent = "Wipe Board";
	reloadBtn.classList.add('reload');
	reloadBtn.addEventListener('click', () => {
		window.location.reload();
	});

options.appendChild(reloadBtn);

let cell;
let cell2;

const gridValue = document.getElementById('range');

var output = document.getElementById("value");
output.textContent = gridValue.value;

gridValue.oninput = function() {
	output.textContent = this.value;
  }


for (let j = 0; j < gridValue.value; j++) {
	let cell = document.createElement('div');
	cell.classList.add('cell');
	container.appendChild(cell);

		for (let i = 0; i < gridValue.value; i++) {
			let cell2 = document.createElement('div');
			cell2.classList.add('cell');			
			container.appendChild(cell2);	
			
			cell2.addEventListener('mouseover', () => {
				cell2.classList.add('draw');
			});
			
		}
	cell.addEventListener('mouseover', () => {
	cell.classList.add('draw');
} );


}