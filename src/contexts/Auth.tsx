import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "../hooks/useAuth";
import api, { setAccessToken } from "../api";
import { useNavigate } from "react-router";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAccessToken(token);
      getUser().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const getUser = async () => {
    try {
      const { data } = await api.get("/auth/me");
      setUser(data.data);
      return { error: null, success: true };
    } catch (err: any) {
      setUser(null);
      return {
        error: err.response?.data?.message || "Failed",
        success: false,
      };
    }
  };

  const signUp = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) => {
    if (confirmPassword !== password)
      return { error: "Passwords do not match", success: false };
    try {
      const { data } = await api.post("/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      localStorage.setItem("token", data.data.token);
      setAccessToken(data.data.token);
      await getUser();
      return { error: null, success: true };
    } catch (err: any) {
      return {
        error: err.response?.data?.message || "Error",
        success: false,
      };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", data.data.token);
      setAccessToken(data.data.token);
      await getUser();
      return { error: null, success: true };
    } catch (err: any) {
      return {
        error: err.response?.data?.message || "Error",
        success: false,
      };
    }
  };

  const uploadAvatar = async (avatarFile: File) => {
    const form = new FormData();
    form.append("avatar", avatarFile);
    try {
      await api.post("/upload/avatar", form);
      await getUser();
      return { error: null, success: true };
    } catch (err: any) {
      return { error: err.response?.data?.message, success: false };
    }
  };

  const updateProfile = async (
    firstName: string,
    lastName: string,
    location: string,
    dob: string,
    bio: string,
  ) => {
    try {
      await api.patch("/auth/me", {
        firstName,
        lastName,
        location,
        dob,
        bio,
      });
      await getUser();
      return { error: null, success: true };
    } catch (err: any) {
      return { error: err.response?.data?.message, success: false };
    }
  };

  const deleteUser = async () => {
    try {
      await api.delete("/auth/me");
      localStorage.removeItem("token");
      setAccessToken("");
      setUser(null);
      return { error: null, success: true };
    } catch (err: any) {
      return { error: err.response?.data?.message, success: false };
    }
  };

  const logOut = () => {
    setAccessToken("");
    localStorage.removeItem("token");
    navigate("/login");
  };

  async function confirmation(type: string = "confirm-email") {
    try {
      await api.get(`/auth/${type}`);
      return { error: null, success: true };
    } catch (err: any) {
      return { error: err.response.data.message, success: false };
    }
  }
  const confirmEmail = () => confirmation();
  const confirmPassword = () => confirmation("confirm-password");

  async function requestChange(
    from: string,
    to: string,
    type: string = "request-email-change",
  ) {
    const payload = { from, to };
    try {
      await api.post(`/auth/me/${type}`, payload);
      await getUser();
      return { error: null, success: true };
    } catch (err: any) {
      return { error: err.response.data.message, success: false };
    }
  }

  const updatePassword = (from: string, to: string) =>
    requestChange(from, to, "request-password-change");
  const updateEmail = (from: string, to: string) => requestChange(from, to);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        uploadAvatar,
        updateEmail,
        updatePassword,
        deleteUser,
        updateProfile,
        confirmEmail,
        confirmPassword,
        user,
        loading,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
