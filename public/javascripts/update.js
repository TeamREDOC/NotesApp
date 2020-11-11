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
        
      })

document.querySelector("form").addEventListener("submit", e => {
e.preventDefault();

var name = document.getElementById("printName").value;
var description = document.getElementById("printDescription").value;
var color = document.getElementById("addColor").value;


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



