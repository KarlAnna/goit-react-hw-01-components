import PropTypes from 'prop-types'
import { TransactionItem } from './TransactionItem'
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr className={css.transactionHeadTr}>
                    <th className={css.transactionTh}>Type</th>
                    <th className={css.transactionTh}>Amount</th>
                    <th className={css.transactionTh}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionItem
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string
    }))
}