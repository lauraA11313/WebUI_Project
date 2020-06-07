function Gadget(name) {
    this._name = name;
    this._state = false;

}

Gadget.prototype.getName = function () {
    return this._name;
}

Gadget.prototype.getState = function () {
    return this._state;
}

Gadget.prototype.on = function () {
    this._state = true;
}

Gadget.prototype.off = function () {
    this._state = false;
}

Gadget.prototype.changeName = function (newName) {
    this._name = newName;
}

Gadget.prototype.printAllProp = function () {

}

/********************************************/

function Lamp(name) {
    Gadget.call(this, name);
    this._brightness = 1;
}
Lamp.prototype = Object.create(Gadget.prototype);

Lamp.prototype.getBrightness = function () {
        return this._brightness;
}
Lamp.prototype.increaseBrightness = function () {
    if (this.getBrightness()<4){
        this._brightness++;
    }
    else {
        console.log("Max brightness reached");
    }
}

Lamp.prototype.decreaseBrightness = function () {
    if (this.getBrightness()>1){
        this._brightness--;
    }
    else {
        console.log("Min brightness reached");
    }
}

Lamp.prototype.lampInfo = function () {
    if(this.getState()) {
        console.log(" Lamp name:" + this.getName() + "\n " +
            "Lamp is ON:" + this.getState() + "\n" +
            "Current brightness: " + this.getBrightness());
    }
    else {
        console.log(" Lamp name:" + this.getName() + "\n " +
            "Lamp is ON:" + this.getState() + "\n");
    }

}
Lamp.prototype.constructor = Lamp;


/****************************************************************************************/


function TV(name) {
    Gadget.call(this, name);
    this._currentChannel = 1;
}

TV.prototype = Object.create(Gadget.prototype);

TV.prototype.getCurrentChannel = function () {
    return this._currentChannel;
}

TV.prototype.nextChannel = function () {
    if(this._currentChannel<99) {
        this._currentChannel++;
    }
    else {
        this._currentChannel = 1;
    }
}

TV.prototype.previousChannel = function () {
    if(this._currentChannel>1){
        this._currentChannel--;
    }
    else {
        this._currentChannel = 99;
    }
}

TV.prototype.setChannel = function (channel) {
    if((channel<=99)&&(channel>=1)){
        this._currentChannel=channel;
    }
}

TV.prototype.tvInfo = function () {
    if (this.getState()) {
        console.log(" TV name:" + this.getName() + "\n " +
            "The TV is ON:" + this.getState() + "\n" +
            "Current channel: " + this.getCurrentChannel());
    } else {
        console.log(" TV name:" + this.getName() + "\n " +
            "The TV is ON:" + this.getState() + "\n");
    }
}

TV.prototype.constructor = TV;

/*****************************************************************/

/*


function Kettle(name) {
    Gadget.call(this, name);
    this._currentTemp = 1;
}

Kettle.prototype = Object.create(Gadget.prototype);

Kettle.prototype.getTemp = function () {
    return this._currentTemp;
}

Kettle.prototype.setTemp = function (temp) {
    if ((temp>100)&&(temp<20)){
        console.log("Enter a temperature in between 20 and 100 degrees C")
    }
    else{
        this._currentTemp = temp;
    }
}

Kettle.prototype.constructor = Kettle;

/***************************************************************************/
function WindowEntity (name){
    this._name = name;
    this._state = 0;
}

WindowEntity.prototype.getName = function () {
    return this._name;
}

WindowEntity.prototype.getState = function () {
    return this._state;
}

WindowEntity.prototype.changeName = function (newName) {
    this._name = newName;
}

WindowEntity.prototype.open = function () {
    if(this._state<4){
        this._state++;
    }
    else {
        console.log("Opened completely");
    }
}

WindowEntity.prototype.close = function () {
    if(this._state>0){
        this._state--;
    }
    else {
        console.log("Closed completely");
    }
}



/******************************************************************************/

function Shutter(name) {
    WindowEntity.call(this, name);
    this._opacity = true;
}
Shutter.prototype = Object.create(WindowEntity.prototype);

Shutter.prototype.getOpacity = function () {
    return this._opacity;
}

Shutter.prototype.makeOpaque = function () {
    this._opacity = true;
}

Shutter.prototype.makeTransparent = function () {
    this._opacity = false;
}


