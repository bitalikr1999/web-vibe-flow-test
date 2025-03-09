import _ from "lodash";
import { validate as _validate } from "validate.js";

export const presenceCost: any = {
  allowEmpty: false,
  message: "^The field is required",
};

export const validateEmailRule = {
  message: "^Email is not valid",
};

export const validate = <T extends Record<string, any>>(
  values: T,
  constraints: any
) => {
  const result = _validate(values, constraints);
  return prepareValidatorResult<T>(result);
};

export const prepareValidatorResult = <T extends Record<string, any>>(
  result: T
): Record<keyof T, string> => {
  if (_.isEmpty(result)) return null;

  _.each(result, (it, key, arr: any) => {
    arr[key] = it[0];
  });

  return result;
};
