import PropTypes from "prop-types";

function ProductInput(props) {
  const { handleChange, label, type, name, placeholder } = props;
  return (
    <label>
      {label}:
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
}

ProductInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default ProductInput;
