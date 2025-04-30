import './style.css';
import './components/modal.js';

import { renderNav } from './components/nav.js';

renderNav()

// Example content injection for the projects
const grid = document.querySelector('.grid');


export function renderProjects() {
  const grid = document.querySelector('.grid');
  if (!grid) {
    console.error("Grid element not found.");
    return;
  }



  grid.innerHTML = `
  <div class="grid-container">
        <div class="grid">

            <div onclick="openModal('modal1')" class="grid-item">
                <h2 class="Name">UI UX Internship</h2>
                <h2 class="Date">2024</h2>
                <img src="./src/images/simptel copy.jpg">
                <button class="more-button" onclick="openModal('modal1')">View Project</button>
            </div>

            <div onclick="openModal('modal2')" class="grid-item">
                <h2 class="Name">Jony Ive ode website</h2>
                <h2 class="Date">2025</h2>
                <img src="src/images/jony-project.jpg">
                <button class="more-button" onclick="openModal('modal2')">View Project</button>
            </div>

            <div onclick="openModal('modal4')" class="grid-item">
                <h2 class="Name">AIM Website redesign</h2>
                <h2 class="Date">2024</h2>
                <img src="src/images/aimx2.jpg">
                <button class="more-button" onclick="openModal('modal4')">View Project</button>
            </div>

             <!-- <div onclick="openModal('modal3')" class="grid-item">
              //  <h2 class="Name">F1 Driver Comparison</h2>
              //  <h2 class="Date">2025</h2>
              //  <img src="src/images/f1.jpg">
              //  <button class="more-button" onclick="openModal('modal3')">View Project</button>
            </div> -->

            <div onclick="openModal('modal5')" class="grid-item">
                <h2 class="Name">Artist Website</h2>
                <h2 class="Date">2022</h2>
                <img src="src/images/maaike.jpg">
                <button class="more-button" onclick="openModal('modal5')">View Project</button>
            </div>

            <div onclick="openModal('modal6')" class="grid-item">

                <h2 class="Name">Brandguide</h2>
                <h2 class="Date">2021</h2>
                <img src="src/images/unx.png">
                <button class="more-button" onclick="openModal('modal6')">View Project</button>
            </div>

            <div onclick="openModal('modal7')" class="grid-item">

                <h2 class="Name">Pets</h2>
                <h2 class="Date">2021</h2>
                <img src="src/images/petica.jpg">
                <button class="more-button" onclick="openModal('modal7')">View Project</button>
            </div>

            <div onclick="openModal('modal8')" class="grid-item">

                <h2 class="Name">React Calculator</h2>
                <h2 class="Date">2022</h2>
                <img src="src/images/calc.png">
                <button class="more-button" onclick="openModal('modal8')">View Project</button>

            </div>

            <div onclick="openModal('modal9')" class="grid-item">

                <h2 class="Name">kirby CSS</h2>
                <h2 class="Date">2021</h2>
                <img src="src/images/kirby.png">
                <button class="more-button" onclick="openModal('modal9')">View Project</button>

            </div>

            <div onclick="openModal('modal10')" class="grid-item">
                <h2 class="Name">Personal Projects</h2>
                <img src="src/images/about.png">
                <button class="more-button" onclick="openModal('modal10')">About Me</button>
            </div>
            <div onclick="openModal('modal10')" class="grid-item">
                <h2 class="Name">About Me</h2>
                <img src="src/images/me copy.jpg">
                <button class="more-button" onclick="openModal('modal10')">About Me</button>
            </div>
        </div>

        <!-- modals -->
        <div id="modal1" class="modal">
            <div class="modal-content header-project1">
                <span class="close" onclick="closeModal('modal1')"> &times;</span>
                <h1>Simptel Internship</h1>
                <div class="modal-text" style="position: relative;font-size: 14px; top: -30px;">
                    <P>Disclaimer: This project is confidential, so I cannot share specific details, images, or an
                        in-depth
                        breakdown of my process. However, this showcase offers a clear overview of the approach taken to
                        complete
                        this project.</P>
                </div>
                <div class="modal-header">
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TIMELINE</h2>
                            <p>September 2023 - January 2024 <br>(5 months)</p>
                        </div>
                    </div>
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>ROLE</h2>
                            <p>UX Researcher<br>UI Designer</p>
                        </div>
                    </div>

                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TOOLS</h2>
                            <p>Figma, TailwindCSS, Illustrator,<br>Photoshop</p>
                        </div>
                    </div>
                </div>
                <img src="src/images/simptel copy.jpg">
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Project Overview</h2>
                        </div>
                        <div class="column-text">
                            <p>Simptel is developing a customer-facing mobile app for its carrier client, TerraMobile.
                                The app will
                                enable users to reserve SIM cards, complete onboarding, and manage their telecom plans.
                                <br> <br>This MVP mirrors
                                functionalities found in apps like Mint Mobile and MyVodafone, aiming to enhance user
                                experience and
                                streamline service management.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Problem</h2>
                        </div>
                        <div class="column-text">
                            <p>
                                TerraMobile, a new telecom provider in Curaçao, needed a competitive, customer-facing
                                app.
                                Existing providers already offer digital self-service,
                                but there’s an opportunity to create a more intuitive and efficient solution.<br><br>
                                <br> As an intern, I aimed to deliver a design that sets TerraMobile apart with superior
                                UX.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Conclusion</h2>
                        </div>
                        <div class="column-text">
                            <p>
                                My internship at Simptel was a transformative experience that strengthened my skills,
                                deepened my understanding of UX/UI design, and taught me the value of adaptability and
                                initiative. Surrounded by a supportive team and guided by thoughtful mentors, I was able
                                to turn challenges into growth opportunities and deliver meaningful results. I now look
                                forward to bringing this mindset, along with the practical knowledge I gained, into
                                future projects and professional roles.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- modals 2 -->
        <div id="modal2" class="modal">
            <div class="modal-content header-project2">
                <button onclick="window.open('https://studycase01.vercel.app', '_blank')" class="more-button"><span
                        class="buttonLed live"></span>View Project</button>
                <span class="close" onclick="closeModal('modal2')"> &times;</span>
                <h1>Jony Ive Ode</h1>
                <div class="modal-text" style="position: relative;font-size: 14px; top: -30px;">
                    <P>Duo Project</P>
                </div>
                <div class="modal-header">
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TIMELINE</h2>
                            <p>3 weeks</p>
                        </div>
                    </div>
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>ROLE</h2>
                            <p>UX Researcher<br>UI Designer<br>Front-end developer</p>

                        </div>
                    </div>

                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TOOLS</h2>
                            <p>Figma, TailwindCSS, Photoshop, <br> React Three Fiber, React, Blender</p>

                        </div>
                    </div>
                </div>
                <img src="src/images/jony-project.jpg">
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Project Overview</h2>
                        </div>
                        <div class="column-text">
                            <p>For this project, we created an online tribute to Apple’s legendary designer Jony Ive. We
                                followed the Design Thinking process combined with Kanban to manage our tasks. The
                                tribute highlights his most iconic products and the people who inspired him.</p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Problem</h2>
                        </div>
                        <div class="column-text">
                            <p>
                                For this assignment we had to find and research iconic design and then its creator. We
                                had to research what made the design so influential and create a tribute to a designer
                                or design and present this in an inspiring interactive visual way.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Solution</h2>
                        </div>
                        <div class="column-text">
                            <p>
                                The tribute website was successfully developed and launched. It shows Jony Ive’s key
                                products and the designers who inspired him. The project included a system diagram and a
                                report with improvement tips.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Conclusion</h2>
                        </div>
                        <div class="column-text">
                            <p>
                                This project helped us understand what makes design timeless. We learned how to
                                translate research into a meaningful digital product. Working in a team, using design
                                methods and real feedback made the tribute stronger.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- end modal 2 -->

        <!-- modal 3 -->
        <div id="modal3" class="modal">
            <div class="modal-content header-project3">
                <button onclick="window.open('https://studycase01.vercel.app', '_blank')" class="more-button"><span
                        class="buttonLed live"></span>View Project</button>
                <span class="close" onclick="closeModal('modal3')"> &times;</span>
                <h1>F1 Driver Comparison</h1>
                <div class="modal-text" style="position: relative;font-size: 14px; top: -30px;">
                    <P>Duo project</P>
                </div>
                <div class="modal-header">
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TIMELINE</h2>
                            <p>2 Weeks</p>
                        </div>
                    </div>
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>ROLE</h2>
                            <p>UX Researcher<br>UI Designer<br>Front-end developer</p>
                        </div>
                    </div>

                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TOOLS</h2>
                            <p>Figma, Photoshop, <br>CSS, Javascript, API data</p>
                        </div>
                    </div>
                </div>
                <img src="src/images/f1.jpg">
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Project Overview</h2>
                        </div>
                        <div class="column-text">
                            <p>Our team developed an interactive F1 Driver Comparison App that allows users to compare
                                driver performance throughout the Formula 1 season. Users can view and analyze
                                race-by-race point differences, finishing positions, and fastest lap times.
                                Additionally, the app features a yearly Grand Prix schedule with track details, helping
                                fans stay up to date with upcoming races.</p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Problem</h2>
                        </div>
                        <div class="column-text">
                            <p>
                                For this assignment we had to design and realize a solution to make complex data
                                understandable,
                                tell a story and/or reveal connections in different datasets for a specific target
                                group.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Conclusion</h2>
                        </div>
                        <div class="column-text">
                            <p>
                                Although the project timeframe limited the complexity we could achieve, it was a
                                valuable learning experience. Working with a real API posed some challenges, especially
                                when structuring and retrieving the right data, but it gave me a better understanding of
                                handling external data sources. I also learned a lot about improving user experience
                                through small details like implementing a smooth loading animation and handling states
                                properly. Overall, this project helped me grow both technically and creatively, and I’m
                                proud of what I was able to build within the constraints.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- modal 4 -->
        <div id="modal4" class="modal">
            <div class="modal-content header-project4">
                <button
                    onclick="window.open('https://www.figma.com/proto/I1UdTy4YM0hJEThqOKuSqD/aim-showcase?page-id=0%3A1&node-id=1-34&viewport=405%2C141%2C0.14&t=3qPXSqlN38NQ9hyB-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A34', '_blank')"
                    class="more-button"><span class="buttonLed live"></span>View Prototype</button>
                <span class="close" onclick="closeModal('modal4')"> &times;</span>
                <h1>Website redesign & Brandguide</h1>
                <div class="modal-text" style="position: relative;font-size: 14px; top: -30px;">
                    <P>Group Project</P>
                </div>
                <div class="modal-header">
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TIMELINE</h2>
                            <p>6 Weeks</p>
                        </div>
                    </div>
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>ROLE</h2>
                            <p>UI/UX Designer<br>Front-end devolper<br>Graphic design</p>
                        </div>
                    </div>

                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TOOLS</h2>
                            <p>Figma, CSS, Javascript,<br>Photoshop, Illustrator</p>
                        </div>
                    </div>
                </div>

                <a data-fancybox data-type="pdf" href="https://drive.google.com/file/d/1Icn7gcX7VkEFQvMUTns4jMBsvC6oklxS/view?usp=drive_link">

                    <img src="src/images/aim.jpg" alt="PDF Thumbnail" />
                </a>


                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Project Overview</h2>
                        </div>
                        <div class="column-text">
                            <p>The goal of this project was to reimagine and redesign the identity and digital presence
                                of AMAI (Afternoon Meetings on AI), a weekly AI discussion group within Fontys. Our
                                challenge was to transform their outdated website into a modern, user-friendly platform
                                that not only reflects the innovative spirit of AI but also helps the community grow by
                                improving accessibility, usability, and engagement.
                                <br><br>
                                The project involved rebranding AMAI with a fresh name, logo, and visual identity, as
                                well as building a new website that better serves their needs. This included simplifying
                                the process for scheduling talks, uploading materials, and keeping users informed about
                                meeting updates. Additionally, we focused on understanding and reaching the right target
                                audiences through research and testing.

                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Problem</h2>
                        </div>
                        <div class="column-text">
                            <p>
                                AMAI’s current platform lacks the functionality and visual appeal needed to support and
                                grow its AI community. The website is difficult to manage, offers limited interactivity,
                                and fails to engage new users or speakers due to an unclear brand identity and lack of
                                insight into its target audience. The challenge was to redefine AMAI's online presence
                                by creating a compelling new brand and an intuitive, flexible web experience that
                                encourages knowledge sharing, participation, and visibility within and beyond the Fontys
                                community.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Conclusion</h2>
                        </div>
                        <div class="column-text">
                            <p>
                                This project allowed me to significantly grow my graphic design and branding skills. By
                                developing a complete brand guide including a redesigned logo, color palette, and visual
                                identity, I was able to translate abstract values into a clear and appealing design
                                system. Working in a team using Agile Scrum taught me how to manage tasks effectively,
                                collaborate closely, and iterate based on feedback.<br> <br> I also deepened my
                                understanding of front-end development by exploring new technologies like Three.js and
                                shaders, which helped bring a more dynamic and futuristic feel to the project, fitting
                                for an AI-focused platform. Overall, this project was a great blend of design, research,
                                and tech, and I’m proud of what we achieved for the AMAI community.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- modal 5 -->
        <div id="modal5" class="modal">
            <div class="modal-content header-project5">
                <button onclick="window.open('https://maaikewebsite.vercel.app/', '_blank')" class="more-button"><span
                        class="buttonLed live"></span>View Live Project</button>
                <span class="close" onclick="closeModal('modal5')"> &times;</span>
                <h1>Artist Website</h1>
                <div class="modal-text" style="position: relative;font-size: 14px; top: -30px;">
                    <P>Group Project</P>
                </div>
                <div class="modal-header">
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TIMELINE</h2>
                            <p>5 months</p>
                        </div>
                    </div>
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>ROLE</h2>
                            <p>UI/UX Designer<br>Front-end developer</p>
                        </div>
                    </div>

                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TOOLS</h2>
                            <p>Figma, TailwindCSS, Illustrator,<br>Photoshop</p>
                        </div>
                    </div>
                </div>

                <a data-fancybox data-type="pdf" href="https://drive.google.com/file/d/1Qd3OJ7Ob9rXYj3JK12gGZh8TXIBv7Jlb/view?usp=drive_link">

                    <img src="src/images/maaike copy.jpg" alt="PDF Thumbnail" />
                </a>

                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Problem Overview</h2>
                        </div>
                        <div class="column-text">
                            <p>How can we promote the music of Maaike Girardin and to apply her style in the website?
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>solution</h2>
                        </div>
                        <div class="column-text">
                            <p>
                                A one-pager website that briefly explains who Maaike Girardin is. Some of her songs and
                                Upcoming events.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Conclusion</h2>
                        </div>
                        <div class="column-text">
                            <p>
                                The semester 2 group project was a positive experience. We collaborated well, recognized
                                each
                                other’s strengths, and used them effectively. One of the best aspects was how we tackled
                                deliverables together, keeping motivation high throughout. Clear communication and
                                teamwork
                                played a big role in the success of our system. Overall, it helped me grow in
                                collaboration and
                                time management.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- modal 6 -->

        <div id="modal6" class="modal">
            <div class="modal-content header-project6">
                <button onclick="window.open('https://drive.google.com/file/d/1sDGihjwOsCHBFqEuo8mL1G2NdoM75yNT/view?usp=drive_link', '_blank')"
                    class="more-button"><span class="buttonLed live"></span>View Brandguide</button>
                <span class="close" onclick="closeModal('modal6')"> &times;</span>
                <h1>Brandguide</h1>

                <div class="modal-header ">
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TIMELINE</h2>
                            <p>2 Weeks</p>
                        </div>
                    </div>
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>ROLE</h2>
                            <p>Graphic Design</p>
                        </div>
                    </div>
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TOOLS</h2>
                            <p>Illustrator</p>
                        </div>
                    </div>
                </div>
                <a data-fancybox data-type="pdf" href="https://drive.google.com/file/d/1sDGihjwOsCHBFqEuo8mL1G2NdoM75yNT/view?usp=drive_link">

                    <img src="src/images/unx copy.jpg" alt="PDF Thumbnail" />
                </a>

                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Project Overview</h2>
                        </div>
                        <div class="column-text">
                            <p>Create a fully-branded virtual media agency in a collaborative team setting, simulating a
                                real-world creative agency experience.</p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Results</h2>
                        </div>
                        <div style="flex-direction: column; font-size: 22px;" class="column-text ">
                            <li>Team communication & role delegation</li>
                            <li>Branding & logo design</li>
                            <li>Visual identity development</li>
                            <li>Presentation & pitching</li>
                            <li>Team communication & role delegation</li>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <!-- modal 7 -->
        <div id="modal7" class="modal">
            <div class="modal-content header-project7">
                <button onclick="window.open('https://drive.google.com/file/d/1Lsv7YL2alsBbWyY_d7dndZ3h8jYp3685/view?usp=drive_link', '_blank')" class="more-button">View
                    Brandguide
                </button>
                <span class="close" onclick="closeModal('modal7')"> &times;</span>
                <h1>Pet Finder</h1>

                <div class="modal-header">
                    <div class="modal-column">
                        <div class="modal-text">

                            <h2>TIMELINE</h2>
                            <p>5 months</p>
                        </div>
                    </div>
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>ROLE</h2>
                            <p>UX Researcher<br>UI Designer<br>Front-end developer</p>
                        </div>
                    </div>
                    <div class="modal-column">
                        <div class="modal-text">
                            <h2>TOOLS</h2>
                            <p>Figma, Ilustrator, <br>Javascript, HTML, CSS</p>
                        </div>
                    </div>
                </div>
                <a data-fancybox data-type="pdf" href="https://drive.google.com/file/d/1Lsv7YL2alsBbWyY_d7dndZ3h8jYp3685/view?usp=drive_link">

                    <img src="src/images/petica.jpg" alt="PDF Thumbnail" />
                </a>



                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Project Overview</h2>
                        </div>
                        <div class="column-text">
                            <p>How can a digital pet suggestor be created so that it helps people choose the right pet
                                for them
                                without wasting time and money?</p>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Solution</h2>
                        </div>
                        <div class="column-text">
                            <p>Create a website that engages users with a series of targeted questions. Based on their
                                responses,
                                the site will recommend the most suitable pet for each individual. These questions will
                                focus on
                                understanding the user’s daily routine and habits, as different animals have varying
                                care
                                requirements. Additionally, the website will provide a map of nearby pet shops, enabling
                                users to
                                visit and adopt the recommended pet once they’ve made their choice.</p>
                            </p>
                        </div>
                    </div>
                </div>


                <div class="petica-images">
                    <img src="src/images/petica1.png">
                    <img src="src/images/petica4.png">
                    <img src="src/images/petica3.png">
                    <img src="src/images/petica2.png">
                </div>
            </div>
        </div>
        <!-- modal 8 -->
        <div id="modal8" class="modal">
            <div class="modal-content header-project8">
                <button onclick="window.open('https://semester-3-website-2.vercel.app/', '_blank')"
                    class="more-button"><span class="buttonLed live"></span>View live Project</button>
                <span class="close" onclick="closeModal('modal8')"> &times;</span>
                <h1>React Calculator</h1>

                <div class="modal-header ">
                    <div class="modal-column">
                        <h2>TIMELINE</h2>
                        <p>1 Week</p>
                    </div>
                    <div class="modal-column">
                        <h2>ROLE</h2>
                        <p>Front-end developer</p>
                    </div>
                    <div class="modal-column">
                        <h2>TOOLS</h2>
                        <p>React, Javascript, CSS</p>
                    </div>
                </div>
                <img src="src/images/calc.png">
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Project Overview</h2>
                        </div>
                        <div class="column-text">
                            <p>For the second hacker challenge, I built a calculator application using the React
                                framework. This choice was inspired by insights I gained during a career day, where I
                                learned that many companies rely on React for developing modern web applications. This
                                motivated me to explore React through a hands-on project and gain practical experience
                                with the framework.
                                <br><br>
                                To build the calculator, I followed a comprehensive tutorial that walked through both
                                the code and the reasoning behind each part. This approach helped me understand key
                                React concepts such as components, which promote code reusability, and hooks like
                                useReducer, which allow for more advanced state management. Through this project, I got
                                a feel for how React structures applications and handles user interactions dynamically.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Project Overview</h2>
                        </div>
                        <div class="column-text">
                            <p>While the project was ultimately successful, it was more complex than I initially
                                anticipated. In hindsight, starting with a simpler React project would have allowed me
                                to gradually build my understanding of the framework before diving into more advanced
                                concepts like reducers. Nevertheless, this challenge provided a valuable learning
                                experience, as it pushed me to engage deeply with React fundamentals. I now feel more
                                confident in using components, managing state, and reading React-based code — skills
                                that will benefit future projects and my growth as a developer.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <!-- modal 9 -->
        <div id="modal9" class="modal">
            <div class="modal-content header-project9">
                <button onclick="window.open('https://codepen.io/jordan-philbert/pen/RwjXZxm', '_blank')"
                    class="more-button">
                    <span class="buttonLed live"></span>
                    View Live Project
                </button>
                <span class="close" onclick="closeModal('modal9')"> &times;</span>
                <h1>Kirby CSS</h1>

                <div class="modal-header ">
                    <div class="modal-column">
                        <h2>TIMELINE</h2>
                        <p>1 Day</p>
                    </div>
                    <div class="modal-column">
                        <h2>ROLE</h2>
                        <p>Front-end developer</p>
                    </div>
                    <div class="modal-column">
                        <h2>TOOLS</h2>
                        <p>Javascript, HTML, CSS</p>
                    </div>
                </div>
                <img src="src/images/kirby.png">
                <div class="text-container">
                    <div class="column-text">
                        <div class="modal-text">
                            <h2>Challenge</h2>
                        </div>
                        <div class="column-text">
                            <p>Creating Kirby with just CSS is not much of a challenge because with transform,
                                border-radius,
                                box-shadow, it is easy to create. It’s because everything can be drawn with circles -
                                and
                                border-radius is perfect for that.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- modals 10 -->
        <div id="modal10" class="modal">
            <div class="modal-content header-project1">
                <span class="close" onclick="closeModal('modal10')"> &times;</span>


                <div class="about-container">
                    <div class="about-column">
                        <div class="about-img">
                            <img src="src/images/me copy.jpg">
                        </div>
                        <H2>Jordan Philbert</H2>
                        <hr style="width: 10% ;">
                        <H2>Front-end developer</H2>
                        <H2>UX/UI DESIGNER</H2>
                    </div>
                    <div class="about-column">
                        <H2>Hi There 😄👋🏼</H2>
                        <p>I'm a passionate UX Researcher who aims to uncover users' preferences, behaviors, and pain
                            points to gain valuable insights that lead to improved products for all. Thanks to my Media
                            Design background, I can translate these insights into user-friendly designs.
                            <br>
                            <br>
                            Beyond that, I'm a curious learner, always eager to explore new horizons within the UX field
                            and other IT domains.
                            <br>
                            <br>
                            Interested?
                            Let's connect and explore the possibilities together!😁
                        </p>

                        <div class="button-container">
                         <a data-fancybox data-type="pdf" href="https://drive.google.com/file/d/1-GiamI2PZ-ACSTgTXbJ7zqZvFat9zhIV/view?usp=drive_link">
                              <button class="about-btn">
                                <span class="span-mother">
                                  <span>C</span>
                                  <span>V</span>
                                </span>
                                <span class="span-mother2">
                                  <span>C</span>
                                  <span>V</span>
                                </span>
                              </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-stack-container">
                    <h2>Personal projects</h2>
                    <div class="card-stack">

                        <div class="card" data-bg="#39FF14">
                            <a href="https://github.com/user-attachments/assets/04283d6b-ab71-4bd9-b1ad-82cc81df470a" data-type="image" data-fancybox="gallery"
                                data-caption="Car poster - Illustrator">
                                <img src="https://github.com/user-attachments/assets/04283d6b-ab71-4bd9-b1ad-82cc81df470a" alt="Card 1" />
                            </a>
                        </div>

                        <div class="card" data-bg="#C60000">
                            <a href="https://vimeo.com/1079394883" data-fancybox="gallery"
                                data-caption="Lewis Hamilton Ferrari edit - After effects" data-type="video"
                                data-thumb="src/images/LWF.jpg">
                                <img src="src/images/LWF.jpg" alt="Card 2 thumbnail" />
                            </a>
                        </div>

                        <div class="card" data-bg="#A5E74E">
                            <a href="https://github.com/user-attachments/assets/2ae8bf90-7caa-403e-96ed-b78acffe0829" data-fancybox="gallery"
                                data-caption="Car poster - Illustrator">
                                <img src="https://github.com/user-attachments/assets/2ae8bf90-7caa-403e-96ed-b78acffe0829" alt="Card 3" />
                            </a>
                        </div>

                        <div class="card" data-bg="#F7F7F7">
                            <a href="https://github.com/user-attachments/assets/c4927cf4-f099-45d2-8dbe-f351cf95ce9f" data-fancybox="gallery"
                                data-caption="Logo for client - Illustrator">
                                <img src="https://github.com/user-attachments/assets/c4927cf4-f099-45d2-8dbe-f351cf95ce9f" alt="Card 4" />
                            </a>
                        </div>

                        <div class="card" data-bg="#EA2D3F">
                            <a href="https://github.com/user-attachments/assets/8bdc95d4-ff1c-4afb-994c-a8bf20370097" data-fancybox="gallery" data-caption="NBA Poster - Photoshop">
                                <img src="https://github.com/user-attachments/assets/8bdc95d4-ff1c-4afb-994c-a8bf20370097" alt="Card 5" />
                            </a>
                        </div>

                        <div class="card" data-bg="#E5E5E5">
                            <a href="https://github.com/user-attachments/assets/f1937a1f-578c-47cb-b431-c3a608471a20" data-fancybox="gallery"
                                data-caption="Logo for client - Illustrator">
                                <img src="https://github.com/user-attachments/assets/f1937a1f-578c-47cb-b431-c3a608471a20" alt="Card 6" />
                            </a>
                        </div>

                        <div class="card" data-bg="#4C4C4C">
                            <a href="https://github.com/user-attachments/assets/87fce5eb-14ab-4a37-a0d4-72bc31a129bf" data-fancybox="gallery"
                                data-caption="Poster fighter jet - Illustrator">
                                <img src="https://github.com/user-attachments/assets/87fce5eb-14ab-4a37-a0d4-72bc31a129bf" alt="Poster fighter jet - Illustrator" />
                            </a>
                        </div>

                        <div class="card" data-bg="#1E1E1E">
                            <a href="https://github.com/user-attachments/assets/1e20051d-547d-4e65-9556-c58b8e15c53b" data-fancybox="gallery" data-caption="Abstract Poster">
                                <img src="https://github.com/user-attachments/assets/1e20051d-547d-4e65-9556-c58b8e15c53b" alt="Card " />
                            </a>
                        </div>

                        <div class="card" data-bg="#2C2F35">
                            <a href="https://github.com/user-attachments/assets/6959c5ed-d99c-407f-b752-a7a580e53d02" data-fancybox="gallery"
                                data-caption="Car poster - Illustrator">
                                <img src="https://github.com/user-attachments/assets/6959c5ed-d99c-407f-b752-a7a580e53d02" alt="Card 9" />
                            </a>
                        </div>

                        <div class="card" data-bg="#FFD100">
                            <a href="https://github.com/user-attachments/assets/29764ae3-3224-4090-bbf9-e0420a54af2a" data-fancybox="gallery"
                                data-caption="Car poster - illustrator">
                                <img src="https://github.com/user-attachments/assets/29764ae3-3224-4090-bbf9-e0420a54af2a" alt="Card 10" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `;
}



renderProjects();
