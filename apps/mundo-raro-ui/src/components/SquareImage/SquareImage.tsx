import style from "./SquareImage.module.css";

interface ImageProps {
  backgroundImage: string;
}

const SquareImage: React.FC<ImageProps> = ({ backgroundImage }) => {
  return (
    <div
      className={style.SquareImageBox}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};

export default SquareImage;
