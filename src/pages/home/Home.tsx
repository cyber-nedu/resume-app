import { ArrowUpRight, Code2, Mail, Zap, Monitor, Layers3, } from "lucide-react";
import { Link } from "react-router-dom";
import Background from "../../components/Background";
import {useEffect} from "react";
import "./Home.css";

const homeContent = {
  status: "Available for opportunities",

  title: {
    first: "Building",
    highlight: " modern web ",
    last: "experiences.",
  },

  description:
    "I'm Ernest Daniel, a passionate Frontend Developer focused on building fast, responsive and user-friendly web applications that turn ideas into interactive digital experiences.",

  actions: [
    {
      label: "View My Projects",
      type: "link",
      href: "/projects",
      className: "home-button home-button-primary",
    },
    {
      label: "Download Resume",
      type: "download",
      href: "/resume.pdf",
      className: "home-button home-button-secondary",
    },
  ],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/",
      icon: "fa-brands fa-github",
      type: "font-awesome",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/",
      icon: "fa-brands fa-square-linkedin",
      type: "font-awesome",
    },
    {
      label: "Email",
      href: "mailto:hello@example.com",
      type: "lucide",
    },
  ],

  code: {
    fileName: "developer.tsx",
    lines: [
      {
        number: "01",
        content: (
          <>
            <span className="home-code-purple">
              const
            </span>{" "}
            <span className="home-code-blue">
              developer
            </span>{" "}
            <span className="home-code-white">
              =
            </span>{" "}
            <span className="home-code-yellow">
              {"{"}
            </span>
          </>
        ),
      },
      {
        number: "02",
        content: (
          <>
            <span className="home-code-key">
              name:
            </span>{" "}
            <span className="home-code-green">
              "Ernest Daniel"
            </span>
            ,
          </>
        ),
        className: "home-code-indent",
      },
      {
        number: "03",
        content: (
          <>
            <span className="home-code-key">
              role:
            </span>{" "}
            <span className="home-code-green">
              "Frontend Developer"
            </span>
            ,
          </>
        ),
        className: "home-code-indent",
      },
      {
        number: "04",
        content: (
          <>
            <span className="home-code-key">
              skills:
            </span>{" "}
            <span className="home-code-yellow">
              {"["}
            </span>
          </>
        ),
        className: "home-code-indent",
      },
      {
        number: "05",
        content: (
          <>
            <span className="home-code-green">
              "React"
            </span>
            ,
          </>
        ),
        className: "home-code-indent-2",
      },
      {
        number: "06",
        content: (
          <>
            <span className="home-code-green">
              "TypeScript"
            </span>
            ,
          </>
        ),
        className: "home-code-indent-2",
      },
      {
        number: "07",
        content: (
          <>
            <span className="home-code-green">
              "JavaScript"
            </span>
            ,
          </>
        ),
        className: "home-code-indent-2",
      },
      {
        number: "08",
        content: (
          <>
            <span className="home-code-green">
              "CSS"
            </span>
          </>
        ),
        className: "home-code-indent-2",
      },
      {
        number: "09",
        content: (
          <>
            <span className="home-code-yellow">
              {"]"}
            </span>
            ,
          </>
        ),
        className: "home-code-indent",
      },
      {
        number: "10",
        content: (
          <>
            <span className="home-code-key">
              passion:
            </span>{" "}
            <span className="home-code-green">
              "Building for the web"
            </span>
          </>
        ),
        className: "home-code-indent",
      },
      {
        number: "11",
        content: (
          <span className="home-code-yellow">
            {"}"}
          </span>
        ),
      },
      {
        number: "12",
        content: (
          <span className="home-typing-cursor"></span>
        ),
      },
    ],
  },

  stats: [
    {
      value: "1+",
      label: "Years Experience",
    },
    {
      value: "10+",
      label: "Projects Completed",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
    },
  ],
};


