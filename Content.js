const keydownEvent = "keydown";

const passwordFieldType = "password";
const textFieldType = "text";

document.addEventListener(keydownEvent, function(event) {

    // Hotkeys to toggle between input types.
    if (event.ctrlKey && event.altKey && event.key === 'p') {

        // Get all input elements on the page.
        const inputFields = document.querySelectorAll('input');
        
        if(inputFields != null) {
            inputFields.forEach(field => {
                
                // Set input type from password to text.
                if (field.type === passwordFieldType) {
                    // Store the original type as metadata so we can distinguish between elements this application modifed and native text inputs.
                    field.dataset.originalType = field.type;
                    field.type = textFieldType;
                }
                
                // Set input type from text to password.
                else if (field.dataset.originalType === passwordFieldType && field.type === textFieldType) {
                    // Restore the original type
                    field.type = field.dataset.originalType;
                }
            });
        } 
    }
});