import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Contact information and academic profile links for Umesh Dahal, a physics student at Tribhuvan University, Nepal.",
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
            <p className={styles.label}>Email</p>

            <h3>Professional Email</h3>

            <p>
              A professional academic email address will be added here soon.
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.label}>Location</p>

            <h3>Kathmandu, Nepal</h3>

            <p>
              Currently based at Tribhuvan University in Kirtipur, Kathmandu.
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

          <div className={styles.pending}>
            <span>
              <strong>Google Scholar</strong>
              <small>Profile will be added when available</small>
            </span>
          </div>

          <div className={styles.pending}>
            <span>
              <strong>ORCID</strong>
              <small>Researcher identifier will be added later</small>
            </span>
          </div>

          <div className={styles.pending}>
            <span>
              <strong>LinkedIn</strong>
              <small>Professional profile will be added later</small>
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
