import React from 'react';
import PropTypes from 'prop-types';

const MyButton = ({ children, onClick }) => {
  console.log('MyButton çalıştı!');
  return (
    <button
      className="bg-green-700 p-3 rounded-md text-white mt-2 border-2 border-transparent active:border-red-400"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

MyButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default React.memo(MyButton);
