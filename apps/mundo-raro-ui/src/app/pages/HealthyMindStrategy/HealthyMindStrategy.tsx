import React, { FC } from "react";
import { Emoji } from "@app/components/Emoticons/Emoticons";
import style from "./HealthyMindStrategy.module.css";
import { CtaButton } from "@app/components/CtaButton/CtaButton";
import { strategies } from "@app/content/HealthyMindStrategy.content";

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

const ImgBox: FC = () => {
  return (
    <div className={style.ImageBox}>
      <div className={style.img}>
        <CtaButton ctaText="Hacer una prueba" />
      </div>
    </div>
  );
};

const StrategyList: FC = () => {
  return (
    <div className={style.StrategyListBox}>
      <ListBox />
      <ImgBox />
    </div>
  );
};

const HealthyMindStrategy: FC = () => {
  return (
    <div className={style.HealthyMindStrategyBox}>
      <TitleBox />
      <StrategyList />
    </div>
  );
};

export default HealthyMindStrategy;
