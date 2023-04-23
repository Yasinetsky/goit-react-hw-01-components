import PropTypes from 'prop-types';
import st from './Transactions.module.css';

export default function Transactions({ items }) {
    return <table className={st.transactions}>
        <thead className={st.head}>
            <tr>
                <th className={st.head_item}>Type</th>
                <th className={st.head_item}>Amount</th>
                <th className={st.head_item}>Currency</th>
            </tr>
        </thead>
        
        {items.map(({ id, type, amount, currency }) => (
            <tbody key={id} className={st.body}>
                <tr className={st.row}>
                    <td className={st.row_item}>{type}</td>
                    <td className={st.row_item}>{amount}</td>
                    <td className={st.row_item}>{currency}</td>
                </tr>
            </tbody>
        ))}
    </table>
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};