import { useEffect, useState } from "react";
import "./FooterStyle.css";

const EMAIL = "keerthiram2612@gmail.com";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/project" },
  { label: "Certificates", href: "/Certificate" },
  { label: "Contact", href: "/contact" },
];

// Replace the "#" URLs with your real profiles
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.63 4.74 6.05V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4V9.75Z",
  },
  {
    label: "GitHub",
    href: "#",
    path: "M12 .5a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z",
  },
];

function useISTClock() {
  const get = () =>
    new Date()
      .toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
      })
      .toUpperCase() + " IST";

  const [time, setTime] = useState(get);
  useEffect(() => {
    const id = setInterval(() => setTime(get()), 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Footer() {
  const time = useISTClock();

  // Smooth-scroll to the Contact section instead of a hard jump
  const goToContact = (e) => {
    const target = document.getElementById("contact");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="cta">
          <h2>
            Got an idea?
            <br />
            Let’s <b>talk</b>
            <br />
            about it.
          </h2>
          <div className="cta-actions">
            <a className="btn" href="#contact" onClick={goToContact}>
              Contact me
            </a>
            <a className="link-quiet" href="#contact" onClick={goToContact}>
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="cols">
          <nav className="col" aria-label="Navigate">
            <h4>Navigate</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="col" aria-label="Elsewhere">
            <h4>Elsewhere</h4>
            <ul>
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="brand">
          <small>Web Developer · Creating modern digital experiences</small>
          <p>© {new Date().getFullYear()} Keerthana Rajaram</p>
        </div>

        <div className="meta">
          <div className="time">
            <small>Local time</small>
            <span>{time}</span>
          </div>

          <div className="social">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>

          <button
            className="top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}