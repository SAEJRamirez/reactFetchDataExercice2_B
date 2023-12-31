import Row from "../row/Row";
import './table.css'

const Table = ({items}) => {
    return (
        <div className='table-container'>
            <table>
                <tbody>
                {items.map(item => (
                    <Row key={item.id} item={item}/>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;