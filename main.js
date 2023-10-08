const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__container h1", scrollRevealOption);
  
  ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  // about container
  ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
  ScrollReveal().reveal(".about__container .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".about__container .about__flex", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".about__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  // discover container
  ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".discover__card__content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
  });
  
  // blogs container
  ScrollReveal().reveal(".blogs__card", {
    duration: 1000,
    interval: 400,
  });
  
  // journals container
  ScrollReveal().reveal(".journals__card", {
    ...scrollRevealOption,
    interval: 400,
  });

 // script.js
const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});


const copyButton = document.getElementById("contact_card");
copyButton.addEventListener("click", function() {
    const phoneNumber = "+905331274743"; // Kopyalanacak numara
    const tempInput = document.createElement("input");
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Numara başarıyla kopyalandı: " + phoneNumber);
});
// Resmin üstündeki düğmeye tıklanınca mesajı gösteren işlev

