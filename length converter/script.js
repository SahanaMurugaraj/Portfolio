function convert(){
    const cmvalue =  Number(document.getElementById("input").value)
    const inchvalue = cmvalue/2.54
    const result= document.getElementById("result")
     result.innerHTML = inchvalue.toFixed(2) + "inches"
    //  tofixed is the value to display the decimal numbers after the original value, for ex:4.68 . 
}
// This number tag is used to change the string number ('10') as (10)