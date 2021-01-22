function calculator(type, content) {
  if(type === 'action') {
    switch(content) {
      case 'ac':
        document.getElementById('current-operand').innerHTML = '';
        break;
      case '=':
        document.getElementById('previous-operand').innerHTML = document.getElementById('current-operand').innerHTML;
        var equals = eval(document.getElementById('current-operand').innerHTML);
        document.getElementById('current-operand').innerHTML = equals;
        break;
      default: 
        document.getElementById('current-operand').innerHTML += content; 
    }
  } else if(type === 'number') {
    document.getElementById('current-operand').innerHTML += content; 
  }
}

