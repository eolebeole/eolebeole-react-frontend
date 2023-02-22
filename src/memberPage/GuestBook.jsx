import { React } from 'react';

import { FiChevronsLeft } from 'react-icons/fi'



function GuestBook(props) {

    return (
        <div>
            <div className="bars" onClick={() => props.setToggleTab(1)}>
                <div className="icon"><FiChevronsLeft /></div>
            </div>
            <h3>GuestBook page</h3>
        </div>
    );
};

export default GuestBook;