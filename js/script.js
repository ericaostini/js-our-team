"use strict";

/* creazione card info membri team
<div class="col-4">
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Name</h5>
            <p class="card-text">Role</p>
        </div>
    </div>
</div>
*/
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
for (let i = 0; i < ourTeam.length; i++){
    console.group("Informazioni membro team");
    console.log(ourTeam[i].name);
    console.log(ourTeam[i].role);
    console.log(ourTeam[i].picture);
    console.groupEnd()
    displayCard(ourTeam[i]);

}

/**
 * crea card per membro del team
 * @param {Array[i]} infoTeam 
 */
function displayCard(infoTeam){
    const rowCard = document.querySelector(".row");
    const colCard = `
    <div class="col">
        <div class="card text-center mb-4">
            <img src="${infoTeam.picture}" class="card-img-top" alt="member team">
            <div class="card-body">
                <h5 class="card-title">${infoTeam.name}</h5>
                <p class="card-text">${infoTeam.role}</p>
            </div>
        </div>
    </div>
    `
    rowCard.innerHTML += colCard;
}

//inserire nuovo membro al team
const btn = document.querySelector("button");
// console.log(btn);
btn.addEventListener("click", function(){
    let newName = document.getElementById("name").value;
    let newRole = document.getElementById("role").value;
    let newPicture = document.getElementById("picture").value;
})