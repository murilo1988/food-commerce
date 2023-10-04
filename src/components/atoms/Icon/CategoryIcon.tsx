
interface CategoryIconProps {
  icon: string;
  alt?: string

}

function CategoryIcon({ icon, alt }: CategoryIconProps) {
  return (
    <img src={icon} alt={alt} />
  )
}
export default CategoryIcon
