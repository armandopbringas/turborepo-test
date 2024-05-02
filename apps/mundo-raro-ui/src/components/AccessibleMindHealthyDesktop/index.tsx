import { FC } from "react";
import style from "./styles.module.css";
import { GirlOnFieldDesktop } from "@app/components/GirlOnField/GirlOnField";
import TextBoxItem from "../TextBoxItem/TextBoxItem";

const AccessibleMindHealthyDesktop: FC = () => {
  return (
    <div className={style.AccessibleHealthyMindBox}>
      <div className={style.RowBox}>
        <div className={style.ColBox}>
          <div className="max-w-[485px]">
            <h2 className={style.AccessibleHealthyMindTitle}>
              Creemos firmemente que la salud mental debería ser accesible para
              todos
            </h2>
            <p className={style.ItemSubtitle}>
              Anim fugiat excepteur reprehenderit proident ea adipisicing veniam
              irure.
            </p>
          </div>
          <TextBoxItem />
        </div>
        <GirlOnFieldDesktop />
      </div>
    </div>
  );
};

export default AccessibleMindHealthyDesktop;
