import React, { FC } from "react";
import { CtaButton } from "../CtaButton/CtaButton";
import { Drop } from "../Icons/drops";
import style from "./GirlOnField.module.css";

const dropClasses: string[] = [style.DropOne, style.DropTwo, style.DropThree];

const GirlOnField: FC = () => {
  return (
    <div className={style.GirlOnField}>
      {dropClasses.map((dropClass, index) => (
        <div key={`drop-${index}`} className={dropClass}>
          <Drop />
        </div>
      ))}
      <div className={style.CtaBtnBox}>
        <div className={style.CtaBtnItemBox}>
          <CtaButton ctaText="Hacer una prueba" />
        </div>
      </div>
    </div>
  );
};

const GirlOnFieldMobile: FC = () => {
  return (
    <div className={style.GirlOnFieldMobileBox}>
      {dropClasses.map((dropClass, index) => (
        <div key={`drop-${index}`} className={dropClass}>
          <Drop />
        </div>
      ))}
      <div className={style.CtaBtnBox}>
        <div className={style.CtaBtnItemMobile}>
          <CtaButton ctaText="Hacer una prueba" />
        </div>
      </div>
    </div>
  );
};

const GirlOnFieldDesktop: FC = () => {
  return (
    <div className={style.GirlOnFieldBox}>
      {dropClasses.map((dropClass, index) => (
        <div key={`drop-${index}`} className={dropClass}>
          <Drop />
        </div>
      ))}
      <div className={style.CtaBtnBox}>
        <div className={style.CtaBtnItem}>
          <CtaButton ctaText="Hacer una prueba" />
        </div>
      </div>
    </div>
  );
};

export { GirlOnField, GirlOnFieldDesktop, GirlOnFieldMobile };
