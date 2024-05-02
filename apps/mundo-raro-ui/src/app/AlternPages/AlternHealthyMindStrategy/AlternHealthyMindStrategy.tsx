import { FC } from "react";
import { Emoji } from "@app/components/Emoticons/Emoticons";
import { strategies } from "@app/content/HealthyMindStrategy.content";
import style from "./AlternHealthyMindStrategy.module.css";
import { CtaButton } from "@app/components/CtaButton/CtaButton";

const TitleBox: FC = () => {
  return (
    <div className={style.TitleBox}>
      <h1 className={style.Title}>
        Estrategias para fortalecer la salud mental
      </h1>
      <p className={style.SubTitle}>Te damos las siguiente recomendaciones </p>
    </div>
  );
};

const ListBox: FC = () => {
  return (
    <div className={style.ListBox}>
      {strategies.map((strategy, index) => (
        <div key={index} className={style.StrategyBox}>
          <div>
            <Emoji symbol={strategy.symbol} />
          </div>
          <div>
            <p className={style.StrategySubtitle}>{strategy.subtitle}</p>
            <p className={style.StrategyText}>{strategy.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ImgBoxRight: FC = () => {
  return (
    <div className={style.ImageBoxRight}>
      <div className={style.ImgRight}>
        <CtaButton ctaText="Hacer una prueba" />
      </div>
      <div className={style.OrangeShadowRight} />
    </div>
  );
};

const ImgBoxLeft: FC = () => {
  return (
    <div className={style.ImageBoxLeft}>
      <div className={style.ImgLeft} />
      <div className={style.OrangeShadowLeft} />
    </div>
  );
};

const AlternHealthyMindStrategy: FC = () => {
  return (
    <div className={style.AlternHealthyMindStrategyBox}>
      <TitleBox />
      <ListBox />
      <div className={style.ImagesBox}>
        <ImgBoxLeft />
        <ImgBoxRight />
      </div>
    </div>
  );
};

export default AlternHealthyMindStrategy;
