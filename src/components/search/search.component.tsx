import { FC } from "react";
import { CloseCircleOutlined, SyncOutlined } from "@ant-design/icons";
import _ from "lodash";
import styles from "./search.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  isLoading: boolean;
}

export const Search: FC<Props> = ({ value, onChange, isLoading }) => {
  return (
    <div className={styles.container}>
      <input
        placeholder="Пошук"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <div className={styles.icon}>
        {isLoading ? (
          <SyncOutlined spin />
        ) : !_.isEmpty(value) ? (
          <CloseCircleOutlined onClick={() => onChange("")} />
        ) : null}
      </div>
    </div>
  );
};
