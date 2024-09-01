const inputField = document.querySelector("#inputField");
const addbtn = document.querySelector("#addbtn");
const Editbtn = document.querySelector("#Edidbtn");
const removebtn = document.querySelector("#deletbtn");
const textshow = document.querySelector("#showText");

addbtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputField.value == "") {
    alert("Input field is empty");
    return;
  }

  

  const option = new Option(inputField.value, inputField.value);
  

  textshow.add(option, undefined);

  inputField.value = "";

});

removebtn.addEventListener("click", (event)=>{
  event.preventDefault();

  let selected = [];

  for (let i = 0; i< textshow.options.length; i++){
    selected[i] = textshow.options[i].selected;
  }

  let removdata = textshow.options.length;

  while (removdata--)
    if(selected[removdata]){
      textshow.remove(removdata)
    }
})

Editbtn.addEventListener( "click", (e)=> {
  e.preventDefault()

  inputField.value = "";

let  editdata = textshow.options.length;
  


})