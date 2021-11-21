
let burger = $('.navbar-toggler');
navbar = $('.navbar');
logo = $('.logo');


var toggleNavbar = ()=> {
  $("#close_navbar").toggleClass("hide");
  $(this).toggleClass('active');
  $(navbar).toggleClass('navbar-active');
  $(logo).toggleClass('active');
};


$(burger).click(toggleNavbar);
$("#close_navbar").click(toggleNavbar);
$("[route-me]").click(toggleNavbar);


var LanguageDropDown = new DropDown({
  data: {
      route: "Header",
      act: "readLanguages",
  },
  output: "title",
  area: "#languageDropdown",
  trigger: "#languageDropdown",
  class: ["container"],
  options: {
      chosen: { title: "Eng" },
      attributes: [ "title" , "lang-id"],
      class: ["optionies", "languages"],
      event: {
        ev: "click",
        callback: (e)=> {
          document.querySelector("#languageDropdown > p").innerHTML = e.target.getAttribute("title");
          var chosenLang = e.target.getAttribute("lang-id");
          localStorage.setItem("lang", chosenLang);
          $("[route-me='Home']").trigger("click");
        }
      }
  } 
});