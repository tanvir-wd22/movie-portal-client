import { useContext } from "react";
import { AuthContext } from "../providers/AuthContextProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      // console.log(result.user);
      toast.success(result?.user?.displayName || "google login done");
    } catch (error) {
      // console.log(error.message);
      toast.error(error.message);
    }
  };

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    try {
      const result = await loginUser(email, password);
      toast.success(result?.user?.displayName || "user login done");
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <form onSubmit={handleLoginForm}>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-warning w-full mt-4"
        >
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
