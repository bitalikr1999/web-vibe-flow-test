import { AuthLayout, MainLayout } from "../components";

import { SignInPage } from "../pages/auth/sign-in";
import { LoadingPage } from "@/pages/loading";
import { NavigationKey, useNavigationState } from "@/state/navigation.state";
import { DashboardPage } from "@/pages/dashboard/dashboard.page";

const NavigationComponents = {
  [NavigationKey.Loading]: <LoadingPage />,
  [NavigationKey.Auth]: (
    <AuthLayout>
      <SignInPage />
    </AuthLayout>
  ),
  [NavigationKey.Dashboard]: (
    <MainLayout>
      <DashboardPage />
    </MainLayout>
  ),
};
export const Navigation = () => {
  const navigationState = useNavigationState((s) => s.state);

  return NavigationComponents[navigationState];
};
