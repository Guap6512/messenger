import * as React from 'react';
import MaskedInput from 'react-text-mask';

interface PhoneMaskedInputProps {
    inputRef: (ref: HTMLInputElement | null) => void;
}

const mask = [
    '+',
    /[1-9]/,
    ' ',
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
];

export const PhoneMaskedInput = ({inputRef, ...other}: PhoneMaskedInputProps) => (
    <MaskedInput
        {...other}
        ref={(ref: any) => {
            inputRef(ref ? ref.inputElement : null);
        }}
        mask={mask}
        placeholderChar={'\u2000'}
        showMask
    />
);
