import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.targe.name]: e.targe.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello <span className="text-primaryColor">Welcome</span>Back 🎊
        </h3>

        <form className="py-4 md:py-0">
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
              Login
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
