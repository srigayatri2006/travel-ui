const form = document.getElementById("bookingForm");

const successMessage =
document.getElementById("successMessage");

form.addEventListener("submit", function(e){

  e.preventDefault();

  successMessage.style.display = "block";

  form.reset();

  setTimeout(() => {

    successMessage.style.display = "none";

  }, 4000);

});

function bookPlace(place){

  document.getElementById("destination").value = place;

  document.getElementById("booking").scrollIntoView({
    behavior:"smooth"
  });

}