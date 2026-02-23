const figlet = require("figlet");

figlet("RAJYALAKSHMI!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
//output and commands are in terminal 
//verify from the terminal and pasted to notebook
//note:if we delete the node modules tehn if we run this code in the terminal then it will gives us an error because of the missing figlet module .