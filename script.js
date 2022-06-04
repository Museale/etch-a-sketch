const container = document.getElementById('container');

const options = document.getElementById('options');

let colourBtn = 0;

//Creates a grid in the specified value, adds event listeners to each cell created and container

function createSketchPad (number) {

	gridRemover();

	for (let i = 0; i < (number * number); i++) {
		const cell = document.createElement('div');
			cell.classList.add('cell');
			
			container.appendChild(cell);

				container.addEventListener('pointerdown', (e) => {
					container.classList.remove('eraser');
					cell.onpointerover = () => pointerOver();
					cell.onclick =() => pointerOver();
					e.preventDefault();
				});	

					document.body.addEventListener('pointerup', () => {
						cell.onpointerover = () => pointerUp();
					});

						container.addEventListener('dblclick', () => {
							cell.onpointerover = () => eraseOnDblClick();
						});
			
		function monoColour () {
			cell.style.background = 'rgb(72, 89, 117)';
			cell.classList.add('draw');
			
		};

		function randomColourOnClick () {
		
			const randomColour = () => `hsla(${Math.random() * 390}, 80%, 78%, 1)`;
			cell.style.background = `${randomColour()}`;
			cell.classList.add('draw');
	

		};

		function pointerOver () {
		
			switch (colourBtn) {
				case 0: monoColour();
				break;
				case 1: randomColourOnClick();
				break;
			};
		};

		function pointerUp () {
			if (cell.classList.contains('draw') !== true) {
				cell.style.background = 'none';
			};
		};

		function eraseOnDblClick () {
			container.classList.add('eraser');
			if (cell.classList.contains('draw') !== false) {
				cell.style.background = 'none';
				}
			};
	 }
};
		
//Checks if container has child nodes, and deletes them
function gridRemover () {

	const cellRemover = document.querySelectorAll('.cell');
		if (container.hasChildNodes()) {
			Array.from(cellRemover); 
			cellRemover.forEach(element => {
				container.removeChild(element);
			});
		};
}
//Calculates the size of the grid and transfers value to CSS
	let gridSize = document.getElementById('range');
		gridSize.addEventListener('change', (e) => {
		container.style.setProperty('--grid-column-count', e.target.value);
		container.style.setProperty('--grid-row-count', e.target.value); 
		createSketchPad(gridSize.value);
	});

//Outputs value
	let output = document.getElementById('value');
		output.textContent = gridSize.value;
		gridSize.oninput = function() {
		output.textContent = this.value;
	};
//Reloads page
	const reloadBtn = document.createElement('button');
		reloadBtn.textContent = "Wipe Board";
		reloadBtn.classList.add('joyStick');
		reloadBtn.classList.add('rightStick');
		reloadBtn.addEventListener('click', () => {
			window.location.reload();
		});
//Random colour btn
	


		const chooseRandomColour = document.createElement('button');
		chooseRandomColour.textContent = 'Colour';
		chooseRandomColour.classList.add('joyStick');
		chooseRandomColour.classList.add('leftStick');

		chooseRandomColour.addEventListener('click', e => {
			console.log(e.target);
			if (colourBtn === 0) {
				++colourBtn;
				chooseRandomColour.textContent = 'Mono';
			} else if (colourBtn === 1) {
					--colourBtn;
					chooseRandomColour.textContent = 'Colour';
					}
				});
	


	boardOptions.appendChild(reloadBtn);
	boardOptions.appendChild(chooseRandomColour);

	// boardOptions.appendChild(monoColour);
	
		
createSketchPad(gridSize.value);

