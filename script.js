const container = document.getElementById('container');

const main = document.getElementById('main');

const options = document.getElementById('options');

const backgroundOptions = document.getElementById('bg-options');

	main.appendChild(backgroundOptions);

let colourBtnValue = 0;

//Creates a grid in the specified value, adds event listeners container and to each cell created

function createSketchPad (number) {

	gridRemover();
	
	for (let i = 0; i < (number * number); i++) {
		const cell = document.createElement('div');
			cell.classList.add('cell');
			container.appendChild(cell);
					
				function monoColour () {
					cell.style.background = document.getElementById('colour-wheel').value;
					cell.style.background = `${colourWheel}`;
				};
		
				function randomColourOnClick () {
					const randomColour = () => `hsla(${Math.random() * 390}, 80%, 78%, 1)`;
					cell.style.background = `${randomColour()}`;
				};
		
				function pointerOver () {
					cell.classList.add('draw');
					colourBtnValue === 0 ? monoColour() : randomColourOnClick();
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

				container.addEventListener('pointerdown', (e) => {
					container.classList.remove('eraser');
					container.classList.add('drawingActive');
					cell.onpointerover = () => pointerOver();
					cell.onclick =() => pointerOver();
					e.preventDefault();
					});	
		
				document.body.addEventListener('pointerup', () => {
					cell.onpointerover = () => pointerUp();
					});
		
				container.addEventListener('dblclick', () => {
					container.classList.remove('drawingActive');
					container.classList.add('eraser');
					cell.onpointerover = () => eraseOnDblClick();
					});
	};
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
};

	let gridSize = document.getElementById('range');
		gridSize.addEventListener('change', (e) => {
		container.style.setProperty('--grid-column-count', e.target.value);
		container.style.setProperty('--grid-row-count', e.target.value); 
		createSketchPad(gridSize.value);
	});


	let output = document.getElementById('value');
		output.textContent = gridSize.value;
		gridSize.oninput = function() {
		output.textContent = this.value;
	};

	const reloadBtn = document.createElement('button');
		reloadBtn.textContent = "Wipe Board";
		reloadBtn.classList.add('button-options');
		reloadBtn.addEventListener('click', () => {
			window.location.reload();
		});


	const pickColourBtn = document.createElement('button');
		pickColourBtn.textContent = 'RGB';
		pickColourBtn.classList.add('button-options');

		pickColourBtn.addEventListener('click', () => {
			if (colourBtnValue === 0) {
				++colourBtnValue;
				pickColourBtn.textContent = 'Mono';
			} else if (colourBtnValue === 1) {
				--colourBtnValue;
				pickColourBtn.textContent = 'RGB';
			}
		});
	
	const guideModal = document.createElement('button');
		guideModal.textContent ='guide';
		guideModal.classList.add('button-options')
		guideModal.addEventListener('click', () => {
			document.getElementById('pop-up-box').classList.add('active');
			document.getElementById('overlay').classList.add('active');
		});
	
	const closeModalBtn = document.getElementById('modal-close-button');
	closeModalBtn.addEventListener('click', () => {
		document.getElementById('pop-up-box').classList.remove('active');
		document.getElementById('overlay').classList.remove('active');
	});

	let colourWheel = document.getElementById('colour-wheel');
	colourWheel.addEventListener('change', e => {
		return colourWheel = e.target.value;
	})

	


	const backgroundColourOptions = document.createElement('button');
	backgroundColourOptions.classList.add('button-options');
	backgroundColourOptions.textContent = "Back- ground";
	
	backgroundColourOptions.addEventListener('click', () => {
		container.style.background = document.getElementById('colour-wheel').value;
		
	});

	backgroundOptions.appendChild(pickColourBtn);
	backgroundOptions.appendChild(backgroundColourOptions);
	backgroundOptions.appendChild(reloadBtn);
	backgroundOptions.appendChild(guideModal);

		
createSketchPad(gridSize.value);

