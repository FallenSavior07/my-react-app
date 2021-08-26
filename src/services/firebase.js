import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDYW-DxHGjDhkSAneP0l2Jy49P1z4dDmlI",
	authDomain: "gb-react-app.firebaseapp.com",
	databaseURL: "https://gb-react-app-default-rtdb.firebaseio.com",
	projectId: "gb-react-app",
	storageBucket: "gb-react-app.appspot.com",
	messagingSenderId: "225342722865",
	appId: "1:225342722865:web:d83cbeecd5909720895610"
};

firebase.initializeApp(firebaseConfig);