import TextBoxItem from "@app/components/TextBoxItem/TextBoxItem";
import style from "./MainHealthyMind.module.css";
import {
  GirlOnField,
  GirlOnFieldMobile,
} from "@app/components/GirlOnField/GirlOnField";

const MainHealthyMind = () => {
  return (
    <div className={style.MainHealthyMindBox}>
      <div className={style.TextBox}>
        <h1 className={style.TitleBox}>
          Creemos firmemente que la salud mental debería ser{" "}
          <span style={{ color: "#F86010" }}>accesible</span> para todos
        </h1>
        <p className={style.TextStyles}>
          Anim fugiat excepteur reprehenderit proident ea adipisicing veniam
          irure.
        </p>
        <div className="mt-10">
          <TextBoxItem />
        </div>
      </div>
      <div>
        <GirlOnField />
      </div>
    </div>
  );
};

export default MainHealthyMind;
