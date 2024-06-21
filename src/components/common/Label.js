import React from 'react';

function Label({children, className, ...rest}) {
    return (
        <label className={`text-highlight-dark font-semibold text-start ${className}`} {...rest}>{children}</label>
    );
}

export default Label;