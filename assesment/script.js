function changeTextContent(elementId, newText) {
    const element=document.getElementById(elementId)
    element.textContent=newText
   }
   
   // Test the function with different element IDs and new text content
// //    changeTextContent('heading', 'Welcome to my website!');
//    changeTextContent('paragraph', 'This is a sample paragraph.');
   const btn=document.getElementById("changeButton")
   btn.addEventListener("click", function(){
    changeTextContent('heading', 'Welcome to my website!');
   })