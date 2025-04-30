import '../components/weather.js';

export function renderHero() {
  const hero = document.getElementById('hero');
  hero.innerHTML = `
    <div class="background">
      <div class="background-column">
        <div class="text-wrapper">
          <div class="text">
            <h1>JoRDan PhiLberT</h1>
            <p>A collection of creative work, past and present.
              From internship projects to three-week builds, posters, logos, and brand guides.
              Some made for today, others created with tomorrow in mind, and a few designed for the future.
            </p>
          </div>
        </div>
      </div>
      <div class="background-column">
        <div class="lastupdated">Last Updated 25 04 2025</div>
      </div>
      <div class="background-column">
        <div class="weather-container">
          <p class="country"></p>
          <img class="icon" alt="Weather icon">
          <p class="temp"></p>
        </div>
      </div>
    </div>
  `;
}
