// 1. button to start the timer
const button = document.createElement('button');
button.id = 'play';
button.innerHTML = 'Play';
button.style.fontSize = '35px';
button.style.position = 'absolute';
button.style.top = '0';
button.style.zIndex = '1000';
button.style.backgroundColor = 'red';
button.style.opacity = '0.5';
button.style.margin = '60px 0';

// 2. an array to hold all the memes
const memesArray = [
  'http://sportsmemes.s3.amazonaws.com/memes/6864/163-screen-shot-2020-07-09-at-5.01.53-pm.jpg',
  'https://www.sportsmemes.net/meme/10328',
  'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMzIyOTU1Mi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY0Nzg2NTA3MX0.VnIHsl-SjI1jvJhN_aDVSVRnY9P1PV8ID170UaUrDUc/img.jpg?width=980',
  'https://www.al.com/resizer/5nICahxduJa_Qx2JgOeb7EO-mIk=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/expo.advance.net/img/aef9d49266/width2048/763_oprahhomeschool.jpeg',
  'https://cdn.24.co.za/files/Cms/General/d/8627/f5d2bdaee88e450bb5c40fa1882e9d5f.png',
  'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMzIyOTU1Ni9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY2MDE5ODU0NH0.cRckokF9Xzih9FsJGQRapnItGysJ0TQlJmgAL-FojAc/img.jpg?width=980',
  'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMzIyOTU1Ny9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY1MzI1MzExOX0.LoNZ6vxa2KVQ0gEcmpouC3ycWmNebHqJiBSuKQxk50k/img.jpg?width=980',
  'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMzIyOTU2MC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTYyNzE1NjkyNn0.jx1uMoqY07JG5NcByfovCsKhO8T4qKqW5lnNZk1VpM0/img.jpg?width=980',
  'https://media.distractify.com/brand-img/oIR2HAmux/2160x1131/no-sports-memes2-1584547307501.jpg',
];

//3. DOM Manipulation
//how to show the meme
//append the meme and so on

const body = document.querySelector('body');
body.appendChild(button);

//make button on click run a function
button.addEventListener('click', () => {
  let counter = 5;
  button.innerHTML = `${counter} seconds left`;

  const interval = setInterval(() => {
    counter--;
    button.innerHTML = `${counter} seconds left`;
    if (counter === 0) {
      clearInterval(interval);
      button.innerHTML = '';
      button.style.display = 'none';
      //create an image
      const img = document.createElement('img');
      //set the src= to an element of the array
      img.style.zIndex = '1010';
      img.src = memesArray[Math.floor(Math.random() * memesArray.length - 1)];
      img.style.position = 'fixed';
      img.style.top = '10%';
      img.style.left = '10%';

      //append image - gets put on the page
      body.appendChild(img);
    }
  }, 1000);
});

//iterate through the array
//randomly pick one element
//display the image on the page
