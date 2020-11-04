document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();

url ='https://api.airtable.com/v0/appwQTdlbIzLufDaj/Receipt%20Log';

var name = document.getElementById("addName").value;
var description = document.getElementById("addDescription").value;

const addData = {
    "fields":{
        "Name": name,
        "Description": description
    }
}

fetch (url, {method: 'POST' , body: JSON.stringify(addData), 
headers: {'Authorization': 'Bearer keyGnaBQg5v00GqZ4', 'Content-Type': 'application/json'}})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log (err));

location.replace("/");

});