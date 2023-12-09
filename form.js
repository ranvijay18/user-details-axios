var form = document.getElementById('form');
var itemList = document.getElementById('text');
form.addEventListener('submit', store);

// function store(e){
//     e.preventDefault();
//     localStorage.setItem(document.getElementById('email').value, document.getElementById('name').value);
//     localStorage.setItem(document.getElementById('email').value, document.getElementById('email').value);
// } 

window.addEventListener('DOMContentLoaded' , () => {
  axios.get('https://crudcrud.com/api/4a0e7b63a8e444e495ea8476b5d75c7c/ap')
  .then((res) => {
    let data = Object.values(res.data);

    data.forEach(ele => {
      showOnScreen(ele)
    });
    
  });
})

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

edit.onclick = () =>{
  axios.put('https://crudcrud.com/api/59aae8a8c8724b6e90dfb4e8ee7c37f6/ap/' + res['id'])
  axios.delete('https://crudcrud.com/api/59aae8a8c8724b6e90dfb4e8ee7c37f6/ap/' + res['_id'])
  itemList.removeChild(li);
  document.getElementById('name').value = res['name'];
  document.getElementById('email').value = res['email'];
}


deleteBtn.onclick = () =>{

  axios.delete('https://crudcrud.com/api/4a0e7b63a8e444e495ea8476b5d75c7c/ap/' + res['_id'])
  itemList.removeChild(li);
}

 }




function store(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let myobj = {
        name,
        email 
    }

    axios.post('https://crudcrud.com/api/4a0e7b63a8e444e495ea8476b5d75c7c/ap',myobj)
    .then(res => showOnScreen(res.data))
}

