window.addEventListener("load", function() {
    const splash = document.querySelector("#splashHeader");
    // 1.5 seconds after window loads hide the splashHeader
    setTimeout( function(){
        splash.classList.add("Swiped");
        setTimeout( function() {
            photoSlider();
        }, 2000) // long enough to be after swiped class added and height transition
    }, 1500);
});

function photoSlider() {
    const photoTimerSeconds = 2.5;
    const photoSlides = document.getElementById('photoSlider').children;
    let currentSlide = 0;
    setInterval( function() {
        photoSlides[currentSlide].classList.remove('Active');
        currentSlide = (currentSlide + 1) % photoSlides.length; // using modulus allows it to loop once reaching end e.g. 7/7=1 so remainder is 0 so it goes to 1st slide
        photoSlides[currentSlide].classList.add('Active');
    }, photoTimerSeconds * 1000)
}

function submitForm() {
    const name = document.getElementById('name').value;
    const topic = document.getElementById('topic').value;
    const contact = document.getElementById('contact').value;
    if (name.length === 0 && topic.length === 0 && contact.length === 0) {
        document.getElementById('alertModal').removeAttribute("hidden")
        return false;
    }

    const form = document.getElementById('mG61Hd');
    form.submit(); // since we made the button type button
    form.reset();
    hideAlert();
    return false; // don't cause page refresh
    
}

function hideAlert() {
    document.getElementById('alertModal').setAttribute("hidden", true);
}