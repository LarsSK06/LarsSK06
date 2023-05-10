console.log("Attempting to load data...");
loadData();
async function loadData(){
    const response = await fetch("https://raw.githubusercontent.com/LarsSK06/LarsSK06/main/mydata.json");
    const data = await response.json();
    if(document.getElementById("socials") != null){
        const cache = document.getElementById("socials");
        for(let i = 0; i < data.socials.length; i++){
            cache.innerHTML += `<a href="${data.socials[i].href}">${data.socials[i].name}</a><br>\n`;
        }
    }
    if(document.getElementById("contact") != null){
        const cache = document.getElementById("contact");
        for(let i = 0; i < data.contact.length; i++){
            cache.innerHTML += `${data.contact[i]}\n`;
        }
    }
    if(document.getElementById("credentials") != null){
        const cache = document.getElementById("credentials");
        for(let i = 0; i < data.credentials.length; i++){
            cache.innerHTML += `${data.credentials[i]}\n`;
        }
    }
    console.log("Loaded data!");
}
