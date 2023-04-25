
import PropTypes from 'prop-types';
import st from './Friends.module.css';
import FriendListItem from './FriendListItem';

export default function Friends({ items }) {
  return (
    <ul className={st.friendsList}>
      {items.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

Friends.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
