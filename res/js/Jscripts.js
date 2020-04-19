//create for client side
// $(document).ready(() => {
//   // $('#get-button').click(() => {
//   //   $.post('/setData', {
//   //     first_name: document.getElementById('finom').value,
//   //     last_name: document.getElementById('linom').value,
//   //     E_mail: document.getElementById('email').value,
//   //     Phone_number: document.getElementById('phone').value,
//   //     Password: document.getElementById('pwrd').value
//   //   }, function (response) {
//   //     console.log(response);
//   //   });
//   });
  // $('#get-reserve').click(() => {
  //   $.post('/setData2', {
  //     first_name: document.getElementById('fnom').value,
  //     last_name: document.getElementById('lnom').value,
  //     Birthday: document.getElementById('date').value,
  //     Renting_date: document.getElementById('datedebut').value,
  //     Number_of_people: document.getElementById('quantity').value
  //   }, function (response) {
  //     console.log(response);
  //   });
// });

// $(document).ready(() => {
//       $('#verif').click(() => {
//             $.post('/getData', {}, function (response) {
//               var obj = JSON.parse(response);
//               // 
//               for (let i = 0; i < obj.length; i++) {
//                 document.getElementById('write').innerHTML += `<tr  class="id">\ <td><input type="text" class="name" value=" ${obj[i].first_name} "></td>\
//                                         <td class="id"><input type="text" class="name" value=" ${obj[i].last_name} "></td>\
//                                         <td class="id"><input type="text" class="name" value=" ${obj[i].E_mail} "></td>\
//                                         <td class="id"><input type="text" class="name" value=" ${obj[i].Phone_number} "></td>\
//                                         <td class="id"><input type="text" class="name" value=" ${obj[i].Password} "></td>\
//                                         <td>\
//                                   <button class="update-button">UPDATE/PUT</button>\
//                                   <button class="delete-button">DELETE</button>\
//                               </td>\
//                           </tr>\</div>`;
//               }
//             });
//           });
//         });


// create for reservation

//create
// $(document).ready(() => {
//   $('#get-reserve').click(() => {
//     $.post('/setData2', {
//       first_name: document.getElementById('fnom').value,
//       last_name: document.getElementById('lnom').value,
//       Birthday: document.getElementById('date').value,
//       Renting_date: document.getElementById('datedebut').value,
//       Number_of_people: document.getElementById('quantity').value
//     }, function (response) {
//       console.log(response);
//     });
//   });
// });
// $(function() {

// const URI = '../../client.json'

//   // GET/READ
//   $('#get-button').on('click', function() {
//       $.ajax({
//           url: URI,
//           success: function(response) {
//               var tbodyEl = $('write');

//               tbodyEl.html('');

//               response.clients.forEach(function(client) {
//                   tbodyEl.append('\
//                       <tr>\
//                           <td><input type="text" class="name" value="' + client.first_name + '"></td>\
//                           <td><input type="text" class="name" value="' + client.last_name + '"></td>\
//                           <td><input type="text" class="name" value="' + client.E_mail + '"></td>\
//                           <td><input type="text" class="name" value="' + client.Phone_number + '"></td>\
//                           <td><input type="text" class="name" value="' + client.Password + '"></td>\
//                           <td>\
//                           <br>\
//                           <br>\
//                           <br>\
//                               <button class="update-button">UPDATE/PUT</button>\
//                               <button class="delete-button">DELETE</button>\
//                           </td>\
//                       </tr>\
//                   ');
//               });
//           }
//       });
//   });
// });

// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function reserve() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};