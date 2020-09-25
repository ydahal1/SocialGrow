//Progress Bar
var loading = (function() {
  var h = ["|", "/", "-", "\\"];
  var i = 0;

  return setInterval(() => {
    i = i > 3 ? 0 : i;
    console.clear();
    console.log(
      "%c Loading users ... " + h[i],
      "color: #7122fa; font-weight: bold"
    );
    i++;
  }, 800);
})();

//Clear progress bar
setTimeout(function() {
  clearInterval(loading);
  console.clear();
  console.log(
    "%c PROCESS RUNNING - DO NOT CLOSE THIS BROWSER",
    "color: #7122fa; font-weight: bold"
  );
}, 10000);

setTimeout(function() {
  let followLinks = document.querySelectorAll(".sqdOP");

  let allBtns = followLinks.length;
  console.log(
    " %c Max Potential Follows : " + allBtns,
    "color: red; font-weight: bold"
  );

  //Careating time stamp
  new Date().toLocaleString();
  let counter = 1;

  //Looping through and clicking buttons
  var FollowInterval = setInterval(function() {
    let d = new Date();
    let currentHour = d.getHours();
    let executeOperation = currentHour % 2;

    if (executeOperation != 1) {
      if (counter <= allBtns) {
        followLinks[counter - 1].click();
        followLinks[counter - 1].style.cssText =
          "background: white; color: white; border: white; padding: 5px";

        console.log(
          "%c" + new Date().toLocaleString() + " : " + counter + "/" + allBtns,
          "color: green; font-weight: bold"
        ); //Output this in front end
        counter += 1;
      } else {
        console.log(
          "%c EXECUTION COMPLETED",
          "color: #7122fa; font-weight: bold"
        );
        clearInterval(FollowInterval);
      }
    } else {
      console.log(
        "%c EXECUTION HALTED, WAITING FOR EVEN HOURS",
        "color: #7122fa; font-weight: bold"
      );
    }
  }, 240000);
  // }, 5000);
}, 10000);
