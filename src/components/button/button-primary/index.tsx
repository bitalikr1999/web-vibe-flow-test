import { LoadingOutlined } from "@ant-design/icons";
import { CSSProperties, FC, JSX } from "react";
import "./styles.css";

interface IProps {
  textContent?: string;
  icon?: JSX.Element;
  size?: string;
  onClick: () => void;
  style?: CSSProperties;
  isLoading?: boolean;
  mod?: "default" | "danger" | "small";
}
export const ButtonPrimary: FC<IProps> = ({
  textContent,
  icon,
  onClick,
  style,
  isLoading,
  mod = "default",
}) => {
  return (
    <button
      className={`btn-primary btn-${mod}`}
      onClick={onClick}
      style={style}
    >
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <>
          {icon}
          <span>{textContent}</span>
        </>
      )}
    </button>
  );
};
