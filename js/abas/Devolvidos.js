function openTabDevolvido(evt, tabNameDevolvido) {
  var d, tabcontentdevolvido, tablinksdevolvido;
  tabcontentdevolvido = document.getElementsByClassName("tabcontentdevolvido");
  for (d = 0; d < tabcontentdevolvido.length; d++) {
    tabcontentdevolvido[d].style.display = "none";
  }
  tablinksdevolvido = document.getElementsByClassName("tablinkDevolvido");
  for (d = 0; d < tablinksdevolvido.length; d++) {
    tablinksdevolvido[d].className = tablinksdevolvido[d].className.replace(" active", "");
  }
  document.getElementById(tabNameDevolvido).style.display = "block";
  evt.currentTarget.className += " active";
}