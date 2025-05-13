import styles from './styles.module.css';

const features = [
  {
    icon: "📖",
    title: "Open Source",
    description: (
      <>
        With Tusk being open source it lets anyone introduce new plugins and concepts for our community
      </>
    ),
  },
  {
    icon: "🎨",
    title: "Completely Customizable",
    description: (
      <>
        Tusk lets you modify its code, ui, and plugins completely.
      </>
    ),
  },
  {
    icon: "✏️",
    title: "English-like Syntax",
    description: (
      <>
        Tusk's syntax is designed to be easy to understand and use, making it perfect for beginners.
      </>
    ),
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresRow}>
        {features.map((feature, idx) => (
          <div className={styles.featureCard} key={idx}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
