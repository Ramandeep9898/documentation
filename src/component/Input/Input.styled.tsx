import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type InputProps = {
  children?: ReactNode;
  id?: string;
  label?: string;
  variant?: "outline" | "standard" | "filled";
  disabled?: boolean;
  required?: boolean;
  type?: any;
  error?: boolean;
  defaultValue?: string;
};

const error = css<InputProps>`
  ${(props: InputProps) => {
    return (
      props?.error &&
      css`
        input {
          border: 1px solid red;
          border-radius: 5px;
          color: red;
        }
        label {
          color: red;
        }
        input:focus {
          border-color: red;
        }
        input:focus + label {
          color: red;
        }
      `
    );
  }}
  ${(props: InputProps) => {
    return (
      props?.error &&
      props.variant === "filled" &&
      css`
        input {
          border: 1px solid red;
          border-radius: 5px;
          color: red;
          background-color: rgba(255, 0, 0, 0.1);
        }
        label {
          color: red;
        }
        input:focus {
          border-color: red;
        }
        input:focus + label {
          color: red;
        }
      `
    );
  }}

  ${(props: InputProps) => {
    return (
      props?.error &&
      props.variant === "standard" &&
      css`
        input {
          color: red;
          border-top: 0px;
          border-left: 0px;
          border-right: 0px;
          border-radius: 0px;
          border-bottom: 1px solid red;
        }
        label {
          color: red;
        }
        input:focus {
          /* border-color: red; */
        }
        input:focus + label {
          color: red;
        }
      `
    );
  }}
`;

export const TextFieldOutline = styled.div<InputProps>`
  position: relative;

  label {
    position: absolute;
    font-size: 1rem;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    color: gray;
    padding: 0 0.3rem;
    margin: 0 0.5rem;
    transition: 0.1s ease-out;
    transform-origin: left top;
    pointer-events: none;
  }
  input {
    font-size: 1rem;
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1rem 0.7rem;
    color: gray;
    transition: 0.1s ease-out;
  }
  input:focus {
    border-color: var(--pri-black);
  }
  input:focus + label {
    color: var(--pri-black);
    top: 0;
    transform: translateY(-50%) scale(0.9);
  }
  input:not(:placeholder-shown) + label {
    top: 0;
    transform: translateY(-50%) scale(0.9);
  }
  ${error}
`;

export const TextFieldFilled = styled.div<InputProps>`
  position: relative;

  label {
    position: absolute;
    font-size: 1rem;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    /* background-color: white; */
    color: gray;
    padding: 0 0.3rem;
    margin: 0 0.5rem;
    transition: 0.1s ease-out;
    transform-origin: left top;
    pointer-events: none;
  }
  input {
    font-size: 1rem;
    outline: none;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid gray;
    background-color: rgba(128, 128, 128, 0.1);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 1.4rem 0.7rem 0.7rem 0.7rem;
    color: gray;
    transition: 0.1s ease-out;
  }
  input:focus {
    border-color: var(--pri-black);
  }
  input:focus + label {
    color: var(--pri-black);
    top: 15px;

    transform: translateY(-50%) scale(0.8);
  }
  input:not(:placeholder-shown) + label {
    top: 15px;

    transform: translateY(-50%) scale(0.8);
  }
  ${error}
`;

export const TextFieldStandard = styled.div<InputProps>`
  position: relative;

  label {
    position: absolute;
    font-size: 1rem;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    color: gray;
    padding: 0 0.3rem;
    margin: 0 0.5rem;
    transition: 0.1s ease-out;
    transform-origin: left top;
    pointer-events: none;
  }
  input {
    font-size: 1rem;
    outline: none;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid gray;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 1.4rem 0.7rem 0.7rem 0.7rem;
    color: gray;
    transition: 0.1s ease-out;
  }
  input:focus {
    border-color: var(--pri-black);
  }
  input:focus + label {
    color: var(--pri-black);
    top: 15px;

    transform: translateY(-50%) scale(0.8);
  }
  input:not(:placeholder-shown) + label {
    top: 15px;

    transform: translateY(-50%) scale(0.8);
  }

  ${error}
`;
