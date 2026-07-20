import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Contact information and academic profiles of Umesh Dahal, a physics student at Tribhuvan University, Nepal.",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Contact</p>

        <h1>Get in Touch</h1>

        <p className={styles.introduction}>
          I welcome communication related to physics, academic research,
          computational materials, graphene, scientific collaboration, and
          educational opportunities.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Academic Affiliation</h2>

        <div className={styles.card}>
          <p className={styles.label}>Department</p>

          <h3>Central Department of Physics</h3>

          <p>
            Tribhuvan University
            <br />
            Kirtipur, Kathmandu, Nepal
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Contact Information</h2>

        <div className={styles.grid}>
          <article className={styles.card}>
            <p className={styles.label}>Primary email</p>

            <h3>Personal Email</h3>

            <a
              className={styles.emailLink}
              href="mailto:umeshdahal.np@gmail.com"
            >
              umeshdahal.np@gmail.com
            </a>

            <p className={styles.helper}>
              Permanent contact address for academic and professional
              communication.
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.label}>Institutional email</p>

            <h3>Tribhuvan University Email</h3>

            <a
              className={styles.emailLink}
              href="mailto:umesh.805511@cdp.tu.edu.np"
            >
              umesh.805511@cdp.tu.edu.np
            </a>

            <p className={styles.helper}>
              Current academic email at the Central Department of Physics.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Academic and Professional Profiles</h2>

        <div className={styles.links}>
          <a
            href="https://github.com/umeshdahal1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <strong>GitHub</strong>
              <small>Code and academic website repository</small>
            </span>

            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/umedahal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <strong>LinkedIn</strong>
              <small>Professional and academic network</small>
            </span>

            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://orcid.org/0009-0003-9108-8801"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <strong>ORCID</strong>
              <small>0009-0003-9108-8801</small>
            </span>

            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://www.researchgate.net/profile/Umesh-Dahal-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <strong>ResearchGate</strong>
              <small>Research and academic profile</small>
            </span>

            <span aria-hidden="true">↗</span>
          </a>

          <div className={styles.pending}>
            <span>
              <strong>Google Scholar</strong>
              <small>Profile will be added when available</small>
            </span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Communication</h2>

        <div className={styles.note}>
          <p>
            For academic communication, please include a clear subject,
            institutional affiliation, and a brief explanation of the purpose of
            your message.
          </p>
        </div>
      </section>
    </main>
  );
}
