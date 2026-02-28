import { useContext } from "react";
import { AuthContext } from "../providers/AuthContextProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { registerUser, updateProfileUser } = useContext(AuthContext);

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, photo);

    try {
      // step 1: register user
      const result = await registerUser(email, password);
      toast.success(result?.user?.displayName || "user register done");
      // step 2: update user
      await updateProfileUser(name, photo);
      toast.success("profile updated done");
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
    }
  };

  
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleRegisterForm}>
        <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />

          <label className="label">Photo Url</label>
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="Photo Url"
          />

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

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
