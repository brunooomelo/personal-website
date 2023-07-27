import Link from "next/link"

export const Header = () => {
  return (
    <header className="w-full h-14 flex items-center">
      <ul className="flex gap-4">
        <li className="underline">
          <Link arial-label="Ir para a Home" href="/">
            HOME
          </Link>
        </li>
      </ul>
    </header>
  )
}
