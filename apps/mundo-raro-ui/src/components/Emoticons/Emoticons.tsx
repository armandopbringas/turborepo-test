import React, { FC } from "react";
import styles from "./Emoticons.module.css";

interface EmojiProps {
  symbol: string;
}

export const Emoji: FC<EmojiProps> = ({ symbol }) => {
  return <span className={styles.EmoticonsStyles}>{symbol}</span>;
};
