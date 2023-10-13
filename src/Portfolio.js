// src/Portfolio.js
import React from 'react';
import projectData from './projectData';
import contactData from './contactData';
import Header from './Header';
import 'font-awesome/css/font-awesome.min.css';

function Portfolio() {
    const { name, email, phone, location, website, social } = contactData;

  return (
    <div>
       <header>
        <h1 class="head">Praneeth</h1>
        <Header />
      </header>
      <main>
      <h2>About Me</h2>
        <section class="background">
          <p> "Hey there, I'm Praneeth, a B.Tech student by day and a coding enthusiast by night. With a passion for HTML 💻, CSS 🎨, JavaScript ⚡, Python 🐍, and Java ☕, I'm on a mission to conquer the digital world, one line of code at a time. 🚀

When I'm not crafting websites or debugging code, you'll find me immersed in the world of movies 🎥 and music 🎶. I'm a firm believer in the power of storytelling 📖 and the magic of a well-tuned melody 🎵, which is why I'm as dedicated to cinema and tunes as I am to coding.

Whether I'm bringing a website to life or exploring the creative realms of cinema and music, I approach every endeavor with curiosity 🧐 and a touch of rebellious spirit 😎. If you're searching for a web developer who's both a tech enthusiast and a pop culture aficionado 🤓, you've come to the right place."
          </p>
        </section>
        <section class="section-spacing">
  <h2 class="heading-spacing h">Education</h2>

  <div class="background">
    <h3 class="heading-spacing h3">Bachelor of Technology in Computer Science</h3>
    <p class="paragraph-spacing"><strong>University Name:</strong>VIT-AP</p>
    <p class="paragraph-spacing"><strong>Location:</strong> [Amaravathi, Andhra Pradesh]</p>
    <p class="paragraph-spacing"><strong>Graduation Date:</strong> [May 2025]</p>
  </div>
  <div class="background">
    <h3 class="heading-spacing h3">Intermediate</h3>
    <p class="paragraph-spacing"><strong>College Name:</strong>Tirumala Junior College</p>
    <p class="paragraph-spacing"><strong>Location:</strong> [Rajahmundry, Andhra Pradesh]</p>
    <p class="paragraph-spacing"><strong>Graduation Date:</strong> [June 2021]</p>
  </div>
  <div class="background">
    <h3 class="heading-spacing h3">SSC</h3>
    <p class="paragraph-spacing"><strong>University Name:</strong>Sri Siddhartha School</p>
    <p class="paragraph-spacing"><strong>Location:</strong> [Ravulapalem, Andhra Pradesh]</p>
    <p class="paragraph-spacing"><strong>Graduation Date:</strong> [March 2019]</p>
  </div>
</section>

      <section>
        <h2>Projects</h2>
        <div className="projects">
          {projectData.map((project) => (
            <div key={project.id} className="project background">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Technologies used: {project.technologies.join(", ")}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Contact Me</h2>
        <div class="background">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
          <li>
            <strong>Location:</strong> {location}
          </li>
        </ul></div></section>
      <footer>
  <div class="background">
    
    <ul>
        <li class="icon"><a href="https://www.instagram.com/praaneethhh"><i className="fa fa-instagram"></i>Instagram</a></li>
        <li class="icon"><a href="https://www.twitter.com/PraneethK08"><i className="fa fa-twitter"></i>Twitter</a></li>
        <li class="icon"><a href="https://github.com/PraneethKotha08"><i className="fa fa-github"></i>GitHub</a></li>
    </ul>
    <p>&copy; 2023 Praneeth Kotha. All rights reserved.</p>
  </div>
</footer>
      </main>
    </div>
  );
}

export default Portfolio;
