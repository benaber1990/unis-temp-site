import React, { useState, useEffect, useLayoutEffect } from "react"
import ScrollTrigger from "react-scroll-trigger"
import COLORS from "../../misc/COLORS"
import * as styles from "../components/index.module.css"
import { Link } from "gatsby"
import { useMediaQuery } from "react-responsive"

export default function HomeRowC() {
  const [isVisible, setIsVisible] = useState(false)

  const handleEnterViewport = () => {
    setIsVisible(true)
  }

  const isSmallScreen = useMediaQuery({ maxWidth: 768 })

  const imageStyle = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    marginLeft: null,
    width: 600,
    // marginRight: isSmallScreen ? null : -160,
    resize: "contain",
    borderRadius: 30,
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    marginLeft: isVisible ? 0 : "-100px",
    paddingLeft: isSmallScreen ? 20 : null,
    paddingRight: isSmallScreen ? 20 : null, // Adjust the initial left position
  }

  return (
    <div style={{ marginTop: 80, paddingBottom: 60 }}>
      <div className={styles.rowstitletext} style={{ marginBottom: 50 }}>
        ALL YOU NEED IN <span style={{ color: COLORS.green }}>ONE PLACE</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: isSmallScreen ? "column" : "row",
          //   justifyContent: "center",
        }}
      >
        {/* Col A */}
        <div style={{ width: isSmallScreen ? null : "50%" }}>
          <ScrollTrigger
            style={{ borderRadius: 30 }}
            onEnter={handleEnterViewport}
          >
            <img src="https://i.imgur.com/s8ictbb.jpg" style={imageStyle} />
          </ScrollTrigger>
        </div>
        {/* Col B */}
        <div
          style={
            {
              // marginRight: !isSmallScreen ? 200 : null,
              // marginLeft: !isSmallScreen ? 200 : null,
            }
          }
        >
          <div className={styles.rowstext}>
            The ideal construction management software didn’t exist - so we
            built it
            <br /> <br />{" "}
            <span>
              <span style={{ color: COLORS.green, fontWeight: "700" }}>
                UNIS
              </span>{" "}
            </span>
            is for construction companies who want less hassle, <br />
            better communication and more efficiency
            <br /> <br /> Unlock exclusive tools built to help companies like
            yours succeed
          </div>

          <div
            style={{
              backgroundColor: COLORS.purple,
              color: "white",
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 40,
              marginTop: 20,
              fontWeight: "700",
              display: "inline-block",
              float: !isSmallScreen ? "left" : null,
              cursor: "pointer",
            }}
          >
            <Link
              to="/comingsoon"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "700",
              }}
            >
              <div
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                FIND OUT MORE
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
