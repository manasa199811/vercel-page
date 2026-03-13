import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function DropdownItem({ icon: Icon, title, description }: Props) {
  return (
    <div className="dropdown-item">
      <div className="dropdown-icon">
        <Icon size={18} />
      </div>

      <div className="dropdown-text">
        <div className="dropdown-title">{title}</div>
        <div className="dropdown-desc">{description}</div>
      </div>
    </div>
  );
}