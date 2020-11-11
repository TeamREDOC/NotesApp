const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
id = urlParams.get('');

url =`https://api.airtable.com/v0/appwQTdlbIzLufDaj/Receipt%20Log/${id}?api_key=keyGnaBQg5v00GqZ4`;

fetch(url)
    .then(response => response.json())
    .then(data => {

    document.getElementById('printName').value= data.fields.Name;
    document.getElementById('printName').style.background= data.fields.Color;
    document.getElementById('printDescription').value= data.fields.Description;
    document.getElementById('printDescription').style.backgroundColor= data.fields.Color;
    document.getElementById("addColor").value = data.fields.Color;
    document.getElementById('addColor').style.backgroundColor= data.fields.Color;
        
      })

document.querySelector("p").addEventListener("click", e => {
e.preventDefault();

var name = document.getElementById("printName").value;
if(name === "") name= "TITLE";
var description = document.getElementById("printDescription").value;
if(description === "") description= "*NOTHING WRITTEN*";
var color = document.getElementById("addColor").value;
if(color === "") color= "#EEEEEE";


url =`https://api.airtable.com/v0/appwQTdlbIzLufDaj/Receipt%20Log/${id}`;

const addData = {
    "fields":{
        "Name": name,
        "Description": description,
        "Color": color
    }
}

fetch (url, {method: 'PUT' , body: JSON.stringify(addData), 
headers: {'Authorization': 'Bearer keyGnaBQg5v00GqZ4', 'Content-Type': 'application/json'}})
.then(response => response.json())
.then(json => {console.log(json)
    window.location.href= "/";})
.catch(err => console.log (err));

});      



