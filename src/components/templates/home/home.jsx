import React, { useState, useEffect } from "react"
import { Layout } from "../layout"
import MainHome from "../../pages/home/mainHome"
import { useGetBuildings } from "../../particles/hooks/useGetBuildings"

const HomeTemplete = ({ pageContext, path }) => {
  //const { blocks } = pageContext
  const [isFront, setIsFront] = useState(false)
  const buildings = useGetBuildings()
  useEffect(() => {
    setIsFront(true)
  }, [])

  if (!isFront) return null

  return (
    <Layout isFrontPage={true}>
      <MainHome buildings={buildings} />
    </Layout>
  )
}

export default HomeTemplete
