import Image from "next/image";
import Link from "next/link";
import PHONE from "@/assets/icons/phone.svg";
import OFFER_IMG from "@/assets/offer.webp";

const OfferSection = () => (
  <section id="oferta" className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 border-white border-solid border-2 p-4  rounded-lg">
      <div className="relative rounded-lg h-full  min-h-52">
        <Image
          src={OFFER_IMG}
          alt="tło"
          className="absolute top-0 w-full h-full object-cover rounded-lg"
          placeholder="blur"
        />
      </div>

      <div className="p-5 sm:p-10">
        <h3>Nasza oferta</h3>
        <p>
          W naszym kateringu każde danie to opowieść o starannie dobranej
          jakości i tradycji. Nasze ciasta są wypiekane własnoręcznie, aby każdy
          kęs miał smak domowego ciepła.{" "}
        </p>
        <br />
        <p>
          Specjalizujemy się w kuchni polskiej, która jest dla nas inspiracją i
          pasją. Wykorzystujemy lokalne składniki, by podkreślić bogactwo smaków
          naszych regionów.
        </p>
        <div className="bg-primary rounded-md w-fit py-2 px-3 mt-10 flex ">
          <Image src={PHONE} alt="telefon" />
          <Link
            className="pl-3 font-semibold text-sm text-white"
            href="tel:601-265-400"
          >
            Zadzwoń do nas
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default OfferSection;
