var api = {
  getBio(name){
    name = name.toLowerCase().trim();
    // console.log("name"+name);
    var url = `https://shining-torch-2907.firebaseio.com/${name}.json`;
    // console.log('URL'+ url);
    return fetch(url).then((res) => res.json())
  },
  getData(name){
    name = name.toLowerCase().trim();
    var url = `https://shining-torch-2907.firebaseio.com/${name}/messages.json`;
    return fetch(url).then((res) => res.json())
  },
  getAllUser(){
    name = name.toLowerCase().trim();
    var url = `https://shining-torch-2907.firebaseio.com/`;
    return fetch(url).then((res) => res.json())
  },
  getInfo(name){
    name = name.toLowerCase().trim();
    var url = `https://shining-torch-2907.firebaseio.com/${name}.json`;
    return fetch(url).then((res) => res.json())
  },
  addInfo(name, password, dob){
    name = name.toLowerCase().trim();
    console.log("YO");
    var url = `https://shining-torch-2907.firebaseio.com/${name}.json`;
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify({id:name, name: name, password: password, dob: dob, online: true, connectWith:'', messages:''})})
      .then((res) => res.json());
  },
  addmessage(name, ms){
    name = name.toLowerCase().trim();
    console.log("YOMS");
    var url = `https://shining-torch-2907.firebaseio.com/`;
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(ms)})
      .then((res) => res.json());
  }
};

module.exports = api;
