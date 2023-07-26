import Link from "next/link"

export const Header = () => {
  return (
    <header className="w-full h-14 flex items-center">
      <ul className="flex gap-4">
        <Link href="/">
          <li className="underline">
            HOME
          </li>
        </Link>
      </ul>
    </header>
  )
}
