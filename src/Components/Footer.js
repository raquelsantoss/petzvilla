import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg';
import { FaPaw } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FaPaw />
      <p>Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
