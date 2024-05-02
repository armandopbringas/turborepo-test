import { GirlOnFieldMobile } from "@app/components/GirlOnField/GirlOnField";
import style from "./styles.module.css";
import { FC } from "react";

const AccessibleMindHealthyMobile: FC = () => {
  return (
    <div className={style.AccessibleHealthyMindBox}>
      <div className={style.RowMobileBox}>
        <div className={style.ColBox}>
          <div>
            <h2 className={style.AccessibleHealthyMindTitle}>
              Creemos firmemente que la salud mental debería ser accesible para
              todos
            </h2>
            <p className={style.ItemSubtitle}>
              Anim fugiat excepteur reprehenderit proident ea adipisicing veniam
              irure.
            </p>
          </div>
          <div className={style.ItemBox}>
            <p className={style.ItemTitle}>
              Descubre como detectar la ansiedad
            </p>
            <p>
              Anim fugiat excepteur reprehenderit proident ea adipisicing veniam
              irure.
            </p>
          </div>
          <div className={style.ItemBox}>
            <p className={style.ItemTitle}>
              Relaciones tóxicas como afrontarlas
            </p>
            <p>
              Anim fugiat excepteur reprehenderit proident ea adipisicing veniam
              irure.
            </p>
          </div>
        </div>
      </div>
      <GirlOnFieldMobile />
    </div>
  );
};

export default AccessibleMindHealthyMobile;
