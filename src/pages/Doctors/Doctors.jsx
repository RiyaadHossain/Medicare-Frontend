import DoctorList from "../../components/Doctors/DoctorList";
import Testimonial from "../../components/Testimonial/Testimonial";
import { SectionHeader } from "../../components/reuseable/SectionHeader";

export default function Doctors() {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <DoctorList />
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHeader
            title="What our patient say"
            desc="World-class care for everyone. Our health System offers unmatched, expert health care."
          />
          <Testimonial />
        </div>
      </section>
    </>
  );
}
