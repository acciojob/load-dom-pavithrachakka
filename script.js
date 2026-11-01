//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  document.write("DOM load success");
  // move the text outside body so body becomes empty again
  if(document.body.firstChild){
    document.documentElement.appendChild(document.body.firstChild);
  }
});