import React from 'react';


function Select({children, className, ...rest}) {
    return (
        <select
            className={`bg-gray-100 shadow-lg px-6 py-4 rounded border-solid border-r-transparent border-r-[1rem] ${className}`} {...rest}>{children}</select>
    );
}

export default Select;