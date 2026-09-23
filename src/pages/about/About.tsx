import { useEffect } from "react";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import Background from "../../components/Background";
import "./About.css";

const aboutContent = {
  eyebrow: "ABOUT ME",

  title: {
    first: "Turning ideas into",
    highlight: " digital experiences.",
  },

  intro:
    "I'm Ernest Daniel, a Frontend Developer focused on creating modern, responsive and interactive web experiences that combine thoughtful design with clean, maintainable code.",

  story: {
    label: "MY STORY",
    heading: "I care about how the web feels.",
    paragraphs: [
      "I enjoy taking ideas and transforming them into interfaces that feel intuitive, polished and purposeful. For me, frontend development is more than writing code — it's about creating experiences that people can actually enjoy using.",

      "My focus is on modern frontend technologies, responsive design, component-driven architecture and meaningful interactions. I constantly explore better ways to build interfaces that are both visually impressive and technically solid.",
    ],
  },

  principles: [
    {
      number: "01",
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing structured, reusable and maintainable code that remains easy to understand as a project grows.",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Thoughtful Design",
      description:
        "Creating interfaces where typography, spacing, motion and visual hierarchy work together naturally.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Performance",
      description:
        "Building fast experiences with responsive layouts, efficient rendering and performance-conscious decisions.",
    },
  ],

  stats: [
    {
      value: "01+",
      label: "Years Learning & Building",
    },
    {
      value: "02+",
      label: "Projects & Experiments",
    },
    {
      value: "∞",
      label: "Ideas To Explore",
    },
  ],

  technologies: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "React Router",
    "REST APIs",
  ],
};

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");

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

  return (
    <div className="about-page">
      <Background />

      <main className="about-main">

        <section className="about-hero">
          <div className="about-container">

            <div className="about-hero-label">
              <span>01</span>
              <div></div>
              <span>{aboutContent.eyebrow}</span>
            </div>

            <div className="about-hero-content">
              <h1>
                {aboutContent.title.first}
                <span>{aboutContent.title.highlight}</span>
              </h1>

              <p>{aboutContent.intro}</p>
            </div>

            <div className="about-hero-bottom">
              <span>SCROLL TO EXPLORE</span>

              <div className="about-scroll-line">
                <span></span>
              </div>
            </div>

          </div>
        </section>

        <section className="about-story about-reveal">
          <div className="about-container">

            <div className="about-section-label">
              <span>02</span>
              <div></div>
              <span>{aboutContent.story.label}</span>
            </div>

            <div className="about-story-content">

              <div className="about-story-heading">
                <h2>
                  {aboutContent.story.heading}
                </h2>
              </div>

              <div className="about-story-text">
                {aboutContent.story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                ))}

                <Link
                  to="/projects"
                  className="about-inline-link"
                >
                  <span>Explore my work</span>
                  <ArrowUpRight size={17} />
                </Link>
              </div>

            </div>

          </div>
        </section>

        <section className="about-stats about-reveal">
          <div className="about-container">

            <div className="about-stats-grid">

              {aboutContent.stats.map((stat) => (
                <div
                  className="about-stat"
                  key={stat.label}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}

            </div>

          </div>
        </section>

        <section className="about-principles">
          <div className="about-container">

            <div className="about-section-header about-reveal">

              <div className="about-section-label">
                <span>03</span>
                <div></div>
                <span>WHAT I VALUE</span>
              </div>

              <h2>
                Building with
                <span> purpose.</span>
              </h2>

              <p>
                The principles that guide how I approach
                frontend development and digital experiences.
              </p>

            </div>


            <div className="about-principles-grid">

              {aboutContent.principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <article
                    className="about-principle-card about-reveal"
                    key={principle.number}
                    style={{
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >

                    <div className="about-principle-top">
                      <span>{principle.number}</span>

                      <div className="about-principle-icon">
                        <Icon
                          size={23}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <div className="about-principle-content">
                      <h3>{principle.title}</h3>

                      <p>
                        {principle.description}
                      </p>
                    </div>

                    <div className="about-principle-arrow">
                      <ArrowUpRight size={18} />
                    </div>

                  </article>
                );
              })}

            </div>

          </div>
        </section>

        <section className="about-tech about-reveal">
          <div className="about-container">

            <div className="about-tech-inner">

              <div className="about-tech-heading">

                <div className="about-section-label">
                  <span>04</span>
                  <div></div>
                  <span>TECHNOLOGIES</span>
                </div>

                <h2>
                  Tools I use to
                  <span> build.</span>
                </h2>

              </div>

              <div className="about-tech-list">

                {aboutContent.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

            </div>

          </div>
        </section>

        <section className="about-process">
          <div className="about-container">

            <div className="about-section-header about-reveal">

              <div className="about-section-label">
                <span>05</span>
                <div></div>
                <span>MY PROCESS</span>
              </div>

              <h2>
                From idea to
                <span> interface.</span>
              </h2>

            </div>


            <div className="about-process-list">

              <div className="about-process-item about-reveal">

                <span className="about-process-number">
                  01
                </span>

                <div>
                  <h3>Understand</h3>
                  <p>
                    Understand the problem, goals and people
                    the product is being built for.
                  </p>
                </div>

                <Terminal
                  size={24}
                  strokeWidth={1.4}
                />

              </div>


              <div className="about-process-item about-reveal">

                <span className="about-process-number">
                  02
                </span>

                <div>
                  <h3>Build</h3>
                  <p>
                    Turn ideas into responsive components
                    and structured frontend architecture.
                  </p>
                </div>

                <Layers3
                  size={24}
                  strokeWidth={1.4}
                />

              </div>


              <div className="about-process-item about-reveal">

                <span className="about-process-number">
                  03
                </span>

                <div>
                  <h3>Refine</h3>
                  <p>
                    Polish interactions, responsiveness,
                    accessibility and performance.
                  </p>
                </div>

                <Sparkles
                  size={24}
                  strokeWidth={1.4}
                />

              </div>

            </div>

          </div>
        </section>

        <section className="about-cta about-reveal">
          <div className="about-container">

            <div className="about-cta-inner">

              <span>
                HAVE AN IDEA?
              </span>

              <h2>
                Let's create something
                <span> meaningful.</span>
              </h2>

              <Link
                to="/contact"
                className="about-cta-button"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={19} />
              </Link>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default About;