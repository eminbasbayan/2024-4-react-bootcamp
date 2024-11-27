import { createContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../config/firebase';

import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const register = async (email, password, fullName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      toast.success(`Hesabınız başarıyla oluşturuldu, ${fullName}!`);
      return userCredential.user;
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success(`Hoş geldiniz, ${userCredential.user.displayName}!`);
      return userCredential.user;
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const value = {
    register,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
