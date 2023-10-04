import CategoryIcon from "../../atoms/Icon/CategoryIcon";
import Link from "../../atoms/Link/Link";

interface ListItemProps {
  icon: string;
  text?: string;
  link?: string
}



function ListItem({ icon, text, link }: ListItemProps) {
  return (
    <li>
      <Link link='#'>
        <CategoryIcon icon={icon} />
        <span>{text}</span>
      </Link>
    </li>
  )
}
export default ListItem
