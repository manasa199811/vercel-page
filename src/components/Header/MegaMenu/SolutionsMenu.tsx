import MegaMenuContainer from "./MegaMenuContainer";
import DropdownItem from "./DropdownItem";

import {
  Sparkles,
  ShoppingCart,
  Monitor,
  Layers,
  Users,
  Wrench
} from "lucide-react";

interface MenuProps {
  closeMenu: () => void;
  openMenu: () => void;
}

export default function SolutionsMenu({ closeMenu, openMenu }: MenuProps) {
  return (
    <MegaMenuContainer>

      <div className="mega-column"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}

      >
        <h4>Use Cases</h4>

        <DropdownItem icon={Sparkles} title="AI Apps" description="Deploy at the speed of AI" />
        <DropdownItem icon={ShoppingCart} title="Composable Commerce" description="Power storefronts" />
        <DropdownItem icon={Monitor} title="Marketing Sites" description="Launch campaigns fast" />
        <DropdownItem icon={Layers} title="Multi-tenant Platforms" description="Scale apps with one codebase" />
        <DropdownItem icon={Monitor} title="Web Apps" description="Ship features fast" />
      </div>

      <div className="mega-column">
        <h4>Tools</h4>

        <DropdownItem icon={Wrench} title="Marketplace" description="Extend workflows" />
        <DropdownItem icon={Layers} title="Templates" description="Jumpstart development" />
        <DropdownItem icon={Users} title="Partner Finder" description="Find solution partners" />
      </div>

      <div className="mega-column">
        <h4>Users</h4>

        <DropdownItem icon={Users} title="Platform Engineers" description="Automate repetition" />
        <DropdownItem icon={Users} title="Design Engineers" description="Deploy every idea" />
      </div>

    </MegaMenuContainer>
  );
}