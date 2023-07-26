import Link from "next/link"
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si"

export const Footer = () => {
  return (
    <div className="w-full flex justify-between">
      <Link href="https://github.com/brunooomelo" rel="noopener noreferrer">
        <SiGithub size={24} />
      </Link>
      <Link href="https://www.linkedin.com/in/brunooomelo" rel="noopener noreferrer">
        <SiLinkedin size={24} />
      </Link>
      <Link href="https://twitter.com/brunooomelo" rel="noopener noreferrer">
        <SiTwitter size={24} />
      </Link>
    </div>
  )
}
