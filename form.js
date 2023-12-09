var form = document.getElementById('form');
var itemList = document.getElementById('text');
form.addEventListener('submit', store);

// function store(e){
//     e.preventDefault();
//     localStorage.setItem(document.getElementById('email').value, document.getElementById('name').value);
//     localStorage.setItem(document.getElementById('email').value, document.getElementById('email').value);
// } 


axios.get('https://crudcrud.com/api/7456c9a38bba44d5a6763189be930ea3/appointment')
.then(res => showGetData(res.data));



showGetData = (res) => {
  let Data = Object.values(res);


  Data.forEach(ele => {
    var li = document.createElement('li');
    var detail = ele['name'] + ", " + ele['email'];
    li.appendChild(document.createTextNode(detail));
    document.getElementById("text").appendChild(li);
  
  
    var edit = document.createElement('button');
  edit.className = 'btn btn-success btn-sm edit';
  edit.appendChild(document.createTextNode('Edit'));
  li.append(edit);
  
    var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm delete';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  li.appendChild(deleteBtn);
  })
  
}

showOnScreen = (res) => {

  var li = document.createElement('li');
  var detail = res['name'] + ", " + res['email'];
  li.appendChild(document.createTextNode(detail));
  document.getElementById("text").appendChild(li);


  var edit = document.createElement('button');
edit.className = 'btn btn-success btn-sm edit';
edit.appendChild(document.createTextNode('Edit'));
li.append(edit);

  var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm delete';
deleteBtn.appendChild(document.createTextNode('Delete'));
li.appendChild(deleteBtn);

// deleteBtn.onclick = () =>{
//   localStorage.removeItem(myobj.email);
//   itemList.removeChild(li);
// }

// edit.onclick = () =>{
//   localStorage.removeItem(myobj.email);
//   itemList.removeChild(li);
//   document.getElementById('name').value = name;
//   document.getElementById('email').value = email;
// }
 }


function store(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let myobj = {
        name,
        email 
    }

    axios.post('https://crudcrud.com/api/7456c9a38bba44d5a6763189be930ea3/appointment',myobj)
    .then(res => showOnScreen(res.data))
}

