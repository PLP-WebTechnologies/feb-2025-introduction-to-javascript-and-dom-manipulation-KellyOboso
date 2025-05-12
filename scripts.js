// Function to change the text content of the paragraph
function changeText() {
    const textElement = document.getElementById("text");
    textElement.textContent = "The text has been changed!";
    textElement.style.color = "blue"; // Change text color
}

// Function to add a new element
function addElement() {
    const dynamicElements = document.getElementById("dynamicElements");
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph added to the DOM.";
    dynamicElements.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    const dynamicElements = document.getElementById("dynamicElements");
    if (dynamicElements.lastChild) {
        dynamicElements.removeChild(dynamicElements.lastChild);
    }
}

// Event listeners for buttons
document.getElementById("changeTextButton").addEventListener("click", changeText);
document.getElementById("addElementButton").addEventListener("click", addElement);
document.getElementById("removeElementButton").addEventListener("click", removeElement);
