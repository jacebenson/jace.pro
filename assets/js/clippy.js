document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    clippy.load('Clippy', function(agent) {
      // Do anything with the loaded agent
      agent.show();
      console.log(agent.animations())
      //agent.play('Searching');
      agent.moveTo(800,270);
      agent.speak('Amazing individuals here.  You can be here too.')
      agent.play('GestureDown');
  });
});