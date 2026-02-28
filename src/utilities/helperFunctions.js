import toast from "react-hot-toast";

function validatePassword(password) {
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  } else if (!/[a-z]/.test(password)) {
    toast.error("Password must contain at least one lowercase letter");
    return false;
  } else if (!/[A-Z]/.test(password)) {
    toast.error("Password must contain at least one uppercase letter");
    return false;
  } else {
    toast.success("You have passed the validation");
    return true;
  }
}

export { validatePassword };
