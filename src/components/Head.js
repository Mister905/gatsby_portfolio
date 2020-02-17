import React from "react"
import { Helmet } from "react-helmet"

const Head = props => {
  const { title, landing } = props

  if (landing) {
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
        <body className="landing-bg" />
      </Helmet>
    )
  } else {
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
}
export default Head
