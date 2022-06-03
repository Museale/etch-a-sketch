const container = document.getElementById('container');

const options = document.getElementById('options');


//Creates a grid in the specified value, adds event listeners to each cell created and container

function createSketchPad (number) {

	gridRemover();

	for (let i = 0; i < (number * number); i++) {
		const cell = document.createElement('div');
			cell.classList.add('cell');
			container.appendChild(cell);

				container.addEventListener('pointerdown', () => {
					cell.onpointerover = () => pointerOver();
				});	

					document.body.addEventListener('pointerup', () => {
						cell.onpointerover = () => pointerUp();
					});

						container.addEventListener('dblclick', () => {
							cell.onpointerover = () => eraseOnDblClick();
						});
			
		function monoColour () {
			cell.style.background = 'pink';
			cell.classList.add('draw');
		};

		function randomColourOnClick () {
			const randomColour = () => `hsla(${Math.random() * 390}, 80%, 78%, 1)`;
			cell.style.background = `${randomColour()}`;
		};

		function pointerOver () {

			monoColour();

			randomColourOnClick();
			
		};

		function pointerUp () {
			if (cell.classList.contains('draw') !== true) {
				cell.style.background = 'none';
			};
		};

		function eraseOnDblClick () {
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

	// const monoColour = document.createElement('button');
	// 	monoColour.textContent = 'Mono';
	// 	monoColour.classList.add('joyStick');
	// 	monoColour.classList.add('leftStick');
	// 	monoColour.style.visibility = 'hidden';
	// 	monoColour.style.position = 'absolute';


	boardOptions.appendChild(reloadBtn);
	boardOptions.appendChild(chooseRandomColour);
	// boardOptions.appendChild(monoColour);
	
		
createSketchPad(gridSize.value);

