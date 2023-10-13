import React from 'react';
import './cell.css'

const Cell = ({ cellData }) => {
    return (
        <td>
            {cellData}
        </td>
    );
};

export default Cell;