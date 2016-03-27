//@module
const COMMANDS = {
	TURN_ON_OSCILLATOR: 0x21,
	TURN_ON_DISPLAY: 0x81,
	SET_BRIGHTNESS: 0xE0
}

exports.pins = {
    this.display.close();
	this.display.writeByte(COMMANDS.TURN_ON_OSCILLATOR);
	this.display.writeByte(COMMANDS.SET_BRIGHTNESS | options.brightness);
}

exports.writeBitmap = function(array) {
	array.forEach((element, index) => {
		this.display.writeByteDataSMB(index * 2, rotateRight(element));
	});
}

function rotateRight(value) {