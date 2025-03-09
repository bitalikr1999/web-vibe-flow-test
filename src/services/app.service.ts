import { getNavigationState, NavigationKey } from "@/state/navigation.state";

import { storageService } from "./storage.service";

class AppService {
  public async init() {
    const token = storageService.get("accessToken");
    if (!token) getNavigationState().setState(NavigationKey.Auth);
    else getNavigationState().setState(NavigationKey.Dashboard);
  }
}

export const appService = new AppService();
