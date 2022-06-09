const container = document.getElementById('container');

const options = document.getElementById('options');

let colourBtnValue = 0;

//Creates a grid in the specified value, adds event listeners container and to each cell created

function createSketchPad (number) {

	gridRemover();
	
	for (let i = 0; i < (number * number); i++) {
		const cell = document.createElement('div');
			cell.classList.add('cell');
			container.appendChild(cell);
					
				function monoColour () {
					cell.style.background = 'rgb(72, 89, 117)';
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
					container.classList.add('eraser');
					if (cell.classList.contains('draw') !== false) {
						cell.style.background = 'none';
						}
				};

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
		reloadBtn.classList.add('joyStick');
		reloadBtn.classList.add('leftStick');
		reloadBtn.addEventListener('click', () => {
			window.location.reload();
		});


	const pickColourBtn = document.createElement('button');
		pickColourBtn.textContent = 'Colour';
		pickColourBtn.classList.add('joyStick');
		pickColourBtn.classList.add('middleStick');

		pickColourBtn.addEventListener('click', () => {
			if (colourBtnValue === 0) {
				++colourBtnValue;
				pickColourBtn.textContent = 'Mono';
			} else if (colourBtnValue === 1) {
				--colourBtnValue;
				pickColourBtn.textContent = 'Colour';
			}
		});
	
	const guideModal = document.createElement('button');
		guideModal.textContent ='guide';
		guideModal.classList.add('joyStick');
		guideModal.classList.add('rightStick');
		guideModal.addEventListener('click', () => {
			document.getElementById('pop-up-box').classList.add('active');
			document.getElementById('overlay').classList.add('active');
		});
	
	const closeModalBtn = document.getElementById('modal-close-button');
	closeModalBtn.addEventListener('click', () => {
		document.getElementById('pop-up-box').classList.remove('active');
		document.getElementById('overlay').classList.remove('active');
	});

	boardOptions.appendChild(reloadBtn);
	boardOptions.appendChild(pickColourBtn);
	boardOptions.appendChild(guideModal);
		
createSketchPad(gridSize.value);

