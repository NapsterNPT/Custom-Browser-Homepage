document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.grid-container');
  config.cells.forEach(cell => {
    const a = document.createElement('a');
    a.className = 'box';
    a.href = cell.url || '#';
    a.target = '_blank';
    if (cell.url) a.rel = 'noopener';

    if (cell.cols > 1) a.style.gridColumn = `span ${cell.cols}`;
    if (cell.rows > 1) a.style.gridRow = `span ${cell.rows}`;

    const h2 = document.createElement('h2');
    h2.textContent = cell.title;
    a.appendChild(h2);

    if (cell.icon) {
      const img = document.createElement('img');
      img.src = cell.icon;
      img.alt = cell.title + ' Logo';
      a.appendChild(img);
    }

    container.appendChild(a);
  });
});
