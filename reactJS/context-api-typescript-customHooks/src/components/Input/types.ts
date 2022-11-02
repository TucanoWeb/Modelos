import React from "react";

export interface IInput {
    leftIcon?: React.ReactNode,
    name: string,
    errorMessage?: any,
    control: any,
    rest?: string,
    placeholder?: string,
    type?: string
}

