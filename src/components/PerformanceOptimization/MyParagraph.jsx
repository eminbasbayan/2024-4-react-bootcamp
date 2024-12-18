import PropTypes from 'prop-types';

const MyParagraph = ({ children }) => {
  console.log('MyParagraph çalıştı!');
  return <p>{children}</p>;
};

MyParagraph.propTypes = {
  children: PropTypes.node,
};

export default MyParagraph;
