import React, { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import useComponentSize from "@rehooks/component-size"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Spreadsheet from "react-spreadsheet"
import "resize-observer-polyfill"
import "./index.css"

const createInitialData = (rows, columns) => {
  return Array(rows)
    .fill(1)
    .map(() => Array(columns))
}

const IndexPage = () => {
  const [spreadsheetData, setSpreadsheetData] = useState(
    createInitialData(4, 5)
  )
  const spreadsheetRef = useRef(null)
  const spreadsheetSize = useComponentSize(spreadsheetRef)
  const columns = Math.floor(spreadsheetSize.width / 75)
  useEffect(() => {
    if (columns) {
      const nextSpreadsheetData = spreadsheetData.map(row => {
        const nextRow = [...row]
        nextRow.length = columns
        return nextRow
      })
      setSpreadsheetData(nextSpreadsheetData)
    }
  }, [columns])
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
        <div ref={spreadsheetRef} className="SpreadsheetContainer">
          <Spreadsheet data={spreadsheetData} onChange={setSpreadsheetData} />
        </div>
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
