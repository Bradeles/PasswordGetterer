const keydownEvent = "keydown";

const htmlElementToRetrieve = "input";
const passwordFieldType = "password";
const textFieldType = "text";

// Hotkey combination to toggle between password and text.
function isHotkeyPressed(event) {
    return event.ctrlKey && event.altKey && event.key === 'p';
}

// Switch input type from password to text. Store the original type as metadata 
// so we can distinguish between elements this application has modifed and native text inputs.
function toggleToText(field) {
    field.dataset.originalType = passwordFieldType;
    field.type = textFieldType;
}

// Restore temporary text input fields to back to password.
function restoreToPassword(field) {
    if (field.dataset.originalType === passwordFieldType) {
        field.type = passwordFieldType;
        delete field.dataset.originalType; // Clean up metadata
    }
}

// Main function: Toggle all input fields.
function toggleInputFields() {
    const inputFields = document.querySelectorAll(htmlElementToRetrieve);

    if (!inputFields) {
        return;
    }

    inputFields.forEach(field => {
        if (field.type === passwordFieldType) {
            toggleToText(field);
        } else if (field.type === textFieldType && field.dataset.originalType === passwordFieldType) {
            restoreToPassword(field);
        }
    });
}

document.addEventListener(keydownEvent, function(event) {
    if (isHotkeyPressed(event)) {
        toggleInputFields();
    }
});