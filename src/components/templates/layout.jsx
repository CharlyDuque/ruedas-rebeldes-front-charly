import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../particles/globalStyles"
import themeDefault from "../particles/themeDefault"
import Header from "../organisms/header/header"
import NavBar from "../organisms/navBar/navBar"
import Footer from "../organisms/footer/footer"
import useScrollListener from "../particles/hooks/useScrollListener"

export const Layout = ({ children, isFrontPage }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollToSolid, setScrollToSolid] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [solidH, setSolidH] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }, [])

  const onSCroll = currentScroll => {
    if (currentScroll > lastScrollY) {
      if (currentScroll >= scrollToSolid) {
        setSolidH(true)
      }
    } else {
      if (currentScroll < scrollToSolid) {
        setSolidH(false)
      }
    }
    setLastScrollY(currentScroll)
  }

  useScrollListener("window", onSCroll)

  useEffect(() => {
    if (window !== undefined) {
      const winWidth = window.innerWidth
      if (winWidth < 768) {
        setScrollToSolid(20)
      } else {
        if (winWidth < 1024) {
          setScrollToSolid(50)
        } else {
          if (winWidth < 1366) {
            setScrollToSolid(100)
          } else {
            if (winWidth < 1920) {
              setScrollToSolid(50)
            } else {
              setScrollToSolid(50)
            }
          }
        }
      }
    }
  }, [])

  if (!isLoaded) return null

  return (
    <>
      <ThemeProvider theme={themeDefault}>
        <>
          <GlobalStyles />
          <Header solid={solidH}>
            <NavBar />
          </Header>
          <main>{children}</main>
          <Footer />
        </>
      </ThemeProvider>
    </>
  )
}

Layout.defaultProps = {
  children: null,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
