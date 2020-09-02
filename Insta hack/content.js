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
}, 180000);

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

  //Refering table
  var dataTable = document.getElementById("dataDisplayTable");

  //Looping through and clicking buttons
  var FollowInterval = setInterval(function() {
    if (counter <= allBtns) {
      followLinks[counter - 1].click();
      followLinks[counter - 1].style.cssText =
        "background: red; color: white; border: white; padding: 5px";

      console.log(
        "%c" + new Date().toLocaleString() + " : " + counter + "/" + allBtns,
        "color: green; font-weight: bold"
      ); //Output this in front end
      counter += 1;
    } else {
      console.log(
        "%c EXECUTION SUCESSFUL",
        "color: #7122fa; font-weight: bold"
      );
      clearInterval(FollowInterval);
    }
  }, 240000);
}, 180000);
