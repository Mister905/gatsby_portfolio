import React from "react"
import { Helmet } from "react-helmet"

const Head = props => {
    
  const { title } = props

  return (
    <Helmet title={`${title}`}>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans|Permanent+Marker|Tomorrow&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Helmet>
  )
}
export default Head
