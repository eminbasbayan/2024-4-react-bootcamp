import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { setUser } from './redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { fetchUserRole } from './redux/slices/roleSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUser(currentUser.providerData[0]));
        dispatch(fetchUserRole(currentUser.uid));
      } else {
        dispatch(setUser(null));
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="app">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
