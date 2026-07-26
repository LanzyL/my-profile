let firstName = "Lance";
let lastName = "Llaban";
const imgSrc = "https://avatars.githubusercontent.com/LanzyL";


document.getElementById("content").innerHTML = `
<h1>My Profile</h1>
<p> My name is ${firstName} ${lastName}</p>
<img src="${imgSrc}" alt="profile picture goes here"/>
`;

