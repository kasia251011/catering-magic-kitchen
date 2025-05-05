interface Route {
  url: Url | string;
  label: string;
}

export enum Url {
  HOME = "/#!",
  SERVICES = "#uslugi",
  OFFER = "#oferta",
  GALLERY = "#galeria",
  CONTACT = "#kontakt",
}

export const ROUTES: Route[] = [
  {
    url: Url.HOME,
    label: "Strona Główna",
  },
  {
    url: Url.SERVICES,
    label: "Usługi",
  },
  {
    url: Url.OFFER,
    label: "Oferta",
  },
  {
    url: Url.GALLERY,
    label: "Galeria",
  },
  {
    url: Url.CONTACT,
    label: "Kontakt",
  },
];
