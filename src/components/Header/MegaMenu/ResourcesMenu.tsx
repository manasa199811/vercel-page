import MegaMenuContainer from "./MegaMenuContainer";
import DropdownItem from "./DropdownItem";

import {
  Book,
  Newspaper,
  Calendar,
  GraduationCap,
  Users,
  Globe
} from "lucide-react";

interface MenuProps {
  closeMenu: () => void;
  openMenu: () => void;
}

export default function ResourcesMenu({ closeMenu, openMenu }: MenuProps) {
  return (
    <MegaMenuContainer>

      <div className="mega-column"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        <h4>Company</h4>

        <DropdownItem icon={Users} title="Customers" description="Trusted by the best teams" />
        <DropdownItem icon={Newspaper} title="Blog" description="Latest posts and changes" />
        <DropdownItem icon={Calendar} title="Changelog" description="See what shipped" />
        <DropdownItem icon={Globe} title="Press" description="Latest news" />
        <DropdownItem icon={Calendar} title="Events" description="Join us at events" />
      </div>

      <div className="mega-column">
        <h4>Learn</h4>

        <DropdownItem icon={Book} title="Docs" description="Vercel documentation" />
        <DropdownItem icon={GraduationCap} title="Academy" description="Courses to level up" />
        <DropdownItem icon={Book} title="Knowledge Base" description="Find help quickly" />
        <DropdownItem icon={Users} title="Community" description="Join the conversation" />
      </div>

      <div className="mega-column">
        <h4>Open Source</h4>

        <DropdownItem icon={Globe} title="Next.js" description="The native Next.js platform" />
        <DropdownItem icon={Globe} title="Nuxt" description="Progressive web framework" />
        <DropdownItem icon={Globe} title="Svelte" description="Efficient UI framework" />
        <DropdownItem icon={Globe} title="Turborepo" description="Speed with enterprise scale" />
      </div>

    </MegaMenuContainer>
  );
}