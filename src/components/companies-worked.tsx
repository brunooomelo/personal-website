import Link from 'next/link'
import Image from 'next/image'

type ICompanyData = {
  label: string
  url: string
  imgPath: string
  height: number
  width: number
}

const companies: ICompanyData[] = [
  {
    label: 'Provi',
    url: 'https://provi.com.br',
    imgPath: '/home/provi.svg',
    height: 37,
    width: 125
  }, {
    label: 'Popstand',
    url: 'https://www.linkedin.com/company/popstand',
    imgPath: '/home/popstand.svg',
    height: 30,
    width: 135
  }, {
    label: 'Logistíca G2L',
    url: 'https://logisticag2l.com.br',
    imgPath: '/home/g2l.svg',
    height: 46,
    width: 96
  }, {
    label: 'Polowear',
    url: 'https://www.polowear.com.br',
    imgPath: '/home/polowear.svg',
    height: 24,
    width: 125
  }]

export const CompanyWorked = () => (
  companies.map(company => (
    <Link key={company.label} aria-label={`Conheça mais sobre a ${company.label}`} href={company.url} target="_blank" rel="noopener noreferrer" className="w-[150px] min-[514px]:w-[200px] sm:w-[250px] md:w-[170px] h-[100px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
      <Image src={company.imgPath} alt={`Logo da ${company.label}`} height={company.height} width={company.width} />
    </Link>
  ))
)
