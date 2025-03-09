import styles from "./sign-in.module.css";

import { useForm } from "@/shared/hooks/useForm";
import { ButtonPrimary } from "@/components/button";
import { useState } from "react";
import { authService } from "@/services/auth.service";
import { alertApi } from "@/shared/helpers";
import { ApiExeption } from "@/shared/exeptions";
import { FormControllerWrapp } from "@/components/form/form-controll-wrapp";
import { FormControll } from "@/components/form";
import { validateSignIn } from "./sign-in.validation";

interface Form {
  email: string;
  password: string;
}
export const SignInPage = () => {
  const form = useForm<Form>({}, validateSignIn);
  const [isLoading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);

      await authService.signIn(form.values.email, form.values.password);
    } catch (e) {
      processError(e);
    } finally {
      setLoading(false);
    }
  };

  const processError = (error: any) => {
    const apiException = ApiExeption.fromAxiosError(error);
    switch (apiException.key) {
      case "signInFailed":
        alertApi.error("Credentials are incorrect");
        break;
      default:
        alertApi.error("Something went wrong");
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Login</p>

      <FormControllerWrapp label="Email" error={form.errors.email}>
        <FormControll
          value={form.values.email}
          onChangeVal={(val) => form.setField("email", val)}
          placeholder="user@gmail.com"
        />
      </FormControllerWrapp>

      <FormControllerWrapp label="Password" error={form.errors.password}>
        <FormControll
          value={form.values.password}
          onChangeVal={(val) => form.setField("password", val)}
          type="password"
          placeholder="*******"
        />
      </FormControllerWrapp>

      <ButtonPrimary
        onClick={() => form.onSubmit(submit)}
        textContent="Submit"
        isLoading={isLoading}
      />
    </div>
  );
};
