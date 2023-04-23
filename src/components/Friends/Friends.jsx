import PropTypes from 'prop-types';
import st from './Friends.module.css';

export default function Friends({ items }) {
  return <ul className={st.friendsList}>
    {items.map(({id, isOnline, avatar, name}) => (
        <li className={st.item} key={id}>
            <span className={isOnline ? st.online : st.offline}></span>
            <img className={st.avatar} src={avatar} alt={name} width="48" />
            <p className={st.name}>{name}</p>
      </li>
    ))}
  </ul>
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