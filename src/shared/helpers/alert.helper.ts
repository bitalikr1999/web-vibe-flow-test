import { MessageInstance } from "antd/es/message/interface";

export let alertApi: MessageInstance = null;

export const setAlertApi = (instance: MessageInstance) => {
  alertApi = instance;
};
