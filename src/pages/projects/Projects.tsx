import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Sparkles,
  X,
} from "lucide-react";

import Background from "../../components/Background";
import "./Projects.css";

const projectsContent = {
  eyebrow: "MY WORK",

  title: {
    first: "Projects I've",
    highlight: " built.",
  },

  description:
    "A collection of interfaces, applications and digital experiences I've built while exploring modern frontend development.",

  featured: {
    number: "01",
    label: "FEATURED PROJECT",
    title: "Your Featured Project",
    description:
      "A modern web application focused on creating a clean, responsive and engaging user experience. Built with reusable components and modern frontend technologies.",

    technologies: [
      "React",
      "TypeScript",
      "CSS",
      "React Router",
    ],

    image: "/projects/project-one.jpg",

    github: "https://github.com/",
    live: "https://example.com/",
  },

  projects: [
    {
      number: "02",
      title: "Project Two",
      description:
        "A responsive web experience designed with a strong focus on usability, performance and visual detail.",

      technologies: [
        "React",
        "JavaScript",
        "CSS",
      ],

      image: "/projects/project-two.jpg",

      github: "https://github.com/",
      live: "https://example.com/",
    },

    {
      number: "03",
      title: "Project Three",
      description:
        "A professional construction website showcasing reliable building services, quality workmanship, and completed projects while helping clients bring their construction ideas to life.",

      technologies: [
        "React",
        "TypeScript",
        "CSS",
      ],

      image: "/projects/project-three.jpg",

      github: "https://github.com/",
      live: "https://example.com/",
    },

    {
      number: "04",
      title: "Project Four",
      description:
        "A modern farm website showcasing fresh, locally grown produce, sustainable farming practices, and quality agricultural products while connecting customers with the farm.",

      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
      ],

      image: "/projects/project-four.jpg",

      github: "https://github.com/",
      live: "https://foodhub-official.vercel.app/",
    },
  ],

  capabilities: [
    {
      icon: Layers3,
      title: "Web Applications",
      description:
        "Interactive applications built with reusable components and modern frontend architecture.",
    },

    {
      icon: Sparkles,
      title: "Digital Experiences",
      description:
        "Modern interfaces with thoughtful interactions, animations and strong visual hierarchy.",
    },

    {
      icon: ExternalLink,
      title: "Responsive Websites",
      description:
        "Responsive websites designed to work beautifully across desktop, tablet and mobile devices.",
    },
  ],
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".projects-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("projects-lightbox-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("projects-lightbox-open");
    };
  }, [selectedImage]);

  const openImagePreview = (image: string, title: string) => {
    setSelectedImage({
      src: image,
      title,
    });
  };

  return (
    <div className="projects-page">
      <Background />

      <main className="projects-main">
        <section className="projects-hero">
          <div className="projects-container">
            <div className="projects-label">
              <span>01</span>
              <div></div>
              <span>{projectsContent.eyebrow}</span>
            </div>

            <div className="projects-hero-content">
              <h1>
                {projectsContent.title.first}
                <span>{projectsContent.title.highlight}</span>
              </h1>

              <p>{projectsContent.description}</p>
            </div>

            <div className="projects-hero-scroll">
              <span>EXPLORE MY WORK</span>

              <div className="projects-scroll-line">
                <span></span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-featured">
          <div className="projects-container">
            <div className="projects-section-heading projects-reveal">
              <div className="projects-label">
                <span>02</span>
                <div></div>
                <span>FEATURED PROJECT</span>
              </div>

              <h2>
                A closer look at
                <span> what I build.</span>
              </h2>
            </div>

            <article className="projects-featured-card projects-reveal">
              <div className="projects-featured-preview">
                <div className="projects-browser">
                  <div className="projects-browser-bar">
                    <div className="projects-browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="projects-browser-url">
                      your-project.com
                    </div>
                  </div>

                  <div className="projects-browser-content">
                    <button
                      type="button"
                      className="projects-image-button"
                      onClick={() =>
                        openImagePreview(
                          projectsContent.featured.image,
                          projectsContent.featured.title
                        )
                      }
                      aria-label={`Preview ${projectsContent.featured.title}`}
                    >
                      <img
                        src={projectsContent.featured.image}
                        alt={projectsContent.featured.title}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="projects-featured-info">
                <div className="projects-project-number">
                  {projectsContent.featured.number}
                </div>

                <span className="projects-project-label">
                  {projectsContent.featured.label}
                </span>

                <h3>{projectsContent.featured.title}</h3>

                <p>{projectsContent.featured.description}</p>

                <div className="projects-tech-list">
                  {projectsContent.featured.technologies.map(
                    (technology) => (
                      <span key={technology}>{technology}</span>
                    )
                  )}
                </div>

                <div className="projects-actions">
                  <a
                    href={projectsContent.featured.github}
                    target="_blank"
                    rel="noreferrer"
                    className="projects-action projects-action-secondary"
                  >
                    <i className="fa-brands fa-github"></i>
                    <span>GitHub</span>
                  </a>

                  <a
                    href={projectsContent.featured.live}
                    target="_blank"
                    rel="noreferrer"
                    className="projects-action projects-action-primary"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="projects-grid-section">
          <div className="projects-container">
            <div className="projects-section-heading projects-reveal">
              <div className="projects-label">
                <span>03</span>
                <div></div>
                <span>MORE PROJECTS</span>
              </div>

              <h2>
                More things I've
                <span> worked on.</span>
              </h2>
            </div>

            <div className="projects-grid">
              {projectsContent.projects.map((project, index) => (
                <article
                  className="projects-card projects-reveal"
                  key={project.number}
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="projects-card-preview">
                    <button
                      type="button"
                      className="projects-image-button"
                      onClick={() =>
                        openImagePreview(
                          project.image,
                          project.title
                        )
                      }
                      aria-label={`Preview ${project.title}`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                      />
                    </button>

                    <div className="projects-card-overlay">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    </div>

                    <span className="projects-card-number">
                      {project.number}
                    </span>
                  </div>

                  <div className="projects-card-content">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="projects-tech-list">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="projects-card-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-github"></i>
                        <span>GitHub</span>
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-capabilities">
          <div className="projects-container">
            <div className="projects-section-heading projects-reveal">
              <div className="projects-label">
                <span>04</span>
                <div></div>
                <span>WHAT I BUILD</span>
              </div>

              <h2>
                Turning ideas into
                <span> experiences.</span>
              </h2>
            </div>

            <div className="projects-capabilities-grid">
              {projectsContent.capabilities.map(
                (capability, index) => {
                  const Icon = capability.icon;

                  return (
                    <article
                      className="projects-capability-card projects-reveal"
                      key={capability.title}
                      style={{
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="projects-capability-icon">
                        <Icon
                          size={24}
                          strokeWidth={1.5}
                        />
                      </div>

                      <h3>{capability.title}</h3>

                      <p>{capability.description}</p>
                    </article>
                  );
                }
              )}
            </div>
          </div>
        </section>

        <section className="projects-cta projects-reveal">
          <div className="projects-container">
            <div className="projects-cta-inner">
              <span>HAVE AN IDEA?</span>

              <h2>
                Let's build something
                <span> meaningful.</span>
              </h2>

              <a
                href="/contact"
                className="projects-cta-button"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div
          className="projects-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} preview`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="projects-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <X size={22} />
          </button>

          <div
            className="projects-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={`${selectedImage.title} preview`}
            />

            <span>{selectedImage.title}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;