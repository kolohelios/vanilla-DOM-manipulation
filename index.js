'use strict';

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('test').innerHTML = 'meh';
  var unorList = document.getElementsByTagName('ul')[0];
  unorList.getElementsByTagName('li')[0].style.color = 'red';
  unorList.getElementsByTagName('li')[1].style.color = 'blue';
  unorList.getElementsByTagName('li')[2].style.color = 'green';
});
