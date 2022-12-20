import LogoImage from 'public/assets/image/pof_logo.png'
import Image from 'next/image'
import styled from 'styled-components'

interface LogoProps {
  id?: string
  versionInfo: string
}

const Logo = (props: LogoProps) => {
  const { id, versionInfo } = props

  return (
    <LogoStyle id={id}>
      <Image src={LogoImage} alt="Pokedex-Of-Fame" width={220} className="logo-image" />
      <span className="version-info">{versionInfo}</span>
    </LogoStyle>
  )
}

export default Logo

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .version-info {
    font-size: 16px;
  }
`
