url =`https://api.airtable.com/v0/appwQTdlbIzLufDaj/Receipt%20Log?api_key=keyGnaBQg5v00GqZ4`;

fetch(url)
     .then(response => response.json())
     .then(data => {
        const {records} = data;
  
        for(var i=0; i < data.records.length ; i++){
        const li = document.createElement("p");
        li.classList.add("utgifter");
        color=data.records[i].fields.Color;

        title= data.records[i].fields.Name;
        if(title.length > 11) title = title.substring(0, 11) + "...";

        content= data.records[i].fields.Description;
        if(content.length > 22) content = content.substring(0, 22) + "...";
  
        const markup = `
        <a href="/update?=${data.records[i].id}" >
          <div id= "notesList" style="background-color:${color}">
              <p id="notesListTitle">${title} </p>
              <p id="notesListDate">${data.records[i].fields.Date}</p>
              </br>
              <p id=notesListContent>${content}</p>
          </div></a>
        `;
       
        li.innerHTML = markup;
        document.getElementById("utgifter").appendChild(li);
     }
      })

     
    