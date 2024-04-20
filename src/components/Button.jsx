import PropTypes from 'prop-types'
const Button = ({ variant, label, onClick }) => {

  return (
    <button type='button'
      className={`bg-${variant}-800 hover:bg-${variant}-700 text-white font-bold py-2.5 px-3 rounded w-full`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button