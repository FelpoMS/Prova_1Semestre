function add() {
    var num1= parseFloat(document.getElementById("area").value);
    
    var result = num1 * 10;
    document.getElementById("result").innerText = "Total Estimado: R$" + result;
    
}