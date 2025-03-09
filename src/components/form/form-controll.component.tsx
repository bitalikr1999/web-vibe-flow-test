import React from "react";
import { FC } from "react";
import { Input, InputProps } from "antd";
import { $eventVal } from "@/shared/helpers";

interface FormControllProps extends InputProps {
  label?: string;
  error?: string;
  onChangeVal: (val: string) => void;
  mb?: number;
  containerStyle?: React.CSSProperties;
}

export const FormControll: FC<FormControllProps> = ({
  label,
  error,
  onChangeVal,
  mb = 12,
  containerStyle = {},

  ...props
}) => {
  return <Input onChange={(e) => onChangeVal($eventVal(e))} {...props} />;
};
