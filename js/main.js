console.log(
  "////See below for directions//// \n \n spacebar: more info \n esc: home page"
);
const main = document.querySelector("#mainContent");
const body = document.body;
const orignalPage = main.innerHTML;
const newDiv = document.createElement("div");
const newHeader = document.createElement("h1");
const newParagraph = document.createElement("p");

var counter = 0;

const content = {
  about: {
    aboutHeader: "About Me",
    aboutContent:
      "MY name is Keegan Thompson and I love Software Engineering. I thoroughly enjoy working with Javascript. I enjoy working with the both the front end and back-end, however, I do prefer working with front-end technologies more."
  },
  contact: {
    contactHeader: "Contact Me",
    contactContent: "Email: keegant1992@gmail.com <br> Cell: (334)-618-9523"
  },
  projects: {
    projectHeader: "My Projects",
    projectContent: [
      {
        title: "Title One",
        img:
          "http://cdn1-www.dogtime.com/assets/uploads/2011/04/file_2153_column_popular-dog-names.jpg"
      },
      {
        title: "Title Two",
        img:
          "http://cdn1-www.dogtime.com/assets/uploads/2011/04/file_2153_column_popular-dog-names.jpg"
      },
      {
        title: "Totle Three",
        img:
          "http://cdn1-www.dogtime.com/assets/uploads/2011/04/file_2153_column_popular-dog-names.jpg"
      },
      {
        title: "title Four",
        img:
          "http://cdn1-www.dogtime.com/assets/uploads/2011/04/file_2153_column_popular-dog-names.jpg"
      }
    ]
  }
};

function changeMainContent(h, p) {
  main.innerHTML = "";
  main.appendChild(newDiv);
  newDiv.classList.add("myContent");
  newDiv.appendChild(newHeader);
  newHeader.classList.add("contentHeader");
  newHeader.innerHTML = h;
  newDiv.appendChild(newParagraph);
  newParagraph.classList.add("content");
  newParagraph.innerHTML = p;
}

function createImage(i) {
  let newImage = document.createElement("img");
  newDiv.appendChild(newImage);
  newImage.src = i;
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
    main.innerHTML = "";
    newParagraph.innerHTML = "";
    main.appendChild(newDiv);
    newDiv.classList.add("myContent");
    newDiv.appendChild(newHeader);
    newHeader.classList.add("contentHeader");
    newHeader.innerHTML = "My Projects";
    let projects = content.projects.projectContent.map(e => {
      return createImage(e.img);
    });
  } else if (e.keyCode == 27) {
    main.innerHTML = orignalPage;
  } else if (e.keyCode == 66) {
    window.location.href = "./blog.html";
  } else {
    // alert("Try hitting the spacebar ;)");
  }
});
