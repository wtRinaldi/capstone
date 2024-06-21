import React, {useEffect} from 'react';

function Menu(props) {
    useEffect(() => {
        document.title = 'Little Lemon - Traditional Mediterranean Menu'
    }, [])
    return (
        <div>Menu page</div>
    );
}

export default Menu;