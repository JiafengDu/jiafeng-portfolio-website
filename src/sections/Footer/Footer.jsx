import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>
            &#174; 2024 Jiafeng Du
            All rights reserved.
        </p>
    </section>
  )
}

export default Footer