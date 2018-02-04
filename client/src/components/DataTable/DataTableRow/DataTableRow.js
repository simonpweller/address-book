import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const DataTableRow = (props) => {

    return (
        <tr>
            {props.rowData.map((column, i) => <td key={i}>{column}</td>)}
            <td>
                <Link to={props.match.url + '/' + props.id}>
                    Edit
                </Link>
                <button onClick={() => props.deleteHandler(props.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default withRouter(DataTableRow);
