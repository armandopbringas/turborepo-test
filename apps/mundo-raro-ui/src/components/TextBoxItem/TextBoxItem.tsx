import style from "./TextBoxItem.module.css";

const TextBoxItem = () => {
  return (
    <div>
      <div className={style.ItemBox}>
        <p className={style.ItemTitle}>Descubre como detectar la ansiedad</p>
        <p>
          Anim fugiat excepteur reprehenderit proident ea adipisicing veniam
          irure.
        </p>
      </div>
      <div className={style.ItemBox}>
        <p className={style.ItemTitle}>Relaciones tóxicas como afrontarlas</p>
        <p>
          Anim fugiat excepteur reprehenderit proident ea adipisicing veniam
          irure.
        </p>
      </div>
    </div>
  );
};

export default TextBoxItem;
