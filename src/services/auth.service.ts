import { getNavigationState, NavigationKey } from "@/state/navigation.state";
import { storageService } from "./storage.service";
import { singInReq } from "@/api/auth";

class AuthService {
  public async logout() {
    await storageService.remove("accessToken");

    getNavigationState().setState(NavigationKey.Auth);
  }

  public async saveSession(accessToken: string) {
    await storageService.set("accessToken", accessToken);
  }

  public async signIn(email: string, password: string) {
    const response = await singInReq(email, password);

    const session = response.data;
    await this.saveSession(session.accessToken);
    getNavigationState().setState(NavigationKey.Dashboard);
  }
}

export const authService = new AuthService();
