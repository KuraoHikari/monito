import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

const NavbarInput = () => {
  return (
    <div className="relative flex items-center max-w-2xl text-gray-500">
      <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
      <Input
        placeholder="Search something here!"
        className="rounded-full bg-white border-none  border-input pl-10"
      />
    </div>
  );
};

export default NavbarInput;
