import PropTypes from "prop-types";

import "./Button.css";

function Button(props) {
  const { color, addClass, title, size } = props;

  return (
    <button className={`btn btn-${color} btn-${size} ${addClass}`}>
      {title}
    </button>
  );
}

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
};
