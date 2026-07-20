import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.intro}>
          <p>Physics · Computational Materials · Biophysics</p>

          <h1>Umesh Dahal</h1>

          <h2>Physics Student and Aspiring Researcher</h2>

          <p>
            I am a physics student at the Central Department of Physics,
            Tribhuvan University, Nepal. My academic interests include
            computational physics, density functional theory, graphene,
            nanomaterials, spectroscopy, and biophysical applications.
          </p>

          <div className={styles.ctas}>
            <a className={styles.primary} href="research">
              View Research
            </a>

            <a className={styles.secondary} href="contact">
              Contact Me
            </a>
          </div>
        </section>

        <section id="research">
          <h2>Research Interests</h2>

          <article>
            <h3>Computational Materials Physics</h3>
            <p>
              Studying the electronic, structural, and physical properties of
              materials using computational methods.
            </p>
          </article>

          <article>
            <h3>Graphene and Nanomaterials</h3>
            <p>
              Exploring graphite-derived graphene, synthesis methods,
              spectroscopic characterization, and biomedical relevance.
            </p>
          </article>

          <article>
            <h3>Biophysics</h3>
            <p>
              Investigating how physical principles and materials can be applied
              to biological and biomedical problems.
            </p>
          </article>
        </section>

        <section id="work">
          <h2>Selected Work</h2>

          <article>
            <h3>
              Graphene from Graphite: Synthesis, Spectroscopic Characterization,
              and Biomedical Applications
            </h3>
            <p>Review manuscript in preparation.</p>
          </article>

          <article>
            <h3>Electrostatic Dust Removal System for Solar Panels</h3>
            <p>
              An electrodynamic analysis of electrostatic methods for removing
              dust from solar-panel surfaces.
            </p>
          </article>
        </section>

        <section id="contact">
          <h2>Contact</h2>

          <p>
            Central Department of Physics
            <br />
            Tribhuvan University
            <br />
            Kirtipur, Kathmandu, Nepal
          </p>

          <p>
            Professional email and academic profile links will be added soon.
          </p>
        </section>
      </main>
    </div>
  );
}
