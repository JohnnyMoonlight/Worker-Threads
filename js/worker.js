onmessage= function (e){
    console.log("Worker thread executing...")
    let randomMills = e.data[0];
    let startTime = e.data[1];
    let i = 0;
    
    let recentTime = new Date().getTime();
    
    while (recentTime < startTime+randomMills) {
        i++;
        isPrime(i);
        recentTime = new Date().getTime();
    } 
    postMessage("Worker thread done");
}


function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
