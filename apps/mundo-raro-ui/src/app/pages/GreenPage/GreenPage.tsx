import LandscapeImage from "@app/components/LandscapeImage/LandscapeImage";
import style from "./GreenPage.module.css";
import { lsImgOne, lsImgTwo } from "@app/content/UrlImages/UrlImages";

const GreenPage = () => {
  return (
    <div className={style.GreenPageBg}>
      <h2 className={style.GreenBoxTitle}>
        La salud mental es un aspecto crucial de nuestro bienestar general
      </h2>
      <div className={style.GreenPageBox}>
        <LandscapeImage
          imageUrl={lsImgOne}
          readingTtime="3 min de lectura"
          readingTitle="Guía de meditación para calmar la ansiedad"
        />
        <LandscapeImage
          imageUrl={lsImgTwo}
          readingTtime="5 min de lectura"
          readingTitle="¿Cómo actuar ante el despido?"
        />
      </div>
    </div>
  );
};

export default GreenPage;
