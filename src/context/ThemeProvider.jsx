import { ThemeContext } from './ThemeContext';

import PropTypes from 'prop-types';

const ThemeProvider = ({ children }) => {
  const fullName = 'Emin Başbayan';
  return (
    <ThemeContext.Provider value={fullName}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
