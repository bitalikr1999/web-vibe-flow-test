import { FC, PropsWithChildren } from "react";

import styles from "./auth-layout.module.css";

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
