function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  console.log("Hello");
  sleep(2000).then(() => { console.log("World!"); });