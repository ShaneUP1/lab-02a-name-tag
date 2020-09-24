const tagName = document.getElementById("name-tag-name");
const nameEntry = document.getElementById("name-entry");
const myButton = document.getElementById('my-button');

myButton.addEventListener('click', () => {
    tagName.textContent = nameEntry.value;
})

