//  File to add the information on the input
document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyBtn"); // Copy button
  // Input information
  const password = document.getElementById("pwdInput"); // Password
  // Error message
  const error = document.getElementById("error1");

  //  Copy the password
  copyBtn.addEventListener("click", () => {
    // Select the text field
    password.select();
    password.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(password.value);

    // Error
    if (password.value == "") {
      error.style.display = "inline";
    } else {
      error.style.display = "none";

      // Change button text
      copyBtn.innerHTML = "Copied!";
      // Return button text to "Copy"
      setTimeout(() => {
        copyBtn.innerHTML = "Copy";
      }, 2000);
    }
  });
});
