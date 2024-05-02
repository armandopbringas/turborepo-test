import SquareImage from "@app/components/SquareImage/SquareImage";
import { srcOne, srctWO } from "@app/content/UrlImages/UrlImages";
import style from "./BehaviorPatterns.module.css";
import { CtaButton } from "@app/components/CtaButton/CtaButton";

const BehavioPatterns = () => {
  return (
    <div>
      <div className={style.BehaviorPatternsBox}>
        <div className={style.TextBox}>
          <h2 className={style.TitleSTyles}>
            Analizando patrones de comportamiento
          </h2>
          <p className={style.ParagraphStyles}>
            Anim fugiat excepteur reprehenderit proident ea adipisicing veniam
            irure.
          </p>
          <CtaButton ctaText="Ver más análisis" />
        </div>
        <div className={style.ImgsBox}>
          <SquareImage backgroundImage={srcOne} />
          <SquareImage backgroundImage={srctWO} />
        </div>
      </div>
    </div>
  );
};

export default BehavioPatterns;
