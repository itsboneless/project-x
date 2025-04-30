import './style.css';
import { renderNav } from './components/nav.js';
import { renderHero } from './components/hero.js';
import { renderProjects } from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderProjects();
});