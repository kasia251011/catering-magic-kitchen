import Image from "next/image";
import WEDDING_ICON from "@/assets/icons/dance.png";
import COMMUNION_ICON from "@/assets/icons/communion.png";
import BAPTISM_ICON from "@/assets/icons/baptism.png";
import PARTY_ICON from "@/assets/icons/champagne-glass.png";

const ServiceSection = () => (
  <section id="usługi" className="container mt-20 mb-24">
    <h2 className="text-center mb-10">Usługi</h2>
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="service-item">
        <Image width={70} src={WEDDING_ICON} alt="Śluby i wesela" />
        <h3 className="my-5">Wesela</h3>
        <p className="text-center px-7">
          Zapewniamy kompleksowy catering nawet dla 200 osób, byście mogli
          cieszyć się każdą chwilą bez zmartwień.
        </p>
      </div>
      <div className="service-item">
        <Image width={70} src={COMMUNION_ICON} alt="Komunia " />
        <h3 className="my-5">Komunie</h3>
        <p className="text-center px-7">
          Komunie święte to szczególna uroczystość dla całej rodziny, jak i dla
          dzieci! Nasze menu jest dobrane dla każdego!
        </p>
      </div>
      <div className="service-item">
        <Image width={70} src={BAPTISM_ICON} alt="Chrzciny" />
        <h3 className="my-5">Chrzciny</h3>
        <p className="text-center px-7">
          Oferujemy delikatne potrawy, które wprowadzą dobre smaki do życia
          Twojego maluszka.
        </p>
      </div>
      <div className="service-item">
        <Image width={70} src={PARTY_ICON} alt="Imprezy okolicznościowe" />
        <h3 className="my-5 text-center">Imprezy okolicznościowe</h3>
        <p className="text-center px-7">
          Nasza różnorodna oferta da Ci możliwość stworzenia wyjątkowej
          atmosfery na każdą okazję.
        </p>
      </div>
    </div>
  </section>
);

export default ServiceSection;
