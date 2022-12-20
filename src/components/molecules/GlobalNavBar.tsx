import styled from 'styled-components'
import Logo from '../atoms/Logo'

interface GlobalNavBarProps {
  id?: string
  versionInfo: string
}

const GlobalNavBar = (props: GlobalNavBarProps) => {
  const { id, versionInfo } = props

  return (
    <GlobalNavBarStyle id={id}>
      <Logo versionInfo={versionInfo} id="main-logo" />
    </GlobalNavBarStyle>
  )
}

export default GlobalNavBar

const GlobalNavBarStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  height: 70px;
  box-shadow: 1px 5px 12px -5px rgba(110, 110, 110, 0.5);
  -webkit-box-shadow: 1px 1px 12px -5px rgba(110, 110, 110, 0.5);
  -moz-box-shadow: 1px 5px 12px -5px rgba(110, 110, 110, 0.5);

  #main-logo {
    margin-left: 4vw;
  }
`
