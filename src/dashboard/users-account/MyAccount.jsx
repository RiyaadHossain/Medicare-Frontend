import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { AUTHTYPE } from "../../contexts/actionTypes";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config/config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const activeClasses = "bg-primaryColor text-white font-normal";

export default function MyAccount() {
  const { dispatch } = useContext(AuthContext);
  const [tab, setTab] = useState("bookings");

  const {
    data: userData,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/profile/me`);

  const handleLogout = () => {
    dispatch({ type: AUTHTYPE.LOGOUT });
  };

  return (
    <section>
      {loading && <Loading />}

      {error && <Error errMessage={error} />}

      {!error && !loading && (
        <div className="max-w-[1170px] px-5 mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[120px] h-[120px] rounded-full border-2 border-solid border-primaryColor">
                  <img
                    src={userData?.user?.photo}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  {userData?.user?.name}
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  {userData?.user?.email}
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Blood Type:
                  <span className="ml-2 text-headingColor">
                    {userData?.user?.bloodType}
                  </span>
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Gender:
                  <span className="ml-2 text-headingColor">
                    {userData?.user?.gender}
                  </span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                >
                  Logout
                </button>
                <button className="w-full bg-red-500 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                  Delete Account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab("bookings")}
                  className={`${
                    tab === "bookings" && activeClasses
                  } p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  My Bookings
                </button>

                <button
                  onClick={() => setTab("settings")}
                  className={`${
                    tab === "settings" && activeClasses
                  } p-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Profile Settings
                </button>
              </div>
              <div>
                {tab === "bookings" ? (
                  <MyBookings />
                ) : (
                  <Profile user={userData?.user} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
