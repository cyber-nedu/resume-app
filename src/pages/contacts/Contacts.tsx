import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Send,
  Sparkles,
} from "lucide-react";

const metaData = {
  title: "Contact Me | Frontend Developer",
  description:
    "Ernest Daniel Chinedu is a frontend developer building modern, responsive and interactive web experiences.",
}

import Background from "../../components/Background";
import "./Contacts.css";

const contactContent = {
  eyebrow: "GET IN TOUCH",

  title: {
    first: "Let's build",
    highlight: " something",
    last: " great.",
  },

  description:
    "Have a project in mind, need a frontend developer, or simply want to connect? Send me a message and I'll get back to you as soon as possible.",

  details: [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "09129449905",
      description: "Chat with me directly",
      href: "https://wa.me/2349129449905",
      external: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "09129449905",
      description: "Available for calls",
      href: "tel:09129449905",
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: "chinedu.daniel.ernest@gmail.com",
      description: "Send me an email",
      href: "mailto:chinedu.daniel.ernest@gmail.com",
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nigeria",
      description: "Working remotely",
      href: "",
      external: false,
    },
  ],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/cyber-nedu",
      icon: "fa-brands fa-github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/",
      icon: "fa-brands fa-square-linkedin",
    },
  ],

  form: {
    title: "Send me a message",
    description:
      "Tell me a little about your project, idea or opportunity.",

    fields: [
      {
        name: "name",
        label: "Your name",
        type: "text",
        placeholder: "John Doe",
      },
      {
        name: "email",
        label: "Email address",
        type: "email",
        placeholder: "john@example.com",
      },
      {
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "Project inquiry",
      },
    ],
  },

  reasons: [
    {
      icon: Code2,
      number: "01",
      title: "Clean Development",
      description:
        "I focus on writing structured, reusable and maintainable frontend code that is easy to build on.",
    },
    {
      icon: Sparkles,
      number: "02",
      title: "Modern Experiences",
      description:
        "I create modern interfaces with thoughtful interactions, responsive layouts and strong visual details.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Built to Perform",
      description:
        "I care about responsive experiences, smooth interactions and building products that feel good to use.",
    },
  ],
};

const Contacts = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal");

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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        "chinedu.daniel.ernest@gmail.com"
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailto = `mailto:chinedu.daniel.ernest@gmail.com?subject=${encodeURIComponent(
      String(subject || `Portfolio inquiry from ${name}`)
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <div className="contact-page">
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <Background />

      <main className="contact-main">
        <div className="contact-container">

          <section className="contact-hero contact-reveal">
            <div className="contact-eyebrow">
              <span className="contact-eyebrow-line"></span>

              <span>{contactContent.eyebrow}</span>
            </div>

            <h1>
              {contactContent.title.first}
              <span>{contactContent.title.highlight}</span>
              {contactContent.title.last}
            </h1>

            <p>{contactContent.description}</p>
          </section>

          <section className="contact-section">

            <div className="contact-info contact-reveal">

              <div className="contact-info-header">
                <span className="contact-section-label">
                  CONTACT DETAILS
                </span>

                <h2>
                  Let&apos;s start a
                  <span> conversation.</span>
                </h2>

                <p>
                  Whether you&apos;re looking to build something new,
                  improve an existing product, or discuss an
                  opportunity, I&apos;d love to hear from you.
                </p>
              </div>

              <div className="contact-details">
                {contactContent.details.map((detail) => {
                  const Icon = detail.icon;

                  return (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="contact-detail-card"
                      target={
                        detail.external ? "_blank" : undefined
                      }
                      rel={
                        detail.external
                          ? "noreferrer"
                          : undefined
                      }
                    >
                      <div className="contact-detail-icon">
                        <Icon size={19} />
                      </div>

                      <div className="contact-detail-content">
                        <span>{detail.label}</span>

                        <strong>{detail.value}</strong>

                        <small>{detail.description}</small>
                      </div>

                      <ArrowUpRight
                        className="contact-detail-arrow"
                        size={17}
                      />
                    </a>
                  );
                })}
              </div>

              <button
                type="button"
                className="contact-copy"
                onClick={copyEmail}
              >
                <span className="contact-copy-icon">
                  {copied ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </span>

                <span>
                  {copied
                    ? "Email copied!"
                    : "Copy my email"}
                </span>
              </button>

              <div className="contact-socials">
                <span>Find me online</span>

                <div className="contact-social-links">
                  {contactContent.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper contact-reveal">

              <div className="contact-form-top">
                <div>
                  <span className="contact-section-label">
                    DROP A MESSAGE
                  </span>

                  <h2>{contactContent.form.title}</h2>
                </div>

                <div className="contact-form-status">
                  <span></span>
                  Available
                </div>
              </div>

              <p className="contact-form-description">
                {contactContent.form.description}
              </p>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                {contactContent.form.fields.map((field) => (
                  <div
                    className="contact-field"
                    key={field.name}
                  >
                    <label htmlFor={field.name}>
                      {field.label}
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                    />
                  </div>
                ))}

                <div className="contact-field">
                  <label htmlFor="message">
                    Your message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  <span>Send Message</span>

                  <Send size={17} />
                </button>
              </form>
            </div>
          </section>

          <section className="contact-reasons contact-reveal">

            <div className="contact-reasons-header">
              <div>
                <span className="contact-section-label">
                  WHAT YOU CAN EXPECT
                </span>

                <h2>
                  Why work
                  <span> with me?</span>
                </h2>
              </div>

              <p>
                I believe good development is about more than
                writing code. It&apos;s about creating useful,
                polished and reliable experiences.
              </p>
            </div>

            <div className="contact-reasons-grid">
              {contactContent.reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <article
                    key={reason.number}
                    className="contact-reason-card"
                  >
                    <div className="contact-reason-top">
                      <div className="contact-reason-icon">
                        <Icon size={20} />
                      </div>

                      <span>{reason.number}</span>
                    </div>

                    <h3>{reason.title}</h3>

                    <p>{reason.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="contact-bottom contact-reveal">
            <div className="contact-bottom-glow"></div>

            <div className="contact-bottom-content">
              <span className="contact-section-label">
                HAVE AN IDEA?
              </span>

              <h2>
                Let&apos;s turn your idea
                <span> into reality.</span>
              </h2>

              <p>
                Good products start with good conversations.
                Let&apos;s talk about what you&apos;re building.
              </p>
            </div>

            <a
              href="mailto:chinedu.daniel.ernest@gmail.com"
              className="contact-bottom-button"
            >
              Start a conversation

              <ArrowUpRight size={18} />
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contacts;