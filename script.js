    var addition=document.getElementById("1");
    var addition1=document.getElementById("2");
    var add=document.getElementById("add");
    var subtract=document.getElementById("subtract");
    var equal=document.getElementById("equal");

    function addToDisplay(value) {
        document.getElementById('result').value += value;
    }
    
    function clearDisplay() {
        document.getElementById('result').value = '';
    }
    
    function calculate() {
        var displayValue = document.getElementById('result').value;
        var result = eval(displayValue);
        document.getElementById('result').value = result;
    }
    
 