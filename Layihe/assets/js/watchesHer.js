
function fetchData() {
    fetch('http://localhost:3000/watchesHer')
    .then((res)=>res.json())
    .then(data=>{
       const cardBox=document.querySelector('.watchesHer');

       for (let i = 0; i < 4; i++) {
        const watch=data[i];

        const card = document.createElement('div');
        card.className='card';

        const cardImg = document.createElement('div');
        cardImg.className='cardImg';
        const picture = document.createElement('img');
        picture.src=watch.img_url;
// appen 
        cardImg.appendChild(picture);
    
        const cardText = document.createElement('h4');
        cardText.className='cardText';
        cardText.innerText=watch.text;
        
        const about =document.createElement('p');
        about.innerText=watch.about;


        card.appendChild(cardImg);
        card.appendChild(cardText);
        card.appendChild(about);
        
        cardBox.appendChild(card);

       
       };
    });
    
};

fetchData()

console.log(fetchData);


