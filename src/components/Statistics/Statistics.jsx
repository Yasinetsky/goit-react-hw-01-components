import PropTypes from 'prop-types';
import st from './Statistics.module.css';

function getRandomColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + "0".repeat(6 - hex.length) + hex;
}


// export default function Statistics({ items }) {

//   return <div className={st.statistics}>
//     <h2 className={st.title}>Upload stats</h2>

//     <ul className={st.stats}>
//       {items.map(({ id, label, percentage }) => (
        
//         <li className={st.item} key={id} style={{backgroundColor: getRandomColor()}}>
//               <span className={st.label}>{label}</span>
//               <span className={st.percentage}>{percentage}%</span>
//         </li>
//       ))}
//       </ul>
//     </div>
// }


export default function Statistics({ title, items }) {
  return (
    <div className={st.statistics}>
      {title && <h2 className={st.title}>{title}</h2>}

      <ul className={st.stats}>
        {items.map(({ id, label, percentage }) => (
          <li className={st.item} key={id} style={{ backgroundColor: getRandomColor() }}>
            <span className={st.label}>{label}</span>
            <span className={st.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titel: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};