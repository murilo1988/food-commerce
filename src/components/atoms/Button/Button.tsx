import { ReactNode } from "react";


interface ButtonProps {
  to?: string
  onClick?: () => void;
  children: ReactNode
}


function Button({ to, onClick, children }: ButtonProps) {

  if (to) {
    return (
      <a href={to} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  )
}
export default Button
