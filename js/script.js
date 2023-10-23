"use strict";

// creazione array
const ourTeam = [
    {
        name: "Wayne Barnett ",
        role: "Founder & CEO ",
        picture: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll ",
        role: "Chief Editor ",
        picture: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon ",
        role: "Office Manager ",
        picture: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez ",
        role: "Social Media Manager ",
        picture: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos ",
        role: "Graphic Designer",
        picture: "img/barbara-ramos-graphic-designer.jpg"
    }
]

// stampo in concole per ogni membro del team le sue info
for (let i = 0; ourTeam.length; i++){
    console.group("Informazioni membro team");
    console.log(ourTeam[i].name);
    console.log(ourTeam[i].role);
    console.log(ourTeam[i].picture);
    console.groupEnd()
}