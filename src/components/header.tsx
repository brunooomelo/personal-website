import { pageview } from "@/utils/gtag";
import Link from "next/link";
import { useRouter } from "next/router";

const pages = [
  {
    label: "home",
    ariaLabel: "Ir para a página inicial",
    url: "/",
  },
  {
    label: "blog",
    ariaLabel: "Ir para a página do blog",
    url: "/blog",
  },
  {
    label: "guestbook",
    ariaLabel: "Ir para a página do guestbook",
    url: "/guestbook",
  },
];

export const Header = () => {
  const { route } = useRouter();
  return (
    <header className="w-full h-14 flex items-center">
      <ul className="flex gap-4">
        {pages.map((page) => (
          <li
            className={`${route === page.url ? "underline" : ""} uppercase`}
            key={page.label}
          >
            <Link
              aria-label={page.ariaLabel}
              href={page.url}
              as={page.url}
              onClick={() => pageview(page.url)}
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
