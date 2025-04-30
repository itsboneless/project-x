import '../styles/nav.css';

export function renderNav() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = `
    <header class="menu">
      <nav class="navbar">
        <a href="/">Home</a>
        <a href="/projects.html">Projects</a>
        <a href="#" onclick="openModal('modal10'); return false;">About</a>
        <a data-fancybox data-type="pdf" href="https://drive.google.com/file/d/1-GiamI2PZ-ACSTgTXbJ7zqZvFat9zhIV/view?usp=drive_link">CV</a>
      </nav>
    </header>
    `;
  }