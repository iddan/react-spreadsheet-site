import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Spreadsheet from "react-spreadsheet"
import "./index.css"

const initialSpreadsheetData = Array(6)
  .fill(1)
  .map(() => Array(5))

const IndexPage = () => {
  const [spreadsheetData, setSpreadsheetData] = useState(initialSpreadsheetData)
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="hero">
        <h1>{title}</h1>
        <p>{description}</p>
        <Spreadsheet data={spreadsheetData} onChange={setSpreadsheetData} />
      </div>
      <section className="features">
        <div>
          <h3>Simple</h3>
          <p>
            Straightforward API focusing on common use cases while keeping
            flexibility
          </p>
        </div>
        <div>
          <h3>Performant</h3>
          <p>
            Draw and update tables with many columns and rows without
            virtualization
          </p>
        </div>
        <div>
          <h3>Just Components™</h3>
          <p>
            The Spreadsheet is just a component, compose it easily with other
            components and data
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
