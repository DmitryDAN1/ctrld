import './brand-logo.css'

type BrandLogoProps = {
  onClick?: () => void,
}

export function BrandLogo(brandLogoProps: BrandLogoProps) {
  return <img className="brand-logo"
              src="https://static.tildacdn.com/tild6162-3133-4136-b830-326438646166/logo2018_3_3.svg"
              alt="Logo"
              onClick={brandLogoProps.onClick}
  />
}