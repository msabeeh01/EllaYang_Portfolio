import FooterContactForm from './ContactForm/Footer-ContactForm'
import FooterContactInfo from './Footer-ContactInfo'
import styles from './footer.module.css'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <FooterContactForm />
            <FooterContactInfo />
        </footer>
    )
}

export default Footer