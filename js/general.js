function changeContent(newContent) {
    document.getElementById('changethis').innertext = newContent;
}


function hideContent() {
    document.getElementById('content').style.visibility = 'hidden';
}


function hideContent() {
    document.getElementById('content').style.visibility = 'hidden';
}


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.date-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            selectDate(button); // Call selectDate to handle button selection
        });
    });
});

function selectDate(element) {
    // Remove 'selected' class from all buttons
    var buttons = document.querySelectorAll('.date-button');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    element.classList.add('selected');
}