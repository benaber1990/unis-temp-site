import React, { useState, useEffect } from "react"
import COLORS from "../../misc/COLORS"
import * as styles from "../components/index.module.css"

export default function HomeRowF() {
  //  Check Small Device Screen Size
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    // Function to update isSmallScreen state based on window width
    const updateWindowDimensions = () => {
      setIsSmallScreen(window.innerWidth < 768) // You can adjust the threshold (768) based on your design
    }

    // Event listener to update state when the window is resized
    window.addEventListener("resize", updateWindowDimensions)

    // Initial call to set the initial state
    updateWindowDimensions()

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowDimensions)
    }
  }, [])

  return (
    <div style={{ marginTop: 120, marginBottom: 40 }}>
      <div
        style={{
          display: "flex",
        }}
      >
        {/* Col A */}
        <div
          style={{
            paddingLeft: isSmallScreen ? 20 : 100,
            paddingRight: isSmallScreen ? 20 : null,
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: isSmallScreen ? "center" : null,
          }}
        >
          <div
            className={styles.rowstitletext}
            style={{ textAlign: isSmallScreen ? "center" : "left" }}
          >
            Unlock the power of{" "}
            <span style={{ color: COLORS.green }}>UNIS</span> today & organise
            your company with one platform
          </div>
          <div
            style={{
              color: "white",
              fontSize: 22,
              textAlign: isSmallScreen ? "center" : "left",
              marginTop: 10,
            }}
          >
            Talk to our team today to find out more
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
              float: !isSmallScreen ? "left" : "center",
            }}
          >
            <div>SEE HOW UNIS CAN HELP ME</div>
          </div>
        </div>

        {/* Col B */}
        <div
          style={{
            width: isSmallScreen ? null : "50%",
            marginLeft: isSmallScreen ? 0 : 120,
            marginRight: isSmallScreen ? 0 : 160,
          }}
        >
          <div style={{ marginRight: isSmallScreen ? 0 : 60 }}>
            {!isSmallScreen ? (
              <img
                src="https://i.imgur.com/0ZDTjQd.jpg"
                style={{ margin: 20, borderRadius: 30 }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
