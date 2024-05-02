import { FC } from "react";
import FaceBookIcon from "../Icons/FacebookIcon";
import TiktokIcon from "../Icons/TiktokIcon";
import WhatsAppIcon from "../Icons/WhatsAppIcon";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <div className={styles.FooterBox}>
      <div className={styles.ItemsBox}>
        <div className="mr-8">
          <h1 className={styles.FooterTitle}>Benymar</h1>
          <p>Desarrollo humano y psicoterapia para todos</p>
        </div>
        <div className={styles.ItemBox}>
          <p className={styles.SectionFooterTitle}>Empresa</p>
          <ul>
            <li className="mb-2">Sobre nosotros</li>
            <li className="mb-2">Blog</li>
            <li className="mb-2">Cursos</li>
          </ul>
        </div>
        <div className={styles.ItemBox}>
          <p className={styles.SectionFooterTitle}>Legal</p>
          <ul>
            <li className="mb-2">Términos y condicinoes</li>
            <li className="mb-2">Aviso de privacidad</li>
          </ul>
        </div>
      </div>
      <hr className={styles.DividerLine} />
      <div className={styles.FooterRow}>
        <div>
          <span className="font-medium">
            © Benymar. Todos los derechos reservados
          </span>
        </div>
        <div className={styles.SmRow}>
          <FaceBookIcon />
          <TiktokIcon />
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
