function showPicture(box) {
  const pictureBox = box.querySelector(".picture-box");
  // Code to display the picture, e.g., change background image, etc.
  pictureBox.style.backgroundImage = "url('path/to/your/image.jpg')"; // Example image path
  pictureBox.style.backgroundSize = "cover";
  pictureBox.style.backgroundPosition = "center";
}

function searchContainer() {
  var input, filter, containerBoxes, containerNumbers, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  containerBoxes = document.querySelectorAll(".info-box");
  for (i = 0; i < containerBoxes.length; i++) {
    containerNumbers = containerBoxes[i].querySelector("h2");
    txtValue = containerNumbers.textContent || containerNumbers.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      containerBoxes[i].style.display = "";
    } else {
      containerBoxes[i].style.display = "none";
    }
  }
}
