import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../config/firebase';

import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser?.providerData[0]);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    register,
    login,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
