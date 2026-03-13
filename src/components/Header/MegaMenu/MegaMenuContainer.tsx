import React from "react";
import "./MegaMenu.css";

interface Props {
  children: React.ReactNode;
}

export default function MegaMenuContainer({ children }: Props) {
  return <div className="mega-menu-container">{children}</div>;
}