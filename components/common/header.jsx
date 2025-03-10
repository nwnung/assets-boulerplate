import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-50">
      <div className="container mx-auto flex h-14 items-center px-8">
        <div className="flex items-center">
          <Link className="flex space-x-2" href="/">
            <span className="font-bold mr-8 bg-amber-600 p-1.5 shadow-xl rounded-xl">
              Pweet
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-[13px] font-medium">
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <Button asChild className="ml-auto" variant="outline">
          <Link href="/app">App</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
