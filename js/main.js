console.log(
  "////See below for directions//// \n \n spacebar: more info \n esc: home page"
);

const main = document.querySelector("#mainContent");
const orignalPage = main.innerHTML;

const newDiv = document.createElement("div");
const newHeader = document.createElement("h1");
const newParagraph = document.createElement("p");

var counter = 0;

const content = {
  about: {
    aboutHeader: "About Me",
    aboutContent:
      "I am a craftsman of code <br> I love all things Javascript <br> I am a dog lover <br> I am a fitness enthusiast."
  },

  contact: {
    contactHeader: "Contact Me",
    contactContent:
      "Feel free to email me at keegant1992@gmail.com or text me at (334)-618-9523"
  },
  projects: {
    projectHeader: "My Projects",
    projectContent: [
      {
        title: "Title One",
        imge: "somelink1.com"
      },
      {
        title: "Title Two",
        img: " Two some Link.com"
      },
      {
        title: "Totle Three",
        img: " three some Link.com"
      },
      {
        title: "title Four",
        img: " Four some Link.com"
      }
    ]
  }
};

function changeMainContent(h, p) {
  main.innerHTML = "";
  main.appendChild(newDiv);
  newDiv.classList.add("myContent");
  newDiv.appendChild(newHeader);
  newHeader.innerHTML = h;
  newDiv.appendChild(newParagraph);
  newParagraph.innerHTML = p;
}

document.body.addEventListener("keyup", e => {
  if (e.keyCode == 32 && counter == 0) {
    changeMainContent(content.about.aboutHeader, content.about.aboutContent);
    counter += 1;
  } else if (e.keyCode == 32 && counter == 1) {
    changeMainContent(
      content.contact.contactHeader,
      content.contact.contactContent
    );
    counter += 1;
  } else if (e.keyCode == 32 && counter == 2) {
    let projects = content.projects.projectContent.map(e => {
      return [e.title, e.img];
    });
    changeMainContent(content.projects.projectHeader, projects.join(" "));
    counter = 0;
  } else if (e.keyCode == 27) {
    main.innerHTML = orignalPage;
  } else {
    // alert("Try hitting the spacebar ;)");
  }
});
