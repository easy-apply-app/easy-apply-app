
import GoTrue from "gotrue-js";

  auth = new GoTrue({
    APIUrl: "https://easy-apply-app.netlify.app",
  });

  const reset = (email) => {};

  const login = async (email, password) => {
    try {
      const response = await auth.login(email, password);
      return true;
    } catch (error) {
      return error;
    }
  };
  const register = async (email, password) => {
    try {
      const response = await auth.register(email, password);
      const loginResponse = await login(email, password);
      return true;
    } catch (error) {
      return error;
    }
  };

  const logOut = () => {};

  users = {
    reset,
    login,
    register,
    logOut,
  };
  
  export default user;

