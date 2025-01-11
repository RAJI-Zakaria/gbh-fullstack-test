import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";

export const DegetelLogo = () => {
  return (
    <Image
      src="/logo-degetel-transparent.png"
      alt="Degetel logo"
      width={92}
      height={92}
    />
  );
};

export default function App() {
  const menuItems = ["Home", "Vehicles", "About", "Contact", "Services"];

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <DegetelLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <DegetelLogo />
        </NavbarBrand>
        <NavbarItem>
          <Link
            aria-current="page"
            className="text-black hover:text-gray-700"
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/vehicles"
            aria-current="page"
            className="text-black hover:text-gray-700"
          >
            Vehicles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" color="warning" href="/">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="/"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
