import Pins from "pins";

const faces = {
	smile: [
	neutral : [
	frown: [
}

function randomFace(){
	const faceTypes = Object.keys(faces);
	const randomFaceIndex = Math.floor(Math.random() * faceTypes.length);
	const randomFaceKey = faceTypes[randomFaceIndex];
	return faces[randomFaceKey];
}

var main = {
				Pins.invoke("/display/start", {brightness: 0});
				setInterval(()=> {
					Pins.invoke("/display/writeBitmap", randomFace());
				}, 750);
			} else {
