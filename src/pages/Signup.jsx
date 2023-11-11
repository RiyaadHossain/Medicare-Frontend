import signUpImg from "../assets/images/signup.gif";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { uploadToCloudinary } from "../utils/uploadCloudinary";
import { BASE_URL } from "../config/config";
import { USER_ROLE } from "../enums/userRole";
import { GENDER } from "../enums/common";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewURL, setPreviewURL] = useState("");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: GENDER.male,
    role: USER_ROLE.patient,
    photo: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadToCloudinary(file);
    setPreviewURL(data.secure_url);

    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!previewURL) {
      toast.error("Please upload your avatar", { id: "avatar" });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(formData),
      });

      const { message, success } = await res.json();
      if (!success) throw new Error(message);

      toast.success(message);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ==== img box ==== */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-lg">
              <img src={signUpImg} alt="" className="w-full rounded-lg" />
            </figure>
          </div>

          {/* ==== sign up form ==== */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  name="name"
                  className="w-full px-2 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-2 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                />
              </div>
              <div className="mb-5 relative">
                <input
                  type={`${!showPass ? "password" : "text"}`}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  name="password"
                  className="w-full px-2 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
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

              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    defaultValue={USER_ROLE.patient}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 ml-2 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    defaultValue={GENDER.male}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 ml-2 focus:outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {previewURL && (
                  <figure className="w-16 h-16 rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img
                      src={previewURL}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                )}
                <div className="relative w-[130px] h-[50px]">
                  <input
                    onChange={handleFileInputChange}
                    type="file"
                    name="photo"
                    id="customFile"
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
                  {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "Signup"
                  )}
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-primaryColor font-medium">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
