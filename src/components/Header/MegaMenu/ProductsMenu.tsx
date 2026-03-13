import MegaMenuContainer from "./MegaMenuContainer";
import DropdownItem from "./DropdownItem";

import {
  Sparkles,
  Cpu,
  Cloud,
  Bot,
  Shield,
  Activity,
  Server
} from "lucide-react";

interface MenuProps {
  closeMenu: () => void;
  openMenu: () => void;
}

export default function ProductsMenu({ closeMenu, openMenu }: MenuProps) {
  return (
    <MegaMenuContainer>

      <div className="mega-column"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        <h4>AI Cloud</h4>

        <DropdownItem icon={Sparkles} title="v0" description="Build applications with AI" />
        <DropdownItem icon={Cpu} title="AI SDK" description="The AI Toolkit for TypeScript" />
        <DropdownItem icon={Cloud} title="AI Gateway" description="One endpoint, all models" />
        <DropdownItem icon={Server} title="Vercel Agent" description="Agent that knows your stack" />
        <DropdownItem icon={Cloud} title="Sandbox" description="AI workflows in live environments" />
      </div>

      <div className="mega-column">
        <h4>Core Platform</h4>

        <DropdownItem icon={Activity} title="CI/CD" description="Helping teams ship faster" />
        <DropdownItem icon={Cloud} title="Content Delivery" description="Fast, scalable delivery" />
        <DropdownItem icon={Server} title="Fluid Compute" description="Servers in serverless form" />
        <DropdownItem icon={Activity} title="Observability" description="Trace every step" />
      </div>

      <div className="mega-column">
        <h4>Security</h4>

        <DropdownItem icon={Bot} title="Bot Management" description="Scalable bot protection" />
        <DropdownItem icon={Shield} title="BotID" description="Invisible CAPTCHA" />
        <DropdownItem icon={Shield} title="Platform Security" description="DDoS Protection & Firewall" />
        <DropdownItem icon={Shield} title="Web Application Firewall" description="Granular protection" />
      </div>

    </MegaMenuContainer>
  );
}