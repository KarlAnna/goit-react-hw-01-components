import PropTypes from 'prop-types'
import { FriendListItem } from './FriendListItem'
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
        <div className={css.container}>
            <ul className={css.friendList}>
                {friends.map(({ id, avatar, name, isOnline }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                ))}
            </ul>
        </div>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool
    }))
}