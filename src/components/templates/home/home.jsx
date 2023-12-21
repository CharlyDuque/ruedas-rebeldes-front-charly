import React, { useState, useEffect } from "react"
import { Layout } from "../layout"
import MainHome from "../../pages/home/mainHome"

const HomeTemplete = ({ pageContext, path }) => {
  //const { blocks } = pageContext
  const [isFront, setIsFront] = useState(false)

  useEffect(() => {
    setIsFront(true)
  }, [])

  if (!isFront) return null

  return (
    <Layout isFrontPage={true}>
      <MainHome />
    </Layout>
  )
}

export default HomeTemplete
