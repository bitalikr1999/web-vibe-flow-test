import { Spin } from "antd";
import styles from "./loading.module.css";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { appService } from "@/services/app.service";

export const LoadingPage = () => {
  useEffect(() => {
    appService.init();
  }, []);

  return (
    <div className={styles.container}>
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </div>
  );
};
