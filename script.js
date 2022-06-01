const container = document.getElementById('container');

const options = document.getElementById('options');

function createGrid (number) {

	gridRemover();

	for (let i = 0; i < (number * number); i++) {
		const cell = document.createElement('div');
			cell.classList.add('cell');
			container.appendChild(cell);
		 
			container.addEventListener('pointerdown', () => {
				cell.onpointerover = () => { 
					cell.style.background = 'pink';
					
				};

			});	
			container.addEventListener('pointerup', () => {
				cell.onpointerover = () => {
				const eraser = document.createElement('div');
				
				cell.style.background = 'none';
					
				}
			});
		

		}
};

function gridRemover () {

	const cellRemover = document.querySelectorAll('.cell');
		if (container.hasChildNodes()) {
			Array.from(cellRemover); 
			cellRemover.forEach(element => {
				container.removeChild(element);
			});
		};
}

	let gridSize = document.getElementById('range');
		gridSize.addEventListener('change', (e) => {
		container.style.setProperty('--grid-column-count', e.target.value);
		container.style.setProperty('--grid-row-count', e.target.value); 
		createGrid(gridSize.value);
	});


	let output = document.getElementById('value');
		output.textContent = gridSize.value;
		gridSize.oninput = function() {
		output.textContent = this.value;
	};

	const reloadBtn = document.createElement('button');
		reloadBtn.textContent = "Wipe Board";
		reloadBtn.classList.add('reload');
		reloadBtn.addEventListener('click', () => {
			window.location.reload();
		});

		options.appendChild(reloadBtn);


createGrid(gridSize.value);