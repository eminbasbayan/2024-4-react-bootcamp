import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

import PropTypes from 'prop-types';

const ThemeProvider = ({ children }) => {
  const [logo, setLogo] = useState('E-Ticaret');

  return (
    <ThemeContext.Provider
      value={{
        logo,
        setLogo,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
