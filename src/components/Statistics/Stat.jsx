import css from './Statistics.module.css'

export const Stat = ({ label, percentage }) => {
    return (
        <>
            <li style={{backgroundColor: getRandomDarkHexColor()}} className={css.statListItem}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>
        </>
    )
}

function getRandomDarkHexColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10)
    }
    return color
}