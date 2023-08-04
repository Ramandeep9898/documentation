import { useState } from "react";
import {
  TextFieldOutline,
  TextFieldStandard,
  TextFieldFilled,
  InputProps,
} from "./Input.styled";

export const TextField = ({ ...props }: InputProps): JSX.Element => {
  const [defaultInputValue, setDefaultInputValue] = useState(
    props?.defaultValue ? props.defaultValue : ""
  );

  return (
    <>
      {props.variant === "outline" ? (
        <TextFieldOutline {...props}>
          <input
            placeholder=" "
            type={props?.type ? props?.type : "text"}
            disabled={props.disabled}
            value={defaultInputValue}
            onChange={(e) => setDefaultInputValue(e.target.value)}
          />
          <label htmlFor={props.id}>
            {props.label} {props.required ? "*" : null}
          </label>
        </TextFieldOutline>
      ) : null}

      {props.variant === "filled" ? (
        <TextFieldFilled {...props}>
          <input
            placeholder=" "
            type={props?.type ? props?.type : "text"}
            disabled={props.disabled}
            value={defaultInputValue}
            onChange={(e) => setDefaultInputValue(e.target.value)}
          />
          <label htmlFor={props.id}>
            {props.label} {props.required ? "*" : null}
          </label>
        </TextFieldFilled>
      ) : null}

      {props.variant === "standard" ? (
        <TextFieldStandard {...props}>
          <input
            placeholder=" "
            type={props?.type ? props?.type : "text"}
            disabled={props.disabled}
            value={defaultInputValue}
            onChange={(e) => setDefaultInputValue(e.target.value)}
          />
          <label htmlFor={props.id}>
            {props.label} {props.required ? "*" : null}
          </label>
        </TextFieldStandard>
      ) : null}
    </>
  );
};
