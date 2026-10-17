import { useEffect, useState } from "react";
import "./styles.css";
import HoloCard from "./HoloCard";
import CircularCarousel from "./CircularCarousel";
import LogoLoop from "./LogoLoop";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const skillItems = [
  { src: "/html.png", alt: "HTML", title: "HTML" },
  { src: "/css.png", alt: "CSS", title: "CSS" },
  { src: "/js.png", alt: "JavaScript", title: "JavaScript" },
  { src: "/react.png", alt: "React", title: "React" },
  { src: "/vscode.png", alt: "VS Code", title: "VS Code" },
  { src: "/git.png", alt: "Git", title: "Git" },
  { src: "/github.png", alt: "GitHub", title: "GitHub" },
  { src: "/figma.png", alt: "Figma", title: "Figma" },
];

// Light placeholder shown for project slots that don't have an image yet.
const blankPlaceholder = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="700" height="394">' +
    '<rect width="100%" height="100%" fill="#d9d9d9"/>' +
    '<text x="50%" y="50%" font-family="sans-serif" font-size="28" fill="#8a8a8a" text-anchor="middle" dominant-baseline="middle">Add Photo</text>' +
    "</svg>"
)}`;

const projectItems = [
  {
    src: "/siklab.png",
    alt: "Siklab project preview",
    title: "Siklab",
    subtitle: "Project 1",
    href: "https://www.figma.com/design/WSL2c4wKWHOZznEZpfeWP6/Siklab?node-id=848-549&t=nn4ZoPuWIWHRJkAU-1",
  },
  {
    src: "/todos.png",
    alt: "To-Dos app preview",
    title: "To-Dos App",
    subtitle: "Project 2",
    href: "https://awesometodosapp-lvhx.onrender.com",
  },
  {
    src: "/pawloc.svg",
    alt: "Pawloc app preview",
    title: "Pawloc",
    subtitle: "Project 3",
    href: "https://pawloc.vercel.app/?fbclid=IwY2xjawUrN9pleHRuA2FlbQIxMABwZG9mBWJyaWQRMUN4NmhTQ2g2RnR0d1ZZZm1zcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeJvA7yYw8ZnuW-B-1BT8JKmgi1SpzsjZqy7rg--tED7GKgZSllXmprC0zVHI_aem_PKcoUTNC6wPe8bYD79Lxtw#/shelters",
  },
  {
    src: "/portfolio.png",
    alt: "Web Portfolio preview",
    title: "Web Portfolio",
    subtitle: "Project 4",
    href: "https://jayson-alvissi-portfolio.vercel.app/"
  },
  {
    src: "/devify.png",
    alt: "Devify preview",
    title: "Devify",
    subtitle: "Project 5",
    href: "https://www.figma.com/design/RcEAgcitjEzZQlW6RD0miK/DEVIFY?node-id=440-281&p=f&t=ZBUB80a3lGs8fXvV-0"
  },
  {
    src: "/UIChallenge1.png",
    alt: "Project 5 preview, not yet added",
    title: "UI Challenge 1",
    subtitle: "Project 6",
    href: "https://www.figma.com/design/RFzAaYmWcYPVkQGZGe8c37/JaysonAlvissi_UIChallenge1?t=6GQ3KtGrg8D7TQzY-0"
  },
  {
    src: "/UIChallenge2.png",
    alt: "Project 5 preview, not yet added",
    title: "UI Challenge 2",
    subtitle: "Project 7",
    href: "https://www.figma.com/design/ckNwrmnEIcjoejwR14s871/JaysonAlvissi_UIChallenge2?node-id=0-1&p=f&t=6GQ3KtGrg8D7TQzY-0"
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar container">
        <div className="logo">Jayson Alvissi</div>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </a>
          ))}
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
              <a className="btn" href="/Alvissi_Resume.pdf" download>
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
            <HoloCard
              image="/photo.png"
              alt="Jayson Alvissi portrait"
              preset="bursts"
              intensity={0.15}
              glare={0.25}
              edgeSparkle={0.5}
              frame={6}
              width={500}
              radius={0}
              tiltMax={12}
              hoverScale={1.03}
            />
          </div>
        </section>

        <hr />

        {/* PROJECTS */}
        <section id="projects" className="projects container">
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-carousel">
            <CircularCarousel
              items={projectItems}
              preset="cylinder"
              intro="rise"
              cardWidth={460}
              aspectRatio={16 / 9}
              gap={60}
              speed={10}
              autoplay="drift"
              pauseOnHover
              captions
              fadeColor="#eeeeee"
              cornerRadius={14}
              onItemClick={(item) => {
                if (item.href) {
                  window.open(item.href, "_blank", "noopener");
                }
              }}
            />
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

          <div className="skills-loop">
            <LogoLoop
              logos={skillItems}
              speed={70}
              direction="left"
              logoHeight={72}
              gap={64}
              fadeOut
              scaleOnHover
              muted={1}
              labels="hover"
              ariaLabel="Tools and technologies"
            />
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