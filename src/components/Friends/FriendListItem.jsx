
import PropTypes from 'prop-types';
import st from './FriendListItem.module.css';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={st.item} >
      <span className={isOnline ? st.online : st.offline}></span>
      <img className={st.avatar} src={avatar} alt={name} width="48" />
      <p className={st.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {

  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
