import Image from 'next/image'
import styled from 'styled-components'

interface MediumImageProps {
  id?: string
  src: string
  alt: string
}

const MediumImage = (props: MediumImageProps) => {
  const { id, src, alt } = props

  return (
    <MediumImageStyle id={id}>
      <Image src={src} alt={alt} width={150} height={150} />
    </MediumImageStyle>
  )
}

export default MediumImage

const MediumImageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
