import { ReactNode } from "react";


interface ListItemProps {
  children: ReactNode;
  className?: string;
  text?: string;
  link?: string
}



function ListItem({ children, className, text, link }: ListItemProps) {
  return (
    <li >
      <a className={className} >
        {children}
        <span>{text}</span>
      </a>
    </li>
  )
}
export default ListItem
