//tab-ui
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-nav")
const panes = $$(".tab-content-pane")

tabs.forEach((tab, index) => {
  const pane = panes[index]

  tab.onclick = function () {
    $(".tab-nav.active").classList.remove("active")
    $(".tab-content-pane.active").classList.remove("active")

    this.classList.add("active")
    pane.classList.add("active")
    pane.style.transition = "all 0.5s ease"
  };
});

//end tab-ui

