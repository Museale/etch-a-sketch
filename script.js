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
						cell.classList.add('draw');
					};
					cell.onclick = () => {
						cell.style.background = 'white';
						cell.classList.add('draw');
					}
				});	
				container.addEventListener('pointerup', () => {
					cell.onpointerover = () => {
					if (cell.classList.contains('draw') !== true) {
						cell.style.background = 'none';
					}
					};
				});

				container.addEventListener('dblclick', (e) => {
					cell.style.cursor = 'pointer';
					cell.onpointerover = () => {
					if (cell.classList.contains('draw') !== false) {
						cell.style.background = 'none';
					}
				}
				})
		
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



		// const colourCanvas = document.createElement('canvas');
		// const colourCtx = colourCanvas .getContext('2d');

		// options.appendChild(colourCanvas);


		// let colour = 'rgba(0,0,255,1)';

		// let gradientH = colourCtx .createLinearGradient(0, 0, colourCtx .canvas.width, 0);
		// gradientH.addColorStop(0, '#fff');
		// gradientH.addColorStop(1, colour);
		// colourCtx .fillStyle = gradientH;
		// colourCtx .fillRect(0, 0, colourCtx .canvas.width, colourCtx .canvas.height);

		// let gradientV = colourCtx .createLinearGradient(0, 0, 0, 300);
		// gradientV.addColorStop(0, 'rgba(0,0,0,0)');
		// gradientV.addColorStop(1, '#000');
		// colourCtx .fillStyle = gradientV;
		// colourCtx .fillRect(0, 0, colourCtx .canvas.width, colourCtx .canvas.height);


		// colourCanvas.addEventListener('click', e => {
		// 	let x = e.clientX;
		// 	let y = e.clientY;
		// 	 pixel = colourCtx.getImageData(x,y,1,1)['data'];
		// 	 rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
		// 	console.log(rgb);
		// 	console.log(pixel);
		// 	container.style.background = rgb;
		// })


		// colourCanvas.classList.add('colourCanvas');


		






createGrid(gridSize.value);

