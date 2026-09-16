import Link from "next/link";
import Image from "next/image";

type ICompanyData = {
  label: string;
  url: string;
  imgPath: string;
  height: number;
  width: number;
};

const companies: ICompanyData[] = [
  {
    label: "Provi",
    url: "https://provi.com.br",
    imgPath: "/home/provi.svg",
    height: 37,
    width: 125,
  },
  {
    label: "Popstand",
    url: "https://www.linkedin.com/company/popstand",
    imgPath: "/home/popstand.svg",
    height: 30,
    width: 135,
  },
  {
    label: "Logistíca G2L",
    url: "https://logisticag2l.com.br",
    imgPath: "/home/g2l.svg",
    height: 46,
    width: 96,
  },
  {
    label: "Polowear",
    url: "https://www.polowear.com.br",
    imgPath: "/home/polowear.svg",
    height: 24,
    width: 125,
  },
];

export const CompanyWorked = () => (
  <section
    // Mesmo motivo do grid das tecnologias: largura fixa em px + wrap fazia a
    // fileira de logos comecar num x diferente do texto em cada breakpoint.
    className="grid grid-cols-2 justify-items-start gap-x-6 gap-y-8 md:grid-cols-4"
  >
    {companies.map((company) => (
      <Link
        key={company.label}
        aria-label={`Conheça mais sobre a ${company.label}`}
        href={company.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 items-center opacity-70 transition-opacity hover:opacity-100 focus-visible:opacity-100"
      >
        <Image
          src={company.imgPath}
          alt={`Logo da ${company.label}`}
          height={company.height}
          width={company.width}
          // Sem isto o logo de 135px estoura a coluna a 320px de viewport.
          className="h-auto max-w-full"
        />
      </Link>
    ))}
  </section>
);
