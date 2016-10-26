function startTheGame() {
    var display = document.getElementById('thegame');
    var world = new lander.simulation.FlatLand(display.width, -10);
    var position;
    var moonLander;
    var simulation;

    var model = {
        "lander": {
            "x": 0, "y": 251,
            "orientation": Math.PI/4,
            "radius": 5,
            "fuel": 10,
            "thrusting": false
        }
    };

    function resetModel() {
        position = new lander.vector.Vector(0, 251);
        moonLander = new lander.simulation.Lander(position, control);
        simulation = new lander.simulation.Simulation(world, moonLander, simulationOptions);
        moonLander.w = 0;
    }
    resetModel();

    var pressed = {
    };
    document.body.addEventListener('keydown', function(event){
        var code = event.keyCode;
        console.log(code);
        pressed[code] = true;

    }, true);
    document.body.addEventListener('keyup', function(event){
        var code = event.keyCode;
        pressed[code] = false;
    }, true);

    function control(commandpanel){
        if (pressed[219]){ // [
            console.log('left');
            commandpanel.do.turnLeft();
        }
        if (pressed[221]){ // ]
            console.log('right');
            commandpanel.do.turnRight();
        }
        if (pressed[9]){ // tab
            console.log('thrusting');
            commandpanel.do.thruster();
        }
    }

    var simulationOptions = {
        gravity: new lander.vector.Vector(0, -0.01),
        landerRadius: 10,
        thrusterAcceleration: 0.05,
        turningSpeed: Math.PI/1000,
        landingMaxSpeed: 0.25
    };

    function updateModel() {
        model.lander.x = moonLander.x.x;
        model.lander.y = moonLander.x.y;
        model.lander.orientation = moonLander.o.angle() - Math.PI/2;
        model.lander.radius = simulation.params.landerRadius;
        model.lander.crashed = moonLander.crashed;
        model.lander.landed = moonLander.landed;
        model.lander.fuel = moonLander.fuel;
        model.lander.thrusting = moonLander.thrusting;
        if (moonLander.crashed) {
            model.lander.hit_ground = true;
            model.lander.crash_speed = true;
        }
    }


    var view = new lander.View(model, display);
    function tick(){
        simulation.tick();
        updateModel();
        view.update();
        requestAnimationFrame(tick);
    };
    tick();

    return {
        resetModel: resetModel
    }
}
