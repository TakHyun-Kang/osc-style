const _colorTab = document.getElementById('colorTab')
const colorPath = 'colorpage'
const _fontTab = document.getElementById('fontTab')
const fontPath = '/osc-style/fontpage.html'

const _handleClick = () => {
  if (window.location.pathname.indexOf(colorPath) > -1) {
    _colorTab.className += 'active'
  } else if (window.location.pathname === fontPath) {
    _fontTab.className += 'active'
  }
}

window.onload = _handleClick
