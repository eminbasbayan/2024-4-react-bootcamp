import { ThemeContext } from './ThemeContext';

import PropTypes from 'prop-types';

const ThemeProvider = ({ children }) => {

  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
