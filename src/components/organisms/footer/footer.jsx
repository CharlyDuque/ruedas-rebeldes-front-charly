import React from "react"
import { StyledFooter, StyledRigthConteiner, StyledLeftConteiner, StyledContact, StyledSocialContainer } from "./footer.styles"
import { Col, Container, Row } from "react-awesome-styled-grid"
import Image from "../../atoms/media/image/image"
import imgRuedas from "../../../../static/assets/images/common/logo_ruedas.png"
import imgBCJB from "../../../../static/assets/images/common/logo_bcjb.png"
import ProjectIcon from "../../atoms/icons/icon/projectIcon/projectIcon"

const componentId = `o-footer`

const Footer = ({ className }) => {
  return (
    <StyledFooter className={`${componentId} ${className}`}>
      <Container className={`${componentId}__container`}>
        <Row>
          <Col className={`${componentId}__left-block`} xs={2} sm={4} md={5} lg={5} xl={5} offset={{ xs: 0, sm: 0, md: 1, lg: 1, xl: 1 }}>
            <StyledLeftConteiner>
              <a href="https://www.ruedasrebeldes.com/" target="_blank" rel="norefferer">
                <Image className={`${componentId}__img-ruedas`} sourceUrl={imgRuedas} width="100%" />
              </a>
              <StyledContact>
                <p>contacto@ruedasrebeldes.com Ruedas Rebeldes. Periodismo en bicicleta. Saltillo, Coahuila. MX</p>
              </StyledContact>
            </StyledLeftConteiner>
          </Col>
          <Col className={`${componentId}__right-block`} xs={2} sm={4} md={5} lg={5} xl={5} offset={{ xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }}>
            <StyledRigthConteiner>
              <Image className={`${componentId}__img-bcjb`} sourceUrl={imgBCJB} width="100%" />
              <StyledSocialContainer>
                <a href="https://www.facebook.com/profile.php?id=100083014976811" target="_blank" rel="norefferer">
                  <ProjectIcon id="fb" />
                </a>
                <a href="https://www.tiktok.com/@ruedasrebeldes" target="_blank" rel="norefferer">
                  <ProjectIcon id="tiktok" />
                </a>
                <a href="https://twitter.com/ruedasrebeldes" target="_blank" rel="norefferer">
                  <ProjectIcon id="twitter" />
                </a>
                <a href="https://www.youtube.com/@ruedasrebeldes" target="_blank" rel="norefferer">
                  <ProjectIcon id="youtube" />
                </a>
              </StyledSocialContainer>
            </StyledRigthConteiner>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  )
}

// Expected prop values
Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
