// 1. button to start the timer
const button = document.createElement('button');
button.id = 'play';
button.innerHTML = 'Play';
button.style.fontSize = '35px';
button.style.position = 'absolute';
button.style.top = '0';
button.style.zIndex = '1000';
button.style.backgroundColor = 'orange';
button.style.opacity = '0.5';
button.style.margin = '60px 0';
button.style.color = 'white';


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
  'https://media.distractify.com/brand-img/oIR2HAmux/2160x1131/no-sports-memes2-1584547307501.jpg', 'https://static.boredpanda.com/blog/wp-content/uploads/2020/06/3-5edf7041516fb__700.jpg', 'https://static.boredpanda.com/blog/wp-content/uploads/2020/06/jokes-about-2020-5edf2d2423557__700.jpg',
  'https://static.boredpanda.com/blog/wp-content/uploads/2020/06/5edf2a994b1c9_0qolv2k4dx251-png__700.jpg', 'https://static.boredpanda.com/blog/wp-content/uploads/2020/06/21-5edf8215eddd9__700.jpg', 'https://i.pinimg.com/originals/0f/20/c1/0f20c1933df04a1b3d7ec48b027fdba7.jpg',
  'https://ruinmyweek.com/wp-content/uploads/2020/06/face-mask-memes-you-can-laugh-at-under-your-face-mask-27-memes-6.jpg', 'https://content.api.news/v3/images/bin/4d401a14a40c0301f97214fd0bf11b78', 'https://www.sunway.com.my/stories/wp-content/uploads/2020/03/COVID-Meme.jpg',
  'https://www.demilked.com/magazine/wp-content/uploads/2020/06/5ee08c44f2a05-1267505059333627904-png__700.jpg'
];

//3. DOM Manipulation
//how to show the meme
//append the meme and so on

const body = document.querySelector('body');
body.appendChild(button);

//make button on click run a function
button.addEventListener('click', () => {
  //on click play music
  let audio = new Audio('time-to-go-01.mp3');
  audio.play();

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
      img.style.width = '50%x';
      img.style.height = 'auto';
      img.style.border = 'thick solid #0000FF';
      img.style.boxShadow = "10px 20px 30px grey";
      // img.style.alignContent = 'center';

      //append image - gets put on the page
      body.appendChild(img);
    }
  }, 1000);
});

