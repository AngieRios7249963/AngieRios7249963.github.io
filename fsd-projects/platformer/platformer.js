$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(100,100,100,10);
 createPlatform(100,200,150,15);
 createPlatform(300,200,175,13);
 createPlatform(500,300,100,17);
 createPlatform(100,600,300,19);
createPlatform(1000,500,300,12);
createPlatform(500,500,300,12);
createPlatform(400,100,200,12);
createPlatform(1000,400,200,12);
createPlatform(800,400,100,15);
 createPlatform(300,400,100,10);
    // TODO 3 - Create Collectables
 createCollectable("grace",100,100);
  createCollectable ("grace",300,200);
   createCollectable("grace",400,300);
    createCollectable("grace",500,600);
     createCollectable("grace",1300,300);


    
    // TODO 4 - Create Cannons
createCannon("top",1000,1000);
createCannon("bottom",700,1000);
createCannon("right",300,1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
