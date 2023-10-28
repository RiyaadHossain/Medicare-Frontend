import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";

export default function Home() {
  return (
    <div>
      {/* ====== Hero Section Start ====== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col-reverse lg:flex-row gap-[90px] items-center justify-between">
            {/* ====== Hero Content ====== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[30px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patiences have a healthy, longer life.
                </h1>

                <p className="text__para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet voluptatem perferendis fuga voluptatibus dignissimos
                  rem consequuntur. Amet illo quos facere ullam hic aut.
                  Sapiente, pariatur reiciendis sint eveniet debitis cumque!
                </p>

                <button className="btn">Request an Appointment</button>
              </div>

              {/* ===== Hero Counter ===== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-yellowColor block mt-[-15px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-purpleColor block mt-[-15px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-irisBlueColor block mt-[-15px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* ===== Hero Images ===== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img className="w-full" src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Hero Section End ====== */}


      <section></section>

    </div>
  );
}
