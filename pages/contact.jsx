import styles from '../styles/ContactPage.module.css';

export const ContactSection = () => {  const contactMethods = [
    {
      name: 'Email',
      value: 'leosat2k4@gmail.com',
      href: 'mailto:leosat2k4@gmail.com',
      icon: '✉',
      description: 'Primary contact method'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/santhosh',
      href: 'https://www.linkedin.com/in/santhosh-leo10',
      icon: '💼',
      description: 'Professional network'
    },
    {
      name: 'GitHub',
      value: 'github.com/leosat',
      href: 'https://github.com/Leosat10',
      icon: '💻',
      description: 'Open source projects'
    },      

  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>Softwear Developer • Student @ GCE</p>
        </div>

        <div className={styles.bio}>
          <p>
Hello 👋, I’m a driven Computer Science student currently pursuing my Bachelor’s degree at the Government College of Engineering, Salem. I previously completed my Diploma at Thiagarajar Polytechnic College, where I built a solid technical foundation and sharpened a practical, problem-solving mindset.          </p>
           <p>
             Technology isn’t just my field of study—it’s my creative space, where I turn coffee into code and ideas into reality. I’m constantly exploring new tools, concepts, and systems to transform abstract thoughts into working solutions. Beyond academics, I grow through hands-on projects, self-learning, and experimenting with emerging technologies. I enjoy solving real-world problems, breaking things (accidentally), fixing them (intentionally), and building systems that challenge me to think deeper—because I strongly believe the best way to predict the future is to create it.

          </p>
        </div>

        <div className={styles.contactGrid}>
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.cardIcon}>{method.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{method.name}</h3>
                <p className={styles.cardValue}>{method.value}</p>
                <p className={styles.cardDescription}>{method.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.availability}>
            <span className={styles.statusIndicator}></span>
            Available to discuss full-time roles, research collaborations, and consulting
          </p>
        </div>
      </div>
    </div>
  );
};



export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default function ContactPage(props) {
  return <ContactSection {...props} />;
}
