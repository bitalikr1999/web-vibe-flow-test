import {
  presenceCost,
  validate,
  validateEmailRule,
} from "@/shared/helpers/validate.service";

const constraints = {
  email: { presence: presenceCost, email: validateEmailRule },
  password: { presence: presenceCost },
};

export const validateSignIn = (data: any) => {
  return validate<any>(data, constraints);
};
