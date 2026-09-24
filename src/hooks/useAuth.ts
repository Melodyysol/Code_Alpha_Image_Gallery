import { createContext } from "react";

type AuthReturn = Promise<{
  error: string | null;
  success: boolean;
}>;

type AuthContext = {
  signUp: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    corfirmPassword: string,
  ) => AuthReturn;
  signIn: (email: string, password: string) => AuthReturn;
  uploadAvatar: (avatar: File) => AuthReturn;
  updateEmail: (from: string, to: string) => AuthReturn;
  updatePassword: (from: string, to: string) => AuthReturn;
  deleteUser: () => AuthReturn;
  updateProfile: (
    firstName: string,
    lastName: string,
    location: string,
    dob: string,
    bio: string,
  ) => AuthReturn;
  confirmEmail: () => AuthReturn;
  confirmPassword: () => AuthReturn;
  user: any;
  loading: boolean;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContext | undefined>(undefined);
