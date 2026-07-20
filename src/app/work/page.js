import styles from "./page.module.css";

export const metadata = {
  title: "Selected Work",
  description:
    "Selected academic projects, manuscripts, and research work of Umesh Dahal.",
};

const works = [
  {
    category: "Review manuscript",
    title:
      "Graphene from Graphite: Synthesis, Spectroscopic Characterization, and Biomedical Applications",
    status: "In preparation",
    description:
      "A review of graphite-derived graphene, including major preparation routes, spectroscopic characterization methods, structural quality, biological interactions, and biomedical applications.",
    topics: [
      "Graphene synthesis",
      "Raman spectroscopy",
      "Structural characterization",
      "Biomedical applications",
    ],
  },
  {
    category: "Electrodynamics capstone",
    title:
      "Design and Electrodynamic Analysis of an Electrostatic Dust Removal System for Solar Panels",
    status: "Academic project",
    description:
      "An investigation of electric-field configurations and electrostatic forces for removing dust particles from solar-panel surfaces.",
    topics: [
      "Electrostatics",
      "Electric-field analysis",
      "Dust removal",
      "Solar-energy applications",
    ],
  },
];

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Academic Portfolio</p>

        <h1>Selected Work</h1>

        <p className={styles.introduction}>
          This page presents selected manuscripts, academic projects, and
          research activities related to my interests in physics, computational
          materials, graphene, spectroscopy, and applied electrodynamics.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Projects and Manuscripts</h2>

        <div className={styles.list}>
          {works.map((work) => (
            <article className={styles.card} key={work.title}>
              <div className={styles.details}>
                <p className={styles.category}>{work.category}</p>
                <p className={styles.status}>{work.status}</p>
              </div>

              <h3>{work.title}</h3>

              <p className={styles.description}>{work.description}</p>

              <ul className={styles.topics}>
                {work.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Research Development</h2>

        <div className={styles.note}>
          <p>
            Additional publications, presentations, computational projects,
            conference activities, and academic documents will be added as my
            research develops.
          </p>
        </div>
      </section>
    </main>
  );
}
