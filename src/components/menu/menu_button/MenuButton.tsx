import './menu-button.css'

type MenuButtonProps = {
  onClick?: () => void
}

export function MenuButton(menuButtonProps: MenuButtonProps) {
  return <img
    className="menu-button"
    src="https://static.tildacdn.com/tild3236-3237-4231-b039-363137353132/menu.svg"
    alt="menu"
    onClick={menuButtonProps.onClick}
  />
}