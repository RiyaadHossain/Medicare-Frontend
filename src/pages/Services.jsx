import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

export default function Services() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] ">
        {services.map((item, idx) => (
          <ServiceCard item={item} index={idx} key={idx} />
        ))}
      </div>
    </section>
  );
}
