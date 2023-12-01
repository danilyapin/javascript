var a = 0;
var b = 0;
var operator = '';

function buttonClick(value) {
    var inputField = document.querySelector('.input');
    var currentInputValue = inputField.value;

    // Überprüfe, ob der aktuelle Wert gleich 0 ist oder leer ist
    if (currentInputValue === '0' || currentInputValue === '') {
        // Wenn ja und der Wert ',' (Dezimalpunkt) ist, füge '0' vor dem Dezimalpunkt hinzu
        if (value === ',') {
            inputField.value = '0' + value;
        } else {
            // Andernfalls setze den Wert auf den neuen Wert (zum Beispiel '1' statt '01')
            inputField.value = value;
        }
    } else if (currentInputValue.includes('.') && value === '.') {
        // Wenn ein Dezimalpunkt bereits vorhanden ist und der neue Wert ebenfalls ein Dezimalpunkt ist, tue nichts
        return;
    } else {
        // Wenn nicht, füge den Wert normal hinzu
        inputField.value += value;
    }

    console.log(inputField.value);
}

function operatorClick(selectedOperator) {
    // Speichere den aktuellen Wert und den ausgewählten Operator
    a = parseFloat(document.querySelector('.input').value);
    operator = selectedOperator;

    // Setze das Eingabefeld zurück
    document.querySelector('.input').value = '';
}

function numberDelete(){
    var currentInputValue = document.querySelector('.input').value;

    if(currentInputValue.length > 0){
        var newInputValue = currentInputValue.slice(0, -1)
        document.querySelector('.input').value = newInputValue;
    }
}

function calculateResult() {
    // Holen Sie den aktuellen Wert von b
    b = parseFloat(document.querySelector('.input').value);

    // Führe die Berechnung basierend auf dem ausgewählten Operator durch
    switch (operator) {
        case '+':
            document.querySelector('.input').value = dieSumme(a, b);
            break;
        case '-':
            document.querySelector('.input').value = dieSubtraktion(a, b);
            break;
        case '*':
            document.querySelector('.input').value = dieMultiplikation(a, b);
            break;
        case '/':
            document.querySelector('.input').value = dieDivision(a, b);
            break;
        default:
            // Wenn kein Operator ausgewählt ist, setze das Eingabefeld auf den aktuellen Wert
            console.log('Es ist ein Fahler passiert!')
            document.querySelector('.input').value = b;
    }

    a = 0;
    b = 0;
    operator = '';
}

function dieSumme(a, b){
    return a + b;
}

function dieSubtraktion(a, b){
    return a - b;
}

function dieMultiplikation(a, b){
    return a * b;
}

function dieDivision(a, b){
    return a / b;
}