import { ConfigProvider, message } from "antd";
import { Navigation } from "./navigation";

import { setAlertApi } from "./shared/helpers/alert.helper";

function App() {
  const [messageApi, contextHolder] = message.useMessage();

  setAlertApi(messageApi);

  return (
    <div>
      <ConfigProvider>
        <Navigation />
      </ConfigProvider>

      {contextHolder}
    </div>
  );
}

export default App;
