import { useContext } from 'react';
import PropTypes from 'prop-types';

import './Button.css';
import { ThemeContext } from '../../context/ThemeContext';

function Button(props) {
  const { color, addClass, size, onClick, children } = props;
  const value = useContext(ThemeContext);

  console.log('button component', value);

  return (
    <button
      className={`btn btn-${color} btn-${size} ${addClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  size: PropTypes.string,
  addClass: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
};
