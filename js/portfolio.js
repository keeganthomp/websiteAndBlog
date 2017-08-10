document.body.addEventListener("keyup", e => {
  if (e.keyCode == 27) {
    window.location.href = "./index.html";
  } else {
    alert("press 'esc' to return home");
  }
});

function changeMainContent(h, p) {
  main.innerHTML = "";
  main.appendChild(newDiv);
  newDiv.appendChild(nav);
  nav.innerHTML = navBar;
  newDiv.classList.add("myContent");
  newDiv.appendChild(newHeader);
  newHeader.classList.add("contentHeader");
  newHeader.innerHTML = h;
  newDiv.appendChild(newParagraph);
  newParagraph.classList.add("content");
  newParagraph.innerHTML = p;
  homeLink = document.querySelector("#homeLink");
  contactLink = document.querySelector("#contactLink");
  aboutLink = document.querySelector("#aboutLink");
  portLink = document.querySelector(".portLink");
  aboutLink.addEventListener("click", () => {
    changeMainContent(content.about.aboutHeader, content.about.aboutContent);
  });
  contactLink.addEventListener("click", () => {
    console.log(contactLink);
    changeMainContent(
      content.contact.contactHeader,
      content.contact.contactContent
    );
  });
}
