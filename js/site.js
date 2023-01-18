// get the user's input from the page [numbers]
    //CONTROLLER FUNCTION / ENTRY POINT
function getValues(){
    //get values from the page
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    //parse the input (string) into numbers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // verify that inputs are numbers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        //IF YES -  generate numbers 
        let numbersArray = generateNumbers(startValue, endValue);
        //& display on page
        displayNumbers(numbersArray);
    } else {
        //IF NO - tell user they goofed, numbers only 
        Swal.fire(
            {
                icon: 'error',
                title: 'You goofed it...',
                text: 'Only integers are allowed for this input.',
            }
        );
    }
       
}

//generate the numbers within the specified value
function generateNumbers(start, end){
    let numbers = [];

    for(let value = start; value<= end; value++){
        numbers.push(value);
    }

    return numbers; 
}

// display the numbers on the page [Even numbers bold]
    //VIEW FUNCTION -makes it show up on the page, what the user sees
function displayNumbers(numbersArray){
    let tableBody = document.getElementById('results');

    let tableHtml = "";

    for(let index = 0; index < numbersArray.length; index++){
        let value = numbersArray[index];
        let className = '';
        if (value % 2 == 0){
            className = 'even';
        }
        else {
            className = 'odd';
        }

        if (index % 5 == 0){
            tableHtml += '<tr>';
        }

        let tableRow = `<td class="${className}">${value}</td>`;

        tableHtml = tableHtml + tableRow;

        if ((index + 1) % 5 == 0) {
            tableHtml += '</tr>';
        }
    }

    tableBody.innerHTML = tableHtml;
}