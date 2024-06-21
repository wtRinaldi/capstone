import React from 'react';

function Input({children, className, ...rest}) {
    return (
        <input
            className={`bg-gray-100 shadow-lg px-6 py-4 rounded ${className}`} {...rest}>{children}</input>
    );
}

export default Input;