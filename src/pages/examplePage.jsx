import React from "react"
import {
  StyledPage,
  StyledTitle,
  StyledSubtitle,
  StyledParagraph,
  StyledLink,
  PinGreen,
  PinYellow,
  PinRed
} from "../pages/examplepage"
const ExamplePage = () => {
  return (
    <StyledPage>
      <StyledTitle>Metodología</StyledTitle>
      <StyledSubtitle>Monitor de Movilidad Saltillo</StyledSubtitle>
      <StyledParagraph>
        Monitor de Movilidad Saltillo analiza la infraestructura urbana de la ciudad enfocada en la movilidad, revisa los contratos, sus procesos de adjudicación, las empresas ganadoras y el medio de transporte que se fomenta, así como posibles irregularidades y hechos de presunta corrupción.
      </StyledParagraph>
      <StyledParagraph>
        Se nutre de tres fuentes principales: portal de Transparencia del Gobierno Municipal de Saltillo, Plataforma Nacional de Transparencia (PNT) y Siger del Registro Público de Comercio (RPC), de la Secretaría de Economía federal.
      </StyledParagraph>
      <StyledSubtitle>Transparencia de Saltillo</StyledSubtitle>
      <StyledParagraph>
        El portal de Transparencia del Municipio de Saltillo nos permitió identificar todas las obras públicas en materia de movilidad, así como los montos, el origen de los recursos, dependencias responsables, procesos y contratistas que ejecutaron las obras.
        Asimismo, obtuvimos la mayoría de los contratos de donde tomamos las autoridades y contratistas que firmaron los documentos, las fechas de inicio y término de los contratos.
        Recurrimos también a los boletines oficiales que informaban sobre avances y entrega de la infraestructura que investigamos.
      </StyledParagraph>
      <StyledParagraph>
        Plataforma Nacional de Transparencia (PNT)
        <StyledLink href="https://www.plataformadetransparencia.org.mx/" target="_blank" rel="noopener noreferrer">Link</StyledLink>
        Gracias a la PNT tuvimos acceso a los contratos que no se encontraban en el portal de Transparencia del Municipio, además de una relación de obras públicas en materia de movilidad del año 2018 a 2023.
        El listado nos permitió corroborar el total de obras públicas contratadas por el Municipio de Saltillo.
      </StyledParagraph>
      <StyledParagraph>
        SIGER
        <StyledLink href="https://rpc.economia.gob.mx/siger2/xhtml/login/login.xhtml;jsessionid=WgRlw4PJaFlx2DwagZ4Nd127OYyNhxIRIfZe8C_7QxdUSMsZmGqC!-1120396393" target="_blank" rel="noopener noreferrer">Link</StyledLink>
        A través de la búsqueda en el Siger del RPC, de la Secretaría de Economía federal, pudimos obtener información sobre los socios, apoderados legales y responsables de las empresas beneficiadas con contratos en materia de obra pública enfocada en movilidad en Saltillo.
      </StyledParagraph>
      <StyledSubtitle>Indicadores de Irregularidades</StyledSubtitle>
      <StyledParagraph>
        <PinGreen>Pin verde:</PinGreen> No encontramos irregularidades en la obra, con la información que contamos hasta ahora.
      </StyledParagraph>
      <StyledParagraph>
        <PinYellow>Pin amarillo:</PinYellow> La obra tiene alguna irregularidad que no está forzosamente relacionada con corrupción, como sobrecosto, entrega fuera de tiempo, empresa de nueva creación o especialidad diferente a la requerida.
      </StyledParagraph>
      <StyledParagraph>
        <PinRed>Pin rojo:</PinRed> La obra tiene irregularidades que están probablemente relacionadas con presunta corrupción; es decir, con faltas administrativas graves, de acuerdo con la Ley General de Responsabilidades Administrativas (Artículos 52- 64 Ter y del 65- 72), como conflicto de interés y tráfico de influencias.
      </StyledParagraph>
      <StyledParagraph>
        Link para la Ley General de Responsabilidad Administrativas:
        <StyledLink href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LGRA.pdf" target="_blank" rel="noopener noreferrer">Link</StyledLink>
      </StyledParagraph>
    </StyledPage>
  )
}

export default ExamplePage
