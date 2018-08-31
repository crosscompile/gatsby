import React from "react"
import { Flipper } from "react-flip-toolkit"
import { Location } from "@reach/router"

export const shouldUpdateScroll = args => {
  const windowWidth = window.innerWidth
  // Scroll position only matters on mobile as on larger screens, we use a
  // modal.
  if (windowWidth < 750) {
    return true
  } else {
    return false
  }
}

export const onInitialClientRender = () => {
  window.___GATSBYGRAM_INITIAL_RENDER_COMPLETE = true
}

export const wrapRootElement = ({ element }) => (
  <React.Fragment>
    <Location>
      {({ location }) => (
        <Flipper flipKey={location.key} portalKey="app">
          {element}
        </Flipper>
      )}
    </Location>
  </React.Fragment>
)
