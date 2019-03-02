window.addEventListener("load", function() {
    const splash = document.querySelector("#splashHeader");
    // 1.5 seconds after window loads hide the splashHeader
    setTimeout(function(){
        splash.classList.add("Swiped");
    }, 1500);
});


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