function changeTextContent(elementId, newText) {
    let element= document.getElementById(elementId)
    element.textContent=newText
   }
   
   // Test the function with different element IDs and new text content
//    changeTextContent('heading', 'Welcome to my website!');
//    changeTextContent('paragraph', 'This is a sample paragraph.');

   const changeTextBtn=document.getElementById("changeButton")
   
   changeTextBtn.addEventListener("click", function(){
    changeTextContent('heading', 'Welcome to my website!');
   });
   