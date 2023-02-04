import './header.css'
import {BrandLogo} from "./brand_logo/BrandLogo";

type HeaderProps = {
  onBrandLogoClick?: () => void,
  headerHeight?: number
}

export function Header(headerProps: HeaderProps) {
  return <div className="header" id="header">
    <BrandLogo onClick={headerProps.onBrandLogoClick} />
  </div>
}