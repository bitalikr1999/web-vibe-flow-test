import { StarFilled, StarOutlined } from "@ant-design/icons";
import styles from "./favorite-button.module.css";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}
export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {isFavorite ? (
        <StarFilled className={styles.activeIcon} />
      ) : (
        <StarOutlined className={styles.defaultIcon} />
      )}
    </button>
  );
};
