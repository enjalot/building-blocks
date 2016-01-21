/* =========================================================================
 *
 *  icons.js
 *    icons
 *
 * ========================================================================= */
import React from 'react';



class IconExternalLink extends React.Component {
  render() {
    return (
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8">
        <path d="M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z" />
      </svg>
    )
  }
}
export { IconExternalLink }

// taken from: http://codepen.io/aurer/pen/jEGbA
class IconLoader extends React.Component {
  render() {
    return (
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    )
  }
}
export { IconLoader }

// https://raw.githubusercontent.com/iconic/open-iconic/master/svg/lock-locked.svg
class IconPublic extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8">
        <path d="M3 0c-1.1 0-2 .9-2 2h1c0-.56.44-1 1-1s1 .44 1 1v2h-4v4h6v-4h-1v-2c0-1.1-.9-2-2-2z" transform="translate(1)" />
      </svg>
    )
  }
}
export { IconPublic }

// https://raw.githubusercontent.com/iconic/open-iconic/master/svg/lock-locked.svg
class IconPrivate extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8">
        <path d="M3 0c-1.1 0-2 .9-2 2v1h-1v4h6v-4h-1v-1c0-1.1-.9-2-2-2zm0 1c.56 0 1 .44 1 1v1h-2v-1c0-.56.44-1 1-1z" transform="translate(1)" />
      </svg>
    )
  }
}
export { IconPrivate }

class IconQuestion extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8">
        <path d="M2.47 0c-.85 0-1.48.26-1.88.66-.4.4-.54.9-.59 1.28l1 .13c.04-.25.12-.5.31-.69.19-.19.49-.38 1.16-.38.66 0 1.02.16 1.22.34.2.18.28.4.28.66 0 .83-.34 1.06-.84 1.5-.5.44-1.16 1.08-1.16 2.25v.25h1v-.25c0-.83.31-1.06.81-1.5.5-.44 1.19-1.08 1.19-2.25 0-.48-.17-1.02-.59-1.41-.43-.39-1.07-.59-1.91-.59zm-.5 7v1h1v-1h-1z"
        transform="translate(2)" />
      </svg>
    )
  }
}
export { IconQuestion }

class IconImage extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8">
        <path d="M0 0v8h8v-8h-8zm1 1h6v3l-1-1-1 1 2 2v1h-1l-4-4-1 1v-3z" />
      </svg>
    )
  }
}
export { IconImage }

// For Homepage link
//https://raw.githubusercontent.com/iconic/open-iconic/master/svg/home.svg
class IconHome extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8">
        <path d="M4 0l-4 3h1v4h2v-2h2v2h2v-4.03l1 .03-4-3z" />
      </svg>
    )
  }
}
export { IconHome }

// For Gallery link
//https://raw.githubusercontent.com/iconic/open-iconic/master/svg/grid-three-up.svg
class IconGrid extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8">
        <path d="M0 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm-6 3v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm-6 3v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z" />
      </svg>
    )
  }
}
export { IconGrid }

// For the About page link
//https://raw.githubusercontent.com/iconic/open-iconic/master/svg/terminal.svg
class IconTerminal extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8">
        <path d="M.09 0c-.06 0-.09.04-.09.09v7.81c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-7.81c0-.06-.04-.09-.09-.09h-7.81zm1.41.78l1.72 1.72-1.72 1.72-.72-.72 1-1-1-1 .72-.72zm2.5 2.22h3v1h-3v-1z" />
      </svg>
    )
  }
}
export { IconTerminal }

//https://raw.githubusercontent.com/iconic/open-iconic/master/svg/fullscreen-enter.svg
class IconFullScreenEnter extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8">
        <path d="M0 0v4l1.5-1.5 1.5 1.5 1-1-1.5-1.5 1.5-1.5h-4zm5 4l-1 1 1.5 1.5-1.5 1.5h4v-4l-1.5 1.5-1.5-1.5z" />
      </svg>
    )
  }
}
export { IconFullScreenEnter }

//https://raw.githubusercontent.com/iconic/open-iconic/master/svg/fullscreen-exit.svg
class IconFullScreenExit extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8">
        <path d="M1 0l-1 1 1.5 1.5-1.5 1.5h4v-4l-1.5 1.5-1.5-1.5zm3 4v4l1.5-1.5 1.5 1.5 1-1-1.5-1.5 1.5-1.5h-4z" />
      </svg>
    )
  }
}
export { IconFullScreenExit }

//https://raw.githubusercontent.com/iconic/open-iconic/master/svg/media-play.svg
class IconPlay extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8">
        <path d="M0 0v6l6-3-6-3z" transform="translate(1 1)" />
      </svg>
    )
  }
}
export { IconPlay }

//https://raw.githubusercontent.com/iconic/open-iconic/master/svg/media-pause.svg
class IconPause extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8 8">
        <path d="M0 0v6h2v-6h-2zm4 0v6h2v-6h-2z" transform="translate(1 1)" />
      </svg>
    )
  }
}
export { IconPause }