const Home = () => {

  useEffect(() => {
  const elements = document.querySelectorAll(".scroll-reveal");

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
    <div className="home-page">
      <Background />

      <section className="home-hero">
        <div className="home-hero-container">

          <div className="home-hero-left">

            <div className="home-status">
              <span className="home-status-dot"></span>

              <span>
                {homeContent.status}
              </span>
            </div>

            <h1 className="home-title">
              {homeContent.title.first}

              <span>
                {homeContent.title.highlight}
              </span>

              {homeContent.title.last}
            </h1>

            <p className="home-description">
              {homeContent.description}
            </p>

            <div className="home-actions">
              {homeContent.actions.map((action) =>
                action.type === "link" ? (
                  <Link
                    key={action.label}
                    to={action.href}
                    className={action.className}
                  >
                    <span>
                      {action.label}
                    </span>

                    <ArrowUpRight size={18} />
                  </Link>
                ) : (
                  <a
                    key={action.label}
                    href={action.href}
                    className={action.className}
                    download
                  >
                    <span>
                      {action.label}
                    </span>

                    <ArrowUpRight size={18} />
                  </a>
                )
              )}
            </div>

            <div className="home-socials">
              {homeContent.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.label !== "Email"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    social.label !== "Email"
                      ? "noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                >
                  {social.type === "font-awesome" ? (
                    <i className={social.icon}></i>
                  ) : (
                    <Mail size={20} />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="home-hero-right">
            <div className="home-code-wrapper">
              <div className="home-code-glow"></div>

              <div className="home-code-card">

                <div className="home-code-header">

                  <div className="home-window-controls">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="home-code-file">
                    <Code2 size={14} />

                    <span>
                      {homeContent.code.fileName}
                    </span>
                  </div>

                  <div className="home-code-header-space"></div>
                </div>

                <div className="home-code-content">
                  {homeContent.code.lines.map((line) => (
                    <div
                      key={line.number}
                      className="home-code-line"
                    >
                      <span className="home-line-number">
                        {line.number}
                      </span>

                      <span className={line.className}>
                        {line.content}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="home-stats">
          {homeContent.stats.map((stat) => (
            <div
              className="home-stat-wrapper"
              key={stat.label}
            >
              <div className="home-stat">
                <strong>
                  {stat.value}
                </strong>

                <span>
                  {stat.label}
                </span>
              </div>
              
            </div>
          ))}
        </div>
      </section>

<section className="home-services scroll-reveal">
  <div className="home-services-container">

    <div className="home-services-header">
      <div className="home-services-label">
        <span>01</span>
        <div></div>
        <span>WHAT I DO</span>
      </div>

      <div className="home-services-heading">
        <h2>
          I build digital
          <span> experiences.</span>
        </h2>

        <p>
          From responsive interfaces to interactive web
          applications, I turn ideas into polished digital
          products that are built to perform.
        </p>
      </div>
    </div>

    <div className="home-services-grid">

      <article className="home-service-card home-service-card-large scroll-reveal">
        <div className="home-service-top">
          <span className="home-service-number">01</span>

          <div className="home-service-icon">
            <Code2 size={24} strokeWidth={1.5} />
          </div>
        </div>

        <div className="home-service-content">
          <h3>Frontend Development</h3>

          <p>
            Building modern, scalable and interactive interfaces
            with clean architecture and maintainable code.
          </p>
        </div>

        <div className="home-service-bottom">
          <span>React • TypeScript • JavaScript</span>

          <div className="home-service-arrow">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </article>

      <article className="home-service-card scroll-reveal">
        <div className="home-service-top">
          <span className="home-service-number">02</span>

          <div className="home-service-icon">
            <Monitor size={24} strokeWidth={1.5} />
          </div>
        </div>

        <div className="home-service-content">
          <h3>Responsive Experiences</h3>

          <p>
            Creating interfaces that feel natural and polished
            across desktop, tablet and mobile devices.
          </p>
        </div>

        <div className="home-service-bottom">
          <span>Responsive • Mobile • Desktop</span>

          <div className="home-service-arrow">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </article>

      <article className="home-service-card scroll-reveal">
        <div className="home-service-top">
          <span className="home-service-number">03</span>

          <div className="home-service-icon">
            <Layers3 size={24} strokeWidth={1.5} />
          </div>
        </div>

        <div className="home-service-content">
          <h3>Interactive Interfaces</h3>

          <p>
            Adding thoughtful interactions, animations and
            micro-details that make products feel alive.
          </p>
        </div>

        <div className="home-service-bottom">
          <span>UI • Motion • Interaction</span>

          <div className="home-service-arrow">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </article>

      <article className="home-service-card home-service-card-large scroll-reveal">
        <div className="home-service-top">
          <span className="home-service-number">04</span>

          <div className="home-service-icon">
            <Zap size={24} strokeWidth={1.5} />
          </div>
        </div>

        <div className="home-service-content">
          <h3>Performance & Clean Code</h3>

          <p>
            Writing efficient, organized code with performance
            and long-term maintainability in mind.
          </p>
        </div>

        <div className="home-service-bottom">
          <span>Performance • Architecture • Git</span>

          <div className="home-service-arrow">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </article>

    </div>

    <div className="home-tech-section">
      <div className="home-tech-title">
        <span>TOOLS I WORK WITH</span>
      </div>

      <div className="home-tech-list">
        <span>React</span>
        <span>TypeScript</span>
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Git</span>
        <span>GitHub</span>
      </div>
    </div>

    <div className="home-services-cta">
      <div>
        <span className="home-cta-small">
          HAVE A PROJECT IN MIND?
        </span>

        <h3>
          Let's build something
          <span> remarkable.</span>
        </h3>
      </div>

      <Link
        to="/projects"
        className="home-services-cta-button"
      >
        <span>Explore My Work</span>
        <ArrowUpRight size={20} />
      </Link>
    </div>

  </div>
</section>
    </div>
  );
};

export default Home;