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
    aboutContent: "My name is Keegan Thompson and I love web development. What interest me most about tech, is knowing that there is always something new to learn. There is never a day that I do not touch Google or Stackoverflow. This fits my personality perfectly. Although I enjoy working with full-stack technologies, I prefer front-end more. My favorite language to work with is Javascript, especially since => ES6. My favorite library is React. On the back-end, I prefer Node.js. PHP, Java, Go, Ruby/Rails, & Elm are technologies I am stoked about working with in the future. Outside of development, I love spending time with wife and puppies, working out, pretending like I have a sense of fashion, and planning my eventual journey around the world."
  },
  contact: {
    contactHeader: "Contact Me",
    contactContent: "Want to work an OS project, talk shop, or send me pictures of your dogs?<br><br> <i class='fa fa-envelope-o' aria-hidden='true'></i> keegant1992@gmail.com <br><i class='fa fa-mobile' aria-hidden='true'></i> (334)-618-9523"
  },
  projects: {
    projectHeader: "My Projects",
    projectContent: [{
        title: "Title One",
        img: "http://cdn1-www.dogtime.com/assets/uploads/2011/04/file_2153_column_popular-dog-names.jpg"
      },
      {
        title: "Title Two",
        img: "http://cdn1-www.dogtime.com/assets/uploads/2011/04/file_2153_column_popular-dog-names.jpg"
      },
      {
        title: "Totle Three",
        img: "http://cdn1-www.dogtime.com/assets/uploads/2011/04/file_2153_column_popular-dog-names.jpg"
      },
      {
        title: "title Four",
        img: "http://cdn1-www.dogtime.com/assets/uploads/2011/04/file_2153_column_popular-dog-names.jpg"
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
    counter = 0;
    console.log(counter);
    main.innerHTML = "";
    newParagraph.innerHTML = "";
    main.appendChild(newDiv);
    newDiv.classList.add("projectContent");
    newDiv.classList.remove("myContent");
    newDiv.appendChild(newHeader);
    newHeader.classList.add("contentHeader");
    newHeader.innerHTML = "My Projects";
    newDiv.appendChild(newParagraph);
    newParagraph.classList.add("projects");
    let projects = content.projects.projectContent.map(e => {
      createImage(e.img);
    });
  } else if (e.keyCode == 27) {
    main.innerHTML = orignalPage;
    newDiv.classList.remove("projectContent");
    newParagraph.classList.remove("projects");
  } else if (e.keyCode == 66) {
    window.location.href = "./blog.html";
    newDiv.classList.remove("projectContent");
    newParagraph.classList.remove("projects");
  } else {
    // alert("Try hitting the spacebar ;)");
  }
});