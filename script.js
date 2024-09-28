$(document).ready(function() {
    const text = "Experienced and qualified fullstack developer available to bring your project to reality.";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            $('#typewriter-text').append(text.charAt(index));
            index++;
            setTimeout(typeWriter, 50); // Adjust typing speed here
        }
    }

    typeWriter();
});
