import firebase from "firebase";
firebase.initializeApp({
  serviceAccount: {
    apiKey: "AIzaSyAhaQoWRgjUXrrzE-gGflc9ftUSfwOww94",
    authDomain: "keetela-web-app.firebaseapp.com",
    databaseURL: "https://keetela-web-app.firebaseio.com",
    projectId: "keetela-web-app",
    storageBucket: "keetela-web-app.appspot.com",
    messagingSenderId: "482934079240",
    appId: "1:482934079240:web:b6d638f385931dafb736bd"
  },
  databaseURL: "https://keetela-web-app.firebaseio.com"
});

const db = firebase.database();

class FirebaseHelper {

  static save = (path, data) => {
    return new Promise((resolve, reject) => {
      try {
        var create = db.ref(path);
        create.push(data).key;
        resolve('Record has been created');
      } catch (error) {
        reject(error);
      }
    });
  };

  static get = path => {
    return new Promise((resolve, reject) => {
      try {
        var ref = db.ref(path);
        ref.once('value', function (snapshot) {
          resolve(snapshot.val());
        });
      } catch (error) {
        reject(error);
      }
    });
  };


  static getOne = (path, param) => {
    return new Promise((resolve, reject) => {
      try {
        var ref = db.ref(path);
        ref.orderByChild('uuid')
          .equalTo(param)
          .once('value', function (snapshot) {
            // eslint-disable-next-line
            const key = Object.keys(snapshot.val())[0]
            // let firstValue= d[firstKey];
            resolve(snapshot.val()[key]);
          });
      } catch (error) {
        reject(error);
      }
    });
  };

}

export default FirebaseHelper;
