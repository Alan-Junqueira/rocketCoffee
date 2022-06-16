function menuExpanded() {
  const mobile = document.querySelector('.mobile')
  const menuExpanded = document.querySelector('.menuExpanded')

  const openMenu = document.querySelector('.openMenu')
  const closeMenu = document.querySelector('.closeMenu')

  function clickOpenMenu() {
    mobile.classList.add('mobileClosed')
    menuExpanded.classList.add('expandedOpenned')
  }
  function clickCloseMenu() {
    mobile.classList.remove('mobileClosed')
    menuExpanded.classList.remove('expandedOpenned')
  }

  function openExpandedMenu() {
    openMenu.addEventListener('click', clickOpenMenu)
    closeMenu.addEventListener('click', clickCloseMenu)
  }
  openExpandedMenu()
}
menuExpanded()
