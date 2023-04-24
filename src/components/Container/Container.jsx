import PropTypes from 'prop-types';
import st from './Container.module.css';

export default function Container({ children }) {
    return <div className={st.container}>{children}</div>
}

Container.propTypes = {
    children: PropTypes.node,
}