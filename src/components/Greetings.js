import React from "react";

function Greetings(props){
 let word = "";
 switch(props.lang){
    case "de":
  (word = "Hallo ") ;
         break;
    case "fr":
      ( word = "Bonjour");
             break;
     default:
          return "Olá"
// let word;
// if(props.lang === "fr"){
// return word = "Bonjour"
// }else if(props.lang === "de"){
//     return word = "Hallo"
}
          return(
            <div>
            <section>
        <p>{word} {props.children}</p>
                </section>
            </div>
        )

 }





export default Greetings;