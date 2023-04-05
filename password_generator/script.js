const outputElement = document.querySelector("#output");
const btnelement =  document.querySelector("#btn-copy");
const numbElement =  document.querySelector("#Numbers");
const captElement =  document.querySelector("#capital");
const smallElement =  document.querySelector("#small");
const symbElement =  document.querySelector("#symbols");
const pwdlengthElement =  document.querySelector("#length");
const frmElement= document.getElementById('#frm');

btnelement.addEventListener('click',async()=>{
  const pass= outputElement.value;
  if(pass){
      await navigator.clipboard.writeText(pass);
      alert("copied to clipboard");
  }else{
    alert("No password to be copied");
  }
});

function randomvalgenerator(min,max){
  const lim = max-min+1;
  return String.fromCharCode(Math.floor(Math.random()*lim)+min);
}

function capval(){
  return randomvalgenerator(65,90);
}

function smallval(){
  return randomvalgenerator(97,122);
}

function numval(){
  return randomvalgenerator(48,57);
}

function symbolval(){
  const symbol='~!@#$%^&*()_+}{|"><?'
  return symbol[Math.floor(Math.random()*symbol.length)];
}


const funcarray = [
  {
    element:numbElement,
    fun:numval
  },
  {
    element:symbElement,
    fun:symbolval
  },
  {
    element:smallElement,
    fun:smallval
  },
  {
    element:captElement,
    fun:capval
  }
];


frmElement.addEventListener('submit',(e)=>{
  e.preventDefault();
  let outputval="";
  const funArray=funcarray.filter(({element})=>element.checked);

  for(i=0;i<pwdlengthElement.value;i++){
    const idx=Math.floor(Math.random()*funArray.length);
    console.log(funArray[idx]);
    const val=funArray[idx].fun();
    outputval+=val;

  }

  outputElement.value=outputval;
});
