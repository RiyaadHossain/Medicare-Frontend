import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { BASE_URL } from "../config/config";
import toast from "react-hot-toast";
import { AUTHTYPE } from "../contexts/actionTypes";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { dispatch } = useContext(AuthContext);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(formData),
      });

      const { message, success, data } = await res.json();
      if (!success) throw new Error(message);

      dispatch({
        type: AUTHTYPE.LOGIN_SUCCESS,
        payload: {
          user: data.user,
          token: data.token,
          role: data.user.role,
        },
      });

      toast.success(message);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello <span className="text-primaryColor">Welcome</span>Back 🎊
        </h3>

        <form onSubmit={submitHandler} className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              defaultValue={formData.email}
              onChange={handleInputChange}
              className="w-full px-2 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
            />
          </div>

          <div className="mb-5 relative">
            <input
              type={`${!showPass ? "password" : "text"}`}
              placeholder="Password"
              name="password"
              defaultValue={formData.password}
              onChange={handleInputChange}
              className="w-full px-2 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer "
            />
            <span className="absolute top-1/2 right-3">
              {showPass ? (
                <AiFillEye
                  onClick={() => setShowPass(false)}
                  className="text-[17px] text-textColor"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => setShowPass(true)}
                  className="text-[17px] text-textColor"
                />
              )}
            </span>
          </div>

          <div className="mt-7">
            <button className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
              {loading ? <HashLoader size={35} color="#ffffff" /> : "Login"}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-primaryColor font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
