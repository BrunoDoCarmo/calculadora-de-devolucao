function openSubTab(evt, subTabName) {
  var i, subtabcontent, subtablinks;
  subtabcontent = document.getElementsByClassName("subtabcontent");
  for (i = 0; i < subtabcontent.length; i++) {
    subtabcontent[i].style.display = "none";
  }
  subtablinks = document.getElementsByClassName("tablinksComprado");
  for (i = 0; i < subtablinks.length; i++) {
    subtablinks[i].className = subtablinks[i].className.replace(" active", "");
  }
  document.getElementById(subTabName).style.display = "block";
  evt.currentTarget.className += " active";
}