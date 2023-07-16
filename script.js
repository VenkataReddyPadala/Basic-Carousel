const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const bottom = document.querySelector(".bottom");
const images = document.querySelectorAll('.image');

const totalPictures = images.length;
let slideNumber = 1;

for(let i = 0; i < totalPictures; i++) {
  const div = document.createElement('div');
  div.className = 'button';
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

const resetBg = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = 'transparent';
    } )
    
}

buttons.forEach((button,ind) =>{
    button.addEventListener('click',()=>{
        resetBg(ind);
        button.style.backgroundColor = 'white';
        slider.style.transform = `translateX(-${ind*450}px)`;
        slideNumber = ind+1;
        
    })
});




const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber*450}px)`;
    slideNumber++;
};

const getFirstSlide = () => {
    slideNumber = 1;
    slider.style.transform = `translateX(0px)`;
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2)*450}px)`;
    slideNumber--;
};

const getLastSlide = () => {
    slideNumber = totalPictures;
    slider.style.transform = `translateX(-${(slideNumber-1)*450}px)`;
    
};

const changeColor = () => {
    resetBg();
    buttons[slideNumber-1].style.backgroundColor = 'white'; 
}


right.addEventListener("click", () => {
    slideNumber < totalPictures ? nextSlide() : getFirstSlide();
    changeColor();
  });

left.addEventListener('click',()=>{
    slideNumber > 1 ? prevSlide() : getLastSlide();
    changeColor();
   
  });

const loop = () => {
    slideNumber < totalPictures ? nextSlide() : getFirstSlide();
    changeColor();
  }

  let rotation;
  const autoplay = () =>{
     rotation = setInterval(loop,2500);
  }
  
  autoplay();
  const container = document.querySelector('.top');
  container.addEventListener('mouseenter',()=>{
    clearInterval(rotation);
  });
  container.addEventListener('mouseleave',autoplay);

 
