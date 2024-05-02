import BookIcon from "../Icons/book";
import style from "./LandscapeImage.module.css";

interface Props {
  imageUrl: string;
  readingTtime?: string;
  readingTitle?: string;
}

const LandscapeImage: React.FC<Props> = ({
  imageUrl,
  readingTtime,
  readingTitle,
}) => {
  return (
    <div className={style.LandscapeImageBox}>
      <div
        className={style.LandscapeImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {readingTtime && (
          <div className={style.ReadinTextBox}>
            <BookIcon />
            <span className={style.ReadinTimeStyle}>{readingTtime}</span>
          </div>
        )}
        {readingTitle && <p className={style.ReadingTitle}>{readingTitle}</p>}
      </div>
    </div>
  );
};

export default LandscapeImage;
