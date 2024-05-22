function openSubTabDevolvido(evt, subTabNameDevolvido) {
  var i, subtabcontentdevolvido, subtablinksdevolvido;
  subtabcontentdevolvido = document.getElementsByClassName("subtabcontentdevolvido");
  for (i = 0; i < subtabcontentdevolvido.length; i++) {
    subtabcontentdevolvido[i].style.display = "none";
  }
  subtablinksdevolvido = document.getElementsByClassName("tablinksDevolvido");
  for (i = 0; i < subtablinksdevolvido.length; i++) {
    subtablinksdevolvido[i].className = subtablinksdevolvido[i].className.replace(" active", "");
  }
  document.getElementById(subTabNameDevolvido).style.display = "block";
  evt.currentTarget.className += " active";
}