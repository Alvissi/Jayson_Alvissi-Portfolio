import "./styles.css";
function App() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar container">
        <div className="logo">Jayson Alvissi</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero container">
          <div className="hero-text">
            <p className="intro">Hi, I'm</p>
            <h1>Jayson P. Alvissi</h1>
            <h2>UX Designer</h2>

            <p className="quote">
              I design experiences that help people complete tasks quickly and
              without confusion, making every step clear and easy to follow.
            </p>

            <div className="hero-actions">
              <a className="btn" href="/MyResume.pdf" download>
                Download CV
              </a>

              <div className="icons">
                <a
                  href="https://www.facebook.com/Jaysonalvz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-globe"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/jayson-alvissi-04a9743b9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

                <a href="mailto:alvissijayson@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                </a>

                <a
                  href="https://github.com/Alvissi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-photo">     
     <img src="/photo.png" alt="Photo portrait" />

</div>
        </section>

        <hr />

        {/* PROJECTS */}
        <section id="projects" className="projects container">
          <h2 className="section-title">Featured Projects</h2>

          <div className="project-grid">
            <article className="project-card">
              <img src="/siklab.png" alt="" />
              <a href="https://www.figma.com/design/WSL2c4wKWHOZznEZpfeWP6/Siklab?node-id=848-549&t=nn4ZoPuWIWHRJkAU-1" className="project-link">
                View Project
              </a>
            </article>

            <article className="project-card">
              <img src="/todos.png" alt="" />
              <a href="https://awesometodosapp-lvhx.onrender.com" className="project-link">
                View Project
              </a>
            </article>
          </div>
        </section>

        <hr />

        {/* ABOUT */}
        <section id="about" className="about container">
          <h2 className="section-title">About Me</h2>

          <div className="about-text">
            <p>
              I'm a UX Designer based in Iloilo City. I design experiences that
              help people complete tasks quickly and without confusion,
              focusing on clarity, structure, and ease of use in every
              interaction.
            </p>

            <p>
              I'm currently a student at Western Institute of Technology,
              where I continue to learn and apply UX principles through academic
              and personal projects. I enjoy simplifying complex ideas into
              clear and understandable solutions.
            </p>

            <p>
              In my work, I focus on understanding user needs, organizing
              information effectively, and creating interfaces that feel
              intuitive from the first interaction. I aim to design products
              that are not only functional, but also easy to navigate and
              consistent across different user flows.
            </p>
          </div>

          <h3 className="cap-title">Capabilities</h3>

          <div className="skills">
            <div className="skills-top">
              <img src="/html.png" alt="" />
              <img src="/css.png" alt="" />
              <img src="/js.png" alt="" />
              <img src="/react.png" alt="" />
            </div>

            <div className="skills-bottom">
              <img src="/vscode.png" alt="" />
              <img src="/git.png" alt="" />
              <img src="/github.png" alt="" />
              <img src="/figma.png" alt="" />
            </div>
          </div>
        </section>

        <hr />

        {/* CONTACT */}
        <section id="contact" className="contact container">
          <h2 className="section-title">Get in Touch</h2>

          <p className="contact-text">
            I'm open to opportunities, collaborations, or feedback. Feel free to reach out.
          </p>

          <div className="contact-icons">
            <a
              href="https://www.facebook.com/Jaysonalvz"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-globe"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/jayson-alvissi-04a9743b9/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="mailto:alvissijayson@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>

            <a
              href="https://github.com/Alvissi"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;