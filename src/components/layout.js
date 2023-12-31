/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import COLORS from "../../misc/COLORS"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        // marginTop: -40,
        paddingTop: 0,
      }}
    >
      <main
        style={{
          textAlign: "center",
          backgroundColor: "#06011f",
          paddingBottom: 40,
          // paddingTop: 40,
          // width: "100%",

          // padding: `var(--size-gutter)`,
        }}
      >
        {children}
      </main>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
          margin: 20,
        }}
      >
        © {new Date().getFullYear()} &middot;
        {` `}
        <a href="https://www.unis.one">Built by UNIS</a>
      </footer>
    </div>
  )
}

export default Layout
