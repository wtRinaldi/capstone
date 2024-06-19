import React from 'react';

function Button({type = 'button', onClick, children, className, ...rest}) {
    return (
        <button type={type} onClick={onClick} className={`rounded px-3 py-1 ${className}`} {...rest} >
            {children}
        </button>
    );
}

export default Button;