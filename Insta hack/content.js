//Progress Bar
var loading = (function() {
  var h = ["|", "/", "-", "\\"];
  var i = 0;

  return setInterval(() => {
    i = i > 3 ? 0 : i;
    console.clear();
    console.log(
      "%c **********************************************************************",
      "color: red; font-weight: bold"
    );
    console.log(
      "%c *   COPYING, ALTERING OR DISTRIBUTING THIS SOFTWARE IS PROHIBITED    *",
      "color: red; font-weight: bold"
    );
    console.log(
      "%c *   USE OF THIS SOFTWARE MAY BE UNLAWFUL, USE IT ON YOUR OWN RISK    *",
      "color: red; font-weight: bold"
    );
    console.log(
      "%c **********************************************************************",
      "color: red; font-weight: bold"
    );
    console.log(
      "%c Loading users ... " + h[i],
      "color: #7122fa; font-weight: bold"
    );
    i++;
  }, 800);
})();

let followLinks;
let allBtns;

//Clear progress bar
setTimeout(function() {
  clearInterval(loading);

  followLinks = document.querySelectorAll(".sqdOP");

  allBtns = followLinks.length;
  console.clear();
  console.log(
    "%c ******************************************************************************",
    "color: red; font-weight: bold"
  );
  console.log(
    "%c *       COPYING, ALTERING OR DISTRIBUTING THIS SOFTWARE IS PROHIBITED        *",
    "color: red; font-weight: bold"
  );
  console.log(
    "%c *       USE OF THIS SOFTWARE MAY BE UNLAWFUL, USE IT ON YOUR OWN RISK        *",
    "color: red; font-weight: bold"
  );
  console.log(
    "%c ******************************************************************************",
    "color: red; font-weight: bold"
  );
  console.log(
    " %c Max Potential Follows : " + allBtns,
    "color: #7122fa; font-weight: bold"
  );

  console.log(
    "%c PROCESS RUNNING - DO NOT CLOSE THIS BROWSER",
    "color: #7122fa; font-weight: bold"
  );
  execute();
}, 10000);

//Creating time stamp
new Date().toLocaleString();
let counter = 0;

function execute() {
  var min = 180,
    max = 360;
  var rand = Math.floor(Math.random() * (max - min + 1) + min);

  let d = new Date();
  let currentHour = d.getHours();
  let workingHours = [6, 7, 8, 9, 10, 15, 19, 20, 21, 22, 23];

  if (workingHours.includes(currentHour)) {
    if (counter <= allBtns) {
      followLinks[counter - 1].click();
      followLinks[counter - 1].style.cssText =
        "background: white; color: white; border: white; padding: 5px";

      console.log(
        "%c" +
          new Date().toLocaleString() +
          " : " +
          counter +
          "/" +
          allBtns +
          "   --   " +
          rand,
        "color: green; font-weight: bold"
      ); //Output this in front end
      counter += 1;
    } else {
      console.log(
        "%c EXECUTION COMPLETE, YOU MAY NOW CLOSE THIS BROWSER",
        "color: #7122fa; font-weight: bold"
      );
      return;
    }
  } else {
    console.log(
      "%c IT IS NAP TIME. WILL WAKE UP AND CONTINUE WITH MY TASK LATER",
      "color: gray; font-weight: bold"
    );
  }
  setTimeout(execute, rand * 1000);
}
