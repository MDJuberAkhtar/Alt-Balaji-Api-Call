const api_url = 'https://api.cloud.altbalaji.com/sections/31?domain=IN&limit=50';

let json = async()=>{
    //first api call 
     const  response = await fetch(api_url);
     const newData = await response.json();
     const newValue = newData.lists;
     const newVisibleValue = newValue.filter(x=> x.visible === 'true');
     const newId = newVisibleValue.map(x=>  x.external_id);
     const newTitle = newValue.map(x=> x.titles);
     //second api call

    for(let j=0; j<newId.length; j++){
        const newResponse = await fetch(`https://api.cloud.altbalaji.com/${newId[j]}`);
        const shows = await newResponse.json();
        newShow = await shows.content.map(({title, images}) => ({title, images}));
        //creating elements

        const rootDiv = document.createElement('div');
        const title = document.createElement('div');
        title.classList.add('main');
        const textTitle = document.createTextNode(Object.values(newTitle[j]));
        title.appendChild(textTitle);
        rootDiv.appendChild(title);
        document.body.appendChild(rootDiv);

        let displayContent = document.createElement('div');
        displayContent.classList.add('display')
                for(let i =0; i<newShow.length; i++){
                  const outerdiv = document.createElement('div');
                  const img = document.createElement('img');
                  const imgDiv = document.createElement('div');
                  img.src = newShow[i].images[0].url;
                  img.classList.add('img-cover');
                  imgDiv.appendChild(img);
                  outerdiv.appendChild(imgDiv);
                  const textDiv = document.createElement('div');
                  textDiv.classList.add('text-display');
                  const textDisplay = document.createTextNode(newShow[i].title);
                  textDiv.appendChild(textDisplay)
                  outerdiv.appendChild(textDiv);
                  displayContent.appendChild(outerdiv);
                 
            } 
            rootDiv.appendChild(displayContent);
            const hrTag = document.createElement('HR');
            rootDiv.appendChild(hrTag);

        }
	  
}

json();






    



      













