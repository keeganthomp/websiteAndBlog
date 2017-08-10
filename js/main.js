console.log(
  "////See below for directions//// \n \n spacebar: more info \n esc: home page"
);
const main = document.querySelector("#mainContent");
const body = document.body;
const orignalPage = main.innerHTML;
const newDiv = document.createElement("div");
const newHeader = document.createElement("h1");
const newParagraph = document.createElement("p");
const newLink = document.createElement("a");
const nav = document.createElement("nav");
const navBar =
  "";
let homeLink = document.querySelector(".homeLink");
let contactLink = document.querySelector(".contactLink");
let aboutLink = document.querySelector(".aboutLink");
let portLink = document.querySelector(".portLink");

aboutLink.addEventListener("click", () => {
  // newDiv.classList.remove("projectContent");
  // newParagraph.classList.remove("projects");
  changeMainContent(content.about.aboutHeader, content.about.aboutContent);
});

contactLink.addEventListener("click", () => {
  // newDiv.classList.remove("projectContent");
  // newParagraph.classList.remove("projects");
  console.log(contactLink);
  changeMainContent(
    content.contact.contactHeader,
    content.contact.contactContent
  );
});

var counter = 0;

const content = {
  about: {
    aboutHeader: "About Me",
    aboutContent:
      "My name is Keegan Thompson and I love web development. What interest me most about tech, is knowing that there is always something new to learn. There is never a day that I do not touch Google or Stackoverflow. This fits my personality perfectly. Although I enjoy working with full-stack technologies, I prefer front-end more. My favorite language to work with is Javascript, especially since => ES6. My favorite library is React. On the back-end, I prefer Node.js. PHP, Java, Go, Ruby/Rails, & Elm are technologies I am stoked about working with in the future. Outside of development, I love spending time with wife and puppies, working out, pretending like I have a sense of fashion, and planning my eventual journey around the world."
  },
  contact: {
    contactHeader: "Contact Me",
    contactContent:
      "Want to work an OS project, talk shop, or send me pictures of your dogs?<br><br> <i class='fa fa-envelope-o' aria-hidden='true'></i> keegant1992@gmail.com <br><i class='fa fa-mobile' aria-hidden='true'></i> (334)-618-9523"
  },
  skills: {
    skillsHeader: "Skills",
    skillsContent:
      "HTML<br><br>CSS<br><br>Javascript<br><br>ES6<br><br>Node.JS<br><br>React<br><br>Redux<br><br>Mongo/Mongoose<br><br>SQL/Sequelize<br><br>Photoshop<br><br>Wordpress<br><br>VS Code"
  }
};

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
  // aboutLink.addEventListener("click", () => {
  //   changeMainContent(content.about.aboutHeader, content.about.aboutContent);
  // });
  // contactLink.addEventListener("click", () => {
  //   console.log(contactLink);
  //   changeMainContent(
  //     content.contact.contactHeader,
  //     content.contact.contactContent
  //   );
  // });
  // portLink.addEventListener("click", () => {
  //   console.log("clicked Port")
  //   window.location.href = "./portfolio.html";
  // });
  // console.log(homeLink);
}

function createImage(i) {
  let newImage = document.createElement("img");
  newImage.classList.add("projectImg");
  newParagraph.appendChild(newImage);
  newImage.src = i;
}

document.body.addEventListener("keyup", e => {
  if (e.keyCode == 32 && counter == 0) {
    newDiv.classList.remove("projectContent");
    newParagraph.classList.remove("projects");
    changeMainContent(content.about.aboutHeader, content.about.aboutContent);
    counter += 1;
  } else if (e.keyCode == 32 && counter == 1) {
    newDiv.classList.remove("projectContent");
    newParagraph.classList.remove("projects");

    changeMainContent(
      content.contact.contactHeader,
      content.contact.contactContent
    );
    counter += 1;
  } else if (e.keyCode == 32 && counter == 2) {
    newDiv.classList.remove("projectContent");
    newParagraph.classList.remove("projects");

    changeMainContent(
      content.skills.skillsHeader,
      content.skills.skillsContent
    );
    counter = 0;
    console.log(counter);
  } else if (e.keyCode == 27) {
    main.innerHTML = orignalPage;
    newDiv.classList.remove("projectContent");
    newParagraph.classList.remove("projects");
  } else if (e.keyCode == 66) {
    window.location.href = "./blog.html";
    newDiv.classList.remove("projectContent");
    newParagraph.classList.remove("projects");
  } else if (e.keyCode == 80) {
    window.location.href = "./portfolio.html";
    newDiv.classList.remove("projectContent");
    newParagraph.classList.remove("projects");
  } else {
    // alert("Try hitting the spacebar ;)");
  }
});
