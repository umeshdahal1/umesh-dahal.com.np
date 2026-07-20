import styles from "./page.module.css";

export const metadata = {
  title: "Research",
  description:
    "Research interests and academic projects of Umesh Dahal in computational physics, graphene, nanomaterials, spectroscopy, biophysics, and electrodynamics.",
};

const researchAreas = [
  {
    title: "Computational Materials Physics",
    description:
      "I am interested in using computational methods to study the structural, electronic, and physical properties of materials.",
    topics: [
      "Numerical modelling",
      "Electronic structure",
      "Material properties",
      "Computational simulation",
    ],
  },
  {
    title: "Density Functional Theory",
    description:
      "I am interested in first-principles calculations and density functional theory for understanding the behaviour of materials at the atomic scale.",
    topics: [
      "First-principles calculations",
      "Electronic band structure",
      "Density of states",
      "Structural optimization",
    ],
  },
  {
    title: "Graphene and Nanomaterials",
    description:
      "My work focuses on graphene derived from graphite, including preparation methods, characterization, structural quality, and possible biomedical applications.",
    topics: [
      "Graphite-derived graphene",
      "Synthesis methods",
      "Spectroscopic characterization",
      "Biomedical relevance",
    ],
  },
  {
    title: "Spectroscopic Characterization",
    description:
      "I am interested in understanding how spectroscopy and microscopy reveal the structure, defects, composition, and quality of materials.",
    topics: [
      "Raman spectroscopy",
      "X-ray diffraction",
      "Infrared spectroscopy",
      "Electron microscopy",
    ],
  },
  {
    title: "Biophysics",
    description:
      "I am interested in applying physical principles and material science to biological and biomedical questions.",
    topics: [
      "Biomaterial interactions",
      "Biomedical applications",
      "Nanomaterial biocompatibility",
      "Interdisciplinary physics",
    ],
  },
  {
    title: "Electrodynamics",
    description:
      "I am interested in practical applications of electromagnetic theory, including electrostatic methods for removing dust from solar-panel surfaces.",
    topics: [
      "Electrostatics",
      "Electric-field modelling",
      "Solar-panel applications",
      "Dust-removal systems",
    ],
  },
];

export default function ResearchPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Research</p>

        <h1>Research Interests</h1>

        <p className={styles.introduction}>
          My academic interests connect theoretical physics, computational
          methods, materials science, and interdisciplinary applications. I am
          particularly interested in using physics to understand materials and
          solve practical scientific problems.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Areas of Interest</h2>

        <div className={styles.grid}>
          {researchAreas.map((area) => (
            <article className={styles.card} key={area.title}>
              <h3>{area.title}</h3>

              <p>{area.description}</p>

              <ul>
                {area.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Current Academic Work</h2>

        <article className={styles.project}>
          <p className={styles.label}>Review manuscript</p>

          <h3>
            Graphene from Graphite: Synthesis, Spectroscopic Characterization,
            and Biomedical Applications
          </h3>

          <p>
            This work examines major routes for preparing graphene from
            graphite, methods used to characterize its structure and quality,
            and its possible biomedical applications.
          </p>
        </article>

        <article className={styles.project}>
          <p className={styles.label}>Electrodynamics project</p>

          <h3>
            Design and Electrodynamic Analysis of an Electrostatic Dust Removal
            System for Solar Panels
          </h3>

          <p>
            This project studies how electric fields and electrostatic forces
            can be used to remove dust from solar-panel surfaces.
          </p>
        </article>
      </section>
    </main>
  );
}
