import './slogan.css'
import {useEffect} from "react";

type SloganProps = {
  headerHeight: number
}

export function Slogan(sloganProps: SloganProps) {
  useEffect(() => {
    document.getElementById('root')?.style.setProperty('--header-height', `${sloganProps.headerHeight}px`)
  })

  return <div className="slogan-container" id="slogan">
    <span className="slogan-brand">{sloganProps.headerHeight}Control Digital</span>
    <span className="slogan-default"> – ваш партнер</span><br />
    <span className="slogan-default"> по завоеванию клиентов</span><br />
    <span className="slogan-default"> в интернете</span>
  </div>
}