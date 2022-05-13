const container = document.getElementById('container');

for (let j = 0; j < 16; j++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');
		container.appendChild(cell);
			for (let i = 0; i < 16; i++) {
				const cell2 = document.createElement('div');
				cell2.classList.add('cell')
				container.appendChild(cell2);
				}
		}
