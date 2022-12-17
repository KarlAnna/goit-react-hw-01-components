import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'

export const TransactionItem = ({ type, amount, currency }) => {
    return (
        <>
            <tr className={css.transactionTr}>
                <td className={css.transactionTd}>{type}</td>
                <td className={css.transactionTd}>{amount}</td>
                <td className={css.transactionTd}>{currency}</td>
            </tr>
        </>
    )
}

TransactionItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}