import { ReactElement, ReactNode, useState } from "react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Button } from "../ui/button";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { useLocation } from "react-router-dom";

interface ReuseableCollapseableProps {
  children: ReactNode;
  title: string;
  icon: ReactElement;
  links: any[];
}

const ReuseableCollapseable = ({ children, title, icon, links }: ReuseableCollapseableProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = useLocation().pathname;
  const pathname = currentPath.split("/").pop();

  const isActive = links.includes(pathname);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          className={`w-full  text-left flex items-center justify-start bg-transparent text-base gap-y-2.5 text-gray-600  duration-300 ease-in-out rounded-sm font-semibold hover:bg-transparent hover:text-primary-hover `}
        >
          <div className={`flex items-center justify-between w-full ${isActive ? "text-primary" : ""}`}>
            <div className="flex items-center gap-x-3">
              {icon}
              <span>{title}</span>
            </div>
            <div className="text-xl">{isOpen ? <GoChevronDown className="" /> : <GoChevronRight />}</div>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-10">{children}</CollapsibleContent>
    </Collapsible>
  );
};

export default ReuseableCollapseable;
