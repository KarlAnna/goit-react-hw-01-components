import PropTypes from 'prop-types'
import { Stat } from './Stat'
import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) => (
                    <Stat
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                ))}
            </ul>
            
        </section>
    )
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }))
}