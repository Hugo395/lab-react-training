import React from "react";

function IdCard(props){
    return(
        <div>
        <section>
        <div><img alt= '' src ={props.picture} width= "370" height="300"/></div>
            <p> Last Name:{props.lastName}</p>
            <p> First Name: {props.firstName}</p>
            <p> Gender: {props.gender}</p>
            <p> Height: {props.height}</p>
            <p> Birth:{props.birth}</p>
            
            </section>
        </div>
//         <IdCard
//   lastName='Doe'
//   firstName='John'
//   gender='male'
//   height={178}
//   birth={new Date("1992-07-14")}
//   picture="https://randomuser.me/api/portraits/men/44.jpg"
// />,
// <IdCard
//   lastName='Delores '
//   firstName='Obrien'
//   gender='female'
//   height={172}
//   birth={new Date("1988-05-11")}
//   picture="https://randomuser.me/api/portraits/women/44.jpg"
// />
    )
}





export default IdCard;