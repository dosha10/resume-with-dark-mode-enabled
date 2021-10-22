/*showMenu*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  //validateVariables
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      //add
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*removeMenu*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //onClicked

  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*scrollSection*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.getOffsetHeight;
    const sectionTop = current.OffsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*showScrollTop */
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  //when the scroll is higher than 560 viewport height, add the show-scroll class
  if (this.scrollY >= 200) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*darkLightTheme*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";
//previouslySelectedTheme
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
//obtainCurrentTheme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark " : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(IconTheme) ? "bx-moon " : "bx-sun";
//validateChoice
if (selectedTheme) {
  //activate or deactivate dark mode
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}
//activate or deactivate manually
themeButton.addEventListener("click", () => {
  //add or remove dark theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //save the theme
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*reduce the size & print on an A4 sheet*/
function scaleCv() {
  document.body.classList.add("scale-cv");
}

/*remove the size when the CV is downloaded*/
function removeScaleCv() {
  document.body.classList.remove("scale-cv");
}

/*generate PDF*/
// PDF generated area
let areaCv = document.getElementById("area-cv");
let resumeButton = document.getElementById("resume-button");

// Html2pdf options
let opt = {
  margin: 0,
  filename: "myResume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 3 },
  jsPDF: { format: "a3", orientation: "portrait" },
};

// Function to call areaCv and Html2Pdf options
function generateResume() {
  html2pdf(areaCv, opt);
}

// When the button is clicked, it executes the three functions
resumeButton.addEventListener("click", () => {
  // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  scaleCv();

  // 2. The PDF is generated
  generateResume();

  // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
  setTimeout(removeScale, 5000);
});
