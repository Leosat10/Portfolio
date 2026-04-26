import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'leosat2k4@gmail.com',
    href: 'mailto:leosat2k4@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/santhosh-leo10',
    href: 'https://www.linkedin.com/in/santhosh-leo10/',
  },
  {
    social: 'GitHub',
    link: 'github.com/Leosat',
    href: 'https://github.com/Leosat10',
  },
  {
    social: 'Website',
    link: 'santhosh',
    href: 'https://leosat10.github.io/Portfolio',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>production</a>
        </p>
      <p className={styles.line}>
        <span>Leosat</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
