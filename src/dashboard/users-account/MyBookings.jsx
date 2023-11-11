import Error from "../../components/Error/Error";
import Loading from "../../components/Loader/Loading";
import { BASE_URL } from "../../config/config";
import useFetchData from "../../hooks/useFetchData";

export default function MyBookings() {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/profile/appointments/my-bookings`);

  return (
    <div>
      {loading && <Loading />}

      {error && <Error errMessage={error} />}

      {!loading && !error && !appointments.length && (
        <h2 className="mt-12 leading-7 text-[20px] font-semibold text-primaryColor">
          You did not book any doctor&apos;s service yet!
        </h2>
      )}
    </div>
  );
}
