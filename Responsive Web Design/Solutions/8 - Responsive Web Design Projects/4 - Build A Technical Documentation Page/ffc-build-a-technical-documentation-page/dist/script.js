const isInViewport = el => {
  el = el[0];
  const scroll = window.scrollY || window.pageYOffset;
  const boundsTop = el.getBoundingClientRect().top + scroll;

  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight };


  const bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight };


  return bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ||
  bounds.top <= viewport.bottom && bounds.top >= viewport.top;
};

const active = i => {
  $('#navbar .wrap2 a').each((i, el) => {
    el.style.color = 'white';
    el.style.backgroundColor = '#f44336';
  });
  $(` #navbar .wrap2 a:nth-of-type(${i}) `).css({ 'background': 'white', 'color': 'black' });
};

/*elementInViewport function code source: https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport*/
$(document).ready(function () {
  $(window).scroll(() => {
    if (isInViewport($(' #Overview '))) {
      active(1);
    } else if (isInViewport($(' #Parsing_a_Stylesheet '))) {
      active(2);
    } else if (isInViewport($(' #Structure_of_a_Stylesheet '))) {
      active(3);
    } else if (isInViewport($(' #Comments '))) {
      active(4);
    } else if (isInViewport($(' #Special_Functions '))) {
      active(5);
    }
  });
  $("pre").html(function (index, html) {
    return html.replace(/^(.*)$/mg, "<span class=\"line\">$1</span>");
  });
});