const luffyTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const luffyTiming = {
    duration: 3000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const luffy1 = document.querySelector("#luffy1");
  const luffy2 = document.querySelector("#luffy2");
  const luffy3 = document.querySelector("#luffy3");

function animateLuffy(){
  let animation = luffy1.animate(luffyTumbling, luffyTiming);
 
//Promise Chaining
  animation.finished
  .then(() => {
      let animation2 = luffy2.animate(luffyTumbling, luffyTiming);
      return animation2.finished;
  })
  .then(()=>{
      let animation3 = luffy3.animate(luffyTumbling, luffyTiming);
      return animation3.finished;
  })
  .then(()=>{
    animateLuffy();
  })
}
animateLuffy();
 