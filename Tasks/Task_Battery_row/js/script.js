var x = 44;

function someFunc(){
alert(document.getElementById('txt').value);
}
document.getElementById('btn').onclick = someFunc;

(function() {
  document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
    var res = document.getElementById("txt").value;
    var result = res*44;
    alert(result);	
  document.getElementById('sp').innerHTML =	 result;
   }
  });
})();
function myFunction() {
    var x = document.getElementById("txt").value;
    document.getElementById("sp").innerHTML =  x;
}