Shutter.prototype.shutterInfo = function () {
    if ((this.getState())>0) {
        console.log(" Shutter name:" + this.getName() + "\n " +
            "The shutter is open by: " + this.getState() + " level\n" +
            "Opacity: " + this.getOpacity());
    } else {
        console.log(" Shutter's name:" + this.getName() + "\n " +
                    "The shutter is closed \n" +
                    "Opacity: " + this.getOpacity());
    }
}

Shutter.prototype.constructor = Shutter;





/**********************************************************************************/


function Window(name) {
    WindowEntity.call(this, name);
    this._lock = true;
}

Window.prototype = Object.create(WindowEntity.prototype);

Window.prototype.getLockState = function () {
    return this._lock;
}

Window.prototype.lock = function () {
    this._lock = true;
}

Window.prototype.unlock = function () {
    this._lock = false;
}


Window.prototype.windowInfo = function () {
    if ((this.getState())>0) {
        console.log(" Window name:" + this.getName() + "\n " +
            "The window is open by: " + this.getState() + " level\n" +
            "Lock: " + this.getLockState());
    } else {
        console.log(" Window name:" + this.getName() + "\n " +
                    "The window is closed " + this.getState()+"\n" +
                    "Lock: "+ this.getLockState());
    }
}

Window.prototype.constructor = Window;


/***********************************************************************************/

function SmartHouse (houseName){
    this._houseName = houseName;
    this._numberOfDevices = 0;
    this._lampsArray = [];
    this._tvArray = [];
    this._windowsArray = [];
    this._shuttersArray = [];
}
SmartHouse.prototype.getHouseName = function () {
    return this._houseName;
}

SmartHouse.prototype.setHouseName = function (newHouseName) {
    return this._houseName = newHouseName;
}

SmartHouse.prototype.addLamp = function (lampName) {
    this._lampsArray[this._lampsArray.length]= new Lamp(lampName);
    this._numberOfDevices++;
}

SmartHouse.prototype.addTV = function (tvName) {
    this._tvArray[this._tvArray.length] = new TV(tvName);
    this._numberOfDevices++;
}

SmartHouse.prototype.addWindow = function (windowName) {
    this._windowsArray[this._windowsArray.length] = new Window(windowName);
    this._numberOfDevices++;
}

SmartHouse.prototype.addShutter = function (shutterName) {
    this._shuttersArray[this._shuttersArray.length] = new Shutter(shutterName);
    this._numberOfDevices++;
}

SmartHouse.prototype.getLampsArray = function () {
    return this._lampsArray;
}

SmartHouse.prototype.getTVArray = function () {
    return this._tvArray;
}

SmartHouse.prototype.getWindowsArray = function () {
    return this._windowsArray;
}

SmartHouse.prototype.getShuttersArray = function () {
    return this._shuttersArray;
}
/*
SmartHouse.prototype.displayAllInfo = function () {

}
*/

SmartHouse.prototype.deleteByTheNameOfElement = function (nameToDelete) {
    for (var i=0; i<(this.getLampsArray()).length; i++){
        if ( (this.getLampsArray())[i].getName() === nameToDelete)
        { this.getLampsArray().splice(i, 1); }
    }
    for (var i=0; i<(this.getTVArray()).length; i++){
        if ( (this.getTVArray())[i].getName() === nameToDelete)
        { this.getTVArray().splice(i, 1); }
    }
    for (var i=0; i<(this.getWindowsArray()).length; i++){
        if ( (this.getWindowsArray())[i].getName() === nameToDelete)
        { this.getWindowsArray().splice(i, 1); }
    }
    for (var i=0; i<(this.getShuttersArray()).length; i++){
        if ( (this.getShuttersArray())[i].getName() === nameToDelete)
        { this.getShuttersArray().splice(i, 1); }
    }
}


const ourHouse = new SmartHouse("House1");
ourHouse.addTV("TV1");
ourHouse.addTV("TV2");
ourHouse.addLamp("Lamp1");
ourHouse.addLamp("Lamp2");
ourHouse.addLamp("Lamp3");
ourHouse.addShutter("Shutter1");
lamps = ourHouse.getLampsArray();
console.log(lamps[0].lampInfo());
lamps[0].on();
lamps[0].increaseBrightness();



