//@module
const COMMANDS = {
	TURN_ON_OSCILLATOR: 0x21,
	TURN_ON_DISPLAY: 0x81,
	SET_BRIGHTNESS: 0xE0
}

exports.pins = {    display: {type: "I2C", address: 0x70}};exports.configure = function () {	this.display.init();}exports.close = function() {
    this.display.close();}exports.start = function (options) {
	this.display.writeByte(COMMANDS.TURN_ON_OSCILLATOR);	this.display.writeByte(COMMANDS.TURN_ON_DISPLAY);
	this.display.writeByte(COMMANDS.SET_BRIGHTNESS | options.brightness);
}

exports.writeBitmap = function(array) {
	array.forEach((element, index) => {
		this.display.writeByteDataSMB(index * 2, rotateRight(element));
	});
}

function rotateRight(value) {    //Shift everything right 1 bit    //Then shift last bit over if switched on it'll switch on 2^7    return (value >> 1) | (value << 7);};
