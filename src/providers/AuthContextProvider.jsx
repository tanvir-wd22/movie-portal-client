// ===============================
// STEP 1A: Import necessary functions from Firebase Authentication
// STEP 1B: Import React features
// STEP 1C: Import Firebase auth configuration
// ===============================
// STEP 2: Create a Context (Global Storage)
// This will allow all components to access auth data
// ===============================
// STEP 3: Create AuthProvider Component
// This component will wrap the whole app
// ===============================
// STEP 4A: Create State for User
// STEP 4B: Create State for Loading
// ===============================
// STEP 5: Firebase Auth Function Setup(register, login, logout, updateUser)
// ===============================
// STEP 6: Track Authentication State
// This runs automatically when component loads
// 6A. Listen for user login/logout changes(Capture the unsubscribe function returned inside useEffect hook)
// 6B. Update user state
// 6C. Stop loading after checking
// 6D. Cleanup function (Prevent memory leaks when component unmounts)
// ===============================
// STEP 7: Create Object to Pass in Context
// ===============================
//  STEP 8: Wrap children with AuthContext Provider
// ===============================
// STEP 9: Export Context & Provider
// ===============================

// 1
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/config";
// 2
const AuthContext = createContext(null);
// 3
const AuthContextProvider = ({ children }) => {
  // 4
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 5
  const provider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateProfileUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // 6
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // 7
  const authData = {
    user,
    loading,
    googleLogin,
    registerUser,
    updateProfileUser,
    loginUser,
    logoutUser,
  };

  // 8
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

// 9
export default AuthContextProvider;
export { AuthContext };
