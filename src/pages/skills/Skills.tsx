import { useEffect } from "react";
import {
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Layers3,
  Palette,
  Terminal,
  Wrench,
} from "lucide-react";

import Background from "../../components/Background";
import "./Skills.css";

const skillsContent = {
  eyebrow: "MY SKILLS",

  title: {
    first: "Tools I use to",
    highlight: " build for the web.",
  },

  description:
    "A growing collection of technologies, tools and development practices I use to create modern, responsive and maintainable digital experiences.",

  categories: [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building responsive interfaces and interactive web applications with modern frontend technologies.",
      icon: Code2,
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "React Router",
      ],
    },

    {
      number: "02",
      title: "UI & Experience",
      description:
        "Creating interfaces with strong visual hierarchy, responsive layouts and thoughtful interactions.",
      icon: Palette,
      technologies: [
        "Responsive Design",
        "Glassmorphism",
        "CSS Animations",
        "UI Design",
        "Micro Interactions",
      ],
    },

    {
      number: "03",
      title: "Development Tools",
      description:
        "Using modern development tools to keep projects organized, collaborative and maintainable.",
      icon: Wrench,
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "NPM",
        "Vite",
        "Chrome DevTools",
      ],
    },

    {
      number: "04",
      title: "Web Architecture",
      description:
        "Structuring applications into reusable components and predictable systems that can scale.",
      icon: Layers3,
      technologies: [
        "Component Architecture",
        "Reusable Components",
        "REST APIs",
        "State Management",
        "Routing",
      ],
    },
  ],

  coreSkills: [
    {
      title: "React",
      description:
        "Component-driven interfaces and modern React applications.",
      icon: Braces,
    },
    {
      title: "TypeScript",
      description:
        "Safer, predictable and maintainable frontend code.",
      icon: Terminal,
    },
    {
      title: "JavaScript",
      description:
        "Interactive functionality and modern web application logic.",
      icon: Code2,
    },
    {
      title: "CSS",
      description:
        "Responsive layouts, animations and polished visual systems.",
      icon: Palette,
    },
  ],

  workflow: [
    {
      number: "01",
      title: "Plan",
      description:
        "Understand the requirements, structure the interface and define the components needed.",
    },
    {
      number: "02",
      title: "Build",
      description:
        "Turn the design into reusable components with clean and maintainable code.",
    },
    {
      number: "03",
      title: "Polish",
      description:
        "Refine responsiveness, animations, interactions and the overall user experience.",
    },
  ],
};

const Skills = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".skills-reveal");

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
    <div className="skills-page">
      <Background />

      <main className="skills-main">

        <section className="skills-hero">
          <div className="skills-container">

            <div className="skills-label">
              <span>01</span>
              <div></div>
              <span>{skillsContent.eyebrow}</span>
            </div>

            <div className="skills-hero-content">

              <h1>
                {skillsContent.title.first}
                <span>{skillsContent.title.highlight}</span>
              </h1>

              <p>
                {skillsContent.description}
              </p>

            </div>

            <div className="skills-hero-scroll">
              <span>EXPLORE MY TOOLKIT</span>

              <div className="skills-scroll-line">
                <span></span>
              </div>
            </div>

          </div>
        </section>

        <section className="skills-categories">
          <div className="skills-container">

            <div className="skills-section-heading skills-reveal">

              <div className="skills-label">
                <span>02</span>
                <div></div>
                <span>TECHNOLOGY STACK</span>
              </div>

              <h2>
                Everything I need to
                <span> build.</span>
              </h2>

            </div>


            <div className="skills-category-grid">

              {skillsContent.categories.map((category, index) => {
                const Icon = category.icon;

                return (
                  <article
                    className="skills-category-card skills-reveal"
                    key={category.number}
                    style={{
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >

                    <div className="skills-card-top">

                      <span className="skills-card-number">
                        {category.number}
                      </span>

                      <div className="skills-card-icon">
                        <Icon
                          size={24}
                          strokeWidth={1.5}
                        />
                      </div>

                    </div>

                    <div className="skills-card-content">

                      <h3>{category.title}</h3>

                      <p>
                        {category.description}
                      </p>

                    </div>

                    <div className="skills-tech-list">

                      {category.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}

                    </div>

                    <div className="skills-card-arrow">
                      <ArrowUpRight size={18} />
                    </div>

                  </article>
                );
              })}

            </div>

          </div>
        </section>

        <section className="skills-core">
          <div className="skills-container">

            <div className="skills-core-header skills-reveal">

              <div className="skills-label">
                <span>03</span>
                <div></div>
                <span>CORE SKILLS</span>
              </div>

              <div>
                <h2>
                  The technologies
                  <span> I work with.</span>
                </h2>

                <p>
                  These are some of the technologies I spend
                  the most time working with when building
                  frontend applications.
                </p>
              </div>

            </div>


            <div className="skills-core-grid">

              {skillsContent.coreSkills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <article
                    className="skills-core-card skills-reveal"
                    key={skill.title}
                    style={{
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >

                    <div className="skills-core-icon">
                      <Icon
                        size={25}
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="skills-core-info">

                      <h3>{skill.title}</h3>

                      <p>
                        {skill.description}
                      </p>

                    </div>

                    <div className="skills-core-status">
                      <span></span>
                      Active
                    </div>

                  </article>
                );
              })}

            </div>

          </div>
        </section>

        <section className="skills-workflow">
          <div className="skills-container">

            <div className="skills-workflow-header skills-reveal">

              <div className="skills-label">
                <span>04</span>
                <div></div>
                <span>MY WORKFLOW</span>
              </div>

              <h2>
                How I turn ideas into
                <span> interfaces.</span>
              </h2>

            </div>


            <div className="skills-workflow-list">

              {skillsContent.workflow.map((step, index) => (
                <article
                  className="skills-workflow-item skills-reveal"
                  key={step.number}
                  style={{
                    transitionDelay: `${index * 0.12}s`,
                  }}
                >

                  <span className="skills-workflow-number">
                    {step.number}
                  </span>

                  <div className="skills-workflow-content">
                    <h3>{step.title}</h3>

                    <p>
                      {step.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.4}
                  />

                </article>
              ))}

            </div>

          </div>
        </section>

        <section className="skills-toolkit skills-reveal">
          <div className="skills-container">

            <div className="skills-toolkit-inner">

              <div className="skills-toolkit-heading">

                <div className="skills-label">
                  <span>05</span>
                  <div></div>
                  <span>MY TOOLKIT</span>
                </div>

                <h2>
                  Always
                  <span> learning.</span>
                </h2>

                <p>
                  The web keeps evolving, and so does my
                  toolkit. I continuously experiment with
                  new technologies and techniques to improve
                  the way I build.
                </p>

              </div>


              <div className="skills-toolkit-visual">

                <div className="skills-toolkit-orbit orbit-one">
                  <span>React</span>
                </div>

                <div className="skills-toolkit-orbit orbit-two">
                  <span>TS</span>
                </div>

                <div className="skills-toolkit-orbit orbit-three">
                  <span>JS</span>
                </div>

                <div className="skills-toolkit-center">
                  <Database
                  size={28}
                  strokeWidth={1.4}
                  />
                  </div>

              </div>

            </div>

          </div>
        </section>

        <section className="skills-cta skills-reveal">
          <div className="skills-container">

            <div className="skills-cta-inner">

              <span>LET'S BUILD SOMETHING</span>

              <h2>
                Have a project
                <span> in mind?</span>
              </h2>

              <a
                href="/contact"
                className="skills-cta-button"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={19} />
              </a>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default Skills;