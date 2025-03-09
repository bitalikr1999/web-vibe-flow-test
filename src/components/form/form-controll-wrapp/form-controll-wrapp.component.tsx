import { CSSProperties, FC, PropsWithChildren } from "react";

import styles from "./styles.module.css";
interface Props {
  label?: string;
  error?: string;
  style?: CSSProperties;
  mb?: number;
  labelStyle?: CSSProperties;
}

export const FormControllerWrapp: FC<PropsWithChildren<Props>> = ({
  label,
  children,
  error,
  style,
  mb = 12,
  labelStyle,
}) => {
  return (
    <div style={{ width: "100%", ...style, marginBottom: mb }}>
      {label ? (
        <p
          className={styles.label}
          style={{ marginBottom: 5, fontSize: 14, ...labelStyle }}
        >
          {label}
        </p>
      ) : null}
      {children}

      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};
