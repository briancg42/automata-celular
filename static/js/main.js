document.addEventListener('DOMContentLoaded', async (event) => {
    const canvas = document.getElementById('cellular-automata');
    const heroSection = document.querySelector('.hero-section');
    if (canvas && heroSection) {
        const ctx = canvas.getContext('2d');
        let width, height, cells;

        // Color gradient variables
        let startColor = [0, 123, 255]; // Bootstrap primary color
        let endColor = [23, 162, 184]; // Bootstrap info color
        let backgroundColor = [0, 0, 0]; // Default black background
        let currentGradient = [startColor, endColor];

        function initCells() {
            width = canvas.width = heroSection.offsetWidth;
            height = canvas.height = heroSection.offsetHeight;
            const cellSize = 5;
            const cols = Math.floor(width / cellSize);
            const rows = Math.floor(height / cellSize);
            cells = new Array(cols).fill(null).map(() => new Array(rows).fill(0));

            // Initialize with random cells
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    cells[i][j] = Math.random() > 0.5 ? 1 : 0;
                }
            }
        }

        function drawCells() {
            ctx.fillStyle = `rgb(${backgroundColor.join(',')})`;
            ctx.fillRect(0, 0, width, height);
            for (let i = 0; i < cells.length; i++) {
                for (let j = 0; j < cells[i].length; j++) {
                    if (cells[i][j] === 1) {
                        const gradientPosition = i / cells.length;
                        const color = interpolateColor(currentGradient[0], currentGradient[1], gradientPosition);
                        ctx.fillStyle = `rgba(${color.join(',')}, ${Math.random() * 0.5 + 0.1})`;
                        ctx.fillRect(i * 5, j * 5, 5, 5);
                    }
                }
            }
        }

        function updateCells() {
            const newCells = cells.map(arr => [...arr]);
            for (let i = 0; i < cells.length; i++) {
                for (let j = 0; j < cells[i].length; j++) {
                    const neighbors = countNeighbors(i, j);
                    if (cells[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
                        newCells[i][j] = 0;
                    } else if (cells[i][j] === 0 && neighbors === 3) {
                        newCells[i][j] = 1;
                    }
                }
            }
            cells = newCells;
        }

        function countNeighbors(x, y) {
            let count = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (i === 0 && j === 0) continue;
                    const col = (x + i + cells.length) % cells.length;
                    const row = (y + j + cells[0].length) % cells[0].length;
                    count += cells[col][row];
                }
            }
            return count;
        }

        function interpolateColor(color1, color2, factor) {
            return color1.map((channel, index) => {
                return Math.round(channel + (color2[index] - channel) * factor);
            });
        }

        function animate() {
            updateCells();
            drawCells();
            requestAnimationFrame(animate);
        }

        function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? [
                parseInt(result[1], 16),
                parseInt(result[2], 16),
                parseInt(result[3], 16)
            ] : null;
        }

        // Event listeners for color pickers
        const startColorPicker = document.getElementById('startColor');
        const endColorPicker = document.getElementById('endColor');
        const backgroundColorPicker = document.getElementById('backgroundColor');
        
        if (startColorPicker) {
            startColorPicker.addEventListener('input', (e) => {
                startColor = hexToRgb(e.target.value);
                currentGradient = [startColor, endColor];
            });
        }

        if (endColorPicker) {
            endColorPicker.addEventListener('input', (e) => {
                endColor = hexToRgb(e.target.value);
                currentGradient = [startColor, endColor];
            });
        }

        if (backgroundColorPicker) {
            backgroundColorPicker.addEventListener('input', (e) => {
                backgroundColor = hexToRgb(e.target.value);
            });
        }

        initCells();
        animate();

        window.addEventListener('resize', initCells);
    }
});