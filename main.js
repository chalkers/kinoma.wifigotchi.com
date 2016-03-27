import Pins from "pins";

const faces = {
	smile: [    0b00111100,    0b01000010,    0b10100101,    0b10000001,    0b10100101,    0b10011001,    0b01000010,    0b00111100	],
	neutral : [    0b00111100,    0b01000010,    0b10100101,    0b10000001,    0b10111101,    0b10000001,    0b01000010,    0b00111100	],
	frown: [    0b00111100,    0b01000010,    0b10100101,    0b10000001,    0b10011001,    0b10100101,    0b01000010,    0b00111100	]	
}

function randomFace(){
	const faceTypes = Object.keys(faces);
	const randomFaceIndex = Math.floor(Math.random() * faceTypes.length);
	const randomFaceKey = faceTypes[randomFaceIndex];
	return faces[randomFaceKey];
}

var main = {	onLaunch(){		Pins.configure({			display: {				require: "display",				pins: {					display: {  sda: 13, clock: 14},					ground: { pin: 12, type: "Ground"},					power: { pin: 11, type: "Power"}				} 			},		}, (success) => {			if (success) {
				Pins.invoke("/display/start", {brightness: 0});
				setInterval(()=> {
					Pins.invoke("/display/writeBitmap", randomFace());
				}, 750);
			} else {				trace("Failed to configure\n");			}		});	}};
export default main;