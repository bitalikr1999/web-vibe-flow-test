import { FC } from "react";
import styles from "./sortable-header.module.css";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

interface Props {
  title: string;
  order: "ASC" | "DESC" | null;
  onClick: () => void;
}

export const SortableHeader: FC<Props> = ({ title, order, onClick }) => {
  const renderIcon = () => {
    if (order === "ASC") return <CaretUpOutlined />;
    if (order === "DESC") return <CaretDownOutlined />;
  };
  return (
    <div onClick={onClick} className={styles.container}>
      {renderIcon()}
      {title}
    </div>
  );
};
