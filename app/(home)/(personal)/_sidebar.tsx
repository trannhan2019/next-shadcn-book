import { Settings, User } from "lucide-react";
import Link from "next/link";

const links = [
  {
    name: "Profile",
    href: "/profile",
    icon: <User className="size-5" />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <Settings className="size-5" />,
  },
];

export default function Sidebar() {
  return (
    <div className="h-full w-full p-5 md:w-[250px] lg:h-screen">
      <ul className="h-full rounded-lg bg-white p-2 shadow-md md:h-1/2">
        {links.map((link) => (
          <li
            key={link.href}
            className="mb-2 flex items-center gap-2 p-2 hover:border-b hover:border-gray-200 hover:text-primary"
          >
            {link.icon}
            <Link className="w-full text-sm md:text-base" href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
