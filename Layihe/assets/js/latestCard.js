function fetchData() {
    fetch(' http://localhost:3000/latestCard')
    .then((res)=>res.json())
    .then(data=>{
       const cardBox=document.querySelector('.latestCardBox');

       for (let i = 0; i < 4; i++) {
        const watch=data[i];

        const card = document.createElement('div');
        card.className='latestCard';

        const cardImg = document.createElement('div');
        cardImg.className='cardImg';
        const picture = document.createElement('img');
        picture.src=watch.img_url;
// appen 
        cardImg.appendChild(picture);
    
        const about =document.createElement('h4');
        about.className='cardAbout';
        about.innerText=watch.about;

        const time =document.createElement('p');
        time.className='time';
        time.innerText=watch.time;

        const cardText = document.createElement('p');
        cardText.className='cardText';
        cardText.innerText=watch.text;
        


        
        card.appendChild(cardImg);
        card.appendChild(about);
        card.appendChild(time);
        card.appendChild(cardText);
    
        cardBox.appendChild(card);

       
       };
    });
    
};

fetchData()

console.log(fetchData);

