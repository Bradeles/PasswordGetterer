const keydownEvent = "keydown";

const passwordFieldType = "password";
const textFieldType = "text";

document.addEventListener(keydownEvent, function(event) {
    if (event.ctrlKey && event.altKey && event.key === 'p') {

        // Get all input elements on the page.
        const inputFields = document.querySelectorAll('input');
        
        if(inputFields != null) {
            inputFields.forEach(field => {
                if(field.type === passwordFieldType || field.type === textFieldType) {
    
                    //Toggle between types, depending on what is on the page currently.
                    field.type = (field.type === passwordFieldType) ? textFieldType : passwordFieldType;
                }
          });
        }
    }
});

//   document.addEventListener('keydown', function(event) {
//     if (event.ctrlKey && event.altKey && event.key === 'p') {
//       const passwordFields = document.querySelectorAll('input[type="password"], input[type="text"]');
      
//       passwordFields.forEach(field => {
//         field.type = (field.type === "password") ? "text" : "password";
//       });
//     }
//   });