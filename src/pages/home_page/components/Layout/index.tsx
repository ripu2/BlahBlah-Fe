import { ReactNode } from "react";
import { LayoutContainer, Sidebar, ContentArea } from "./styles";

interface LayoutProps {
  leftComponent: ReactNode;
  rightComponent: ReactNode;
}

export default function Layout({ leftComponent, rightComponent }: LayoutProps) {
  console.log("📌 Layout Component Rendered")
  return (
    <LayoutContainer>
      <Sidebar>{leftComponent}</Sidebar>
      <ContentArea>{rightComponent}</ContentArea>
    </LayoutContainer>
  );
}
