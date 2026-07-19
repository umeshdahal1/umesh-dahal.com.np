import styles from "./page.module.css";

export const metadata = {
  title: "About",
  description:
    "Learn about Umesh Dahal, a physics student at the Central Department of Physics, Tribhuvan University, Nepal.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>About</p>

        <h1>Umesh Dahal</h1>

        <p className={styles.introduction}>
          I am a physics student at the Central Department of Physics, Tribhuvan
          University, Nepal. I am interested in understanding physical systems
          through theoretical, computational, and interdisciplinary approaches.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Academic Background</h2>

        <div className={styles.card}>
          <p className={styles.label}>Current affiliation</p>

          <h3>Central Department of Physics</h3>

          <p>
            Tribhuvan University
            <br />
            Kirtipur, Kathmandu, Nepal
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Research Interests</h2>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Computational Physics</h3>
            <p>
              Using numerical and computational methods to investigate physical
              systems and material properties.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Density Functional Theory</h3>
            <p>
              Exploring electronic structure and material behaviour through
              first-principles calculations.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Graphene and Nanomaterials</h3>
            <p>
              Studying graphite-derived graphene, synthesis routes,
              characterization, and possible biomedical applications.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Biophysics</h3>
            <p>
              Applying physical concepts and material science to biological and
              biomedical questions.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Academic Direction</h2>

        <div className={styles.card}>
          <p>
            My long-term goal is to continue in academia, contribute to
            scientific research, collaborate across disciplines, and support
            physics education and research in Nepal.
          </p>
        </div>
      </section>
    </main>
  );
}
