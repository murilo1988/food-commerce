import { ReactNode } from "react";

interface LinkProps {
  link: string;
  children: ReactNode
}


function Link({ link, children }: LinkProps) {
  return (
    <a href={link}>
      {children}
    </a>
  )
}
export default Link
