document.querySelector("p").addEventListener("click", e => {
    e.preventDefault();

url ='https://api.airtable.com/v0/appwQTdlbIzLufDaj/Receipt%20Log';

var name = document.getElementById("addName").value;
if(name === "") name= "TITLE";
var description = document.getElementById("addDescription").value;
if(description === "") description= "*NOTHING WRITTEN*";
var color = document.getElementById("addColor").value;
if(color === "") color= "#EEEEEE";

const addData = {
    "fields":{
        "Name": name,
        "Description": description,
        "Color": color
    }
}

fetch (url, {method: 'POST' , body: JSON.stringify(addData),
headers: {'Authorization': 'Bearer keyGnaBQg5v00GqZ4', 'Content-Type': 'application/json'}})
.then(response => response.json())
.then(json => {console.log(json)
    window.location.href= "/";})
.catch(err => console.log (err));

});

