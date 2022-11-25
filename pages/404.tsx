import styled from 'styled-components'
import Image from 'next/image'

const Custom404 = () => {
  return (
    <Custom404Style>
      <h1>404</h1>
      <div className="image-message-container">
        <Image src="/assets/image/Unown.png" width={90} height={90} alt="안농" />
        <p className="error-message">존재하지 않는 페이지입니다.</p>
      </div>
    </Custom404Style>
  )
}

export default Custom404

const Custom404Style = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
    color: white;
  }
  h1 {
    left: -70px;
    position: relative;
    background: #292929;
    border-radius: 0.4em;
    padding: 10px 20px;
  }

  h1:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 31px solid transparent;
    border-top-color: #292929;
    border-bottom: 0;
    border-left: 0;
    margin-left: -15.5px;
    margin-bottom: -21px;
  }

  .image-message-container {
    display: flex;
    align-items: center;

    .error-message {
      font-size: 20px;
      font-weight: bold;
    }
  }
`
