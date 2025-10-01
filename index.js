const actualDate = new Date();

var actualDayOfMonth = actualDate.getDate();
var actualDayOfMonth = 2;
var actualMonth = actualDate.getMonth();
var actualYear = actualDate.getFullYear();

actualMonth = actualMonth + 1;

var isValid = true;
var isNewNumber = true;
const thirtyDaysMonth = [4, 6, 9, 11];

document.getElementById("submitt").onclick = function getDateOfBirth(){
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    function didInputChange(){
    
        var day = document.getElementById("day");
        day.addEventListener('change', function() {
            isNewNumber = true;
        })

        var month = document.getElementById("month");
        month.addEventListener('change', function() {
            isNewNumber = true;
        })

        var year = document.getElementById("year");
        year.addEventListener('change', function() {
            isNewNumber = true;
        })
    }

    console.log(isNewNumber)
    
    function checkValidation(){  

        day = Number(day);
        month = Number(month);
        year = Number(year);

        
        if (day === 0 || (day < 1 || day > 31)){
            const day = document.getElementById("day");    
            day.classList.add("error");
            const dayLabel = document.getElementById("dayLabel");    
            dayLabel.classList.add("labelError");
        }else{
            const day = document.getElementById("day");
            day.classList.remove("error");
            const dayErrorMsg = document.getElementById("dayErrorMsg");
            dayErrorMsg.classList.remove("error-msg");
            dayErrorMsg.innerHTML = ""
            const dayLabel = document.getElementById("dayLabel");    
            dayLabel.classList.remove("labelError");
        }

        if(day === 0){
            const dayErrorMsg = document.getElementById("dayErrorMsg");
            dayErrorMsg.classList.add("error-msg");
            dayErrorMsg.innerHTML = "This field is required";
        }else if (day < 1 || day > 31){
            const dayErrorMsg = document.getElementById("dayErrorMsg");
            dayErrorMsg.classList.add("error-msg");
            dayErrorMsg.innerHTML = "Must be a valid day"
        }


        if (month === 0 || (month < 1 || month > 12)){
            const month = document.getElementById("month");    
            month.classList.add("error");
            const monthLabel = document.getElementById("monthLabel");    
            monthLabel.classList.add("labelError");
        }else {
            const month = document.getElementById("month");
            month.classList.remove("error");
            const monthErrorMsg = document.getElementById("monthErrorMsg");
            monthErrorMsg.classList.remove("error-msg");
            monthErrorMsg.innerHTML = ""
            const monthLabel = document.getElementById("monthLabel");    
            monthLabel.classList.remove("labelError");
        }

        if (month === 0){
            const monthErrorMsg = document.getElementById("monthErrorMsg");
            monthErrorMsg.classList.add("error-msg");
            monthErrorMsg.innerHTML = "This field is required";
        }else if(month < 1 || month > 12){
            const monthErrorMsg = document.getElementById("monthErrorMsg");
            monthErrorMsg.classList.add("error-msg");
            monthErrorMsg.innerHTML = "Must be a valid month";
        }


        if (year === 0 || (year < 1900 || year > actualYear)){
            const year = document.getElementById("year");    
            year.classList.add("error");
            const yearLabel = document.getElementById("yearLabel");    
            yearLabel.classList.add("labelError");
        }else {
            const year = document.getElementById("year"); 
            year.classList.remove("error");
            const yearErrorMsg = document.getElementById("yearErrorMsg");
            yearErrorMsg.classList.remove("error-msg");
            yearErrorMsg.innerHTML = ""
            const yearLabel = document.getElementById("yearLabel");    
            yearLabel.classList.remove("labelError");
        }
    
        if (year === 0){
            const yearErrorMsg = document.getElementById("yearErrorMsg");
            yearErrorMsg.classList.add("error-msg");
            yearErrorMsg.innerHTML = "This field is required"
        }
        
        if (year !== 0 && year < 1900){
            const yearErrorMsg = document.getElementById("yearErrorMsg");
            yearErrorMsg.classList.add("error-msg");
            yearErrorMsg.innerHTML = "Must be in the future"
        }
    
        if(year !== 0 && year > actualYear){
            const yearErrorMsg = document.getElementById("yearErrorMsg");
            yearErrorMsg.classList.add("error-msg");
            yearErrorMsg.innerHTML = "Must be in the past"

        }

        if (day === 31 && thirtyDaysMonth.includes(month) || ((day > 28 && day <= 31) && month === 2) || ((day >= actualDayOfMonth) && (month >= actualMonth) && (year === actualYear)) || ((month > actualMonth) && (year === actualYear))){
            const day = document.getElementById("day");    
            day.classList.add("error");
            const month = document.getElementById("month");    
            month.classList.add("error");
            const year = document.getElementById("year");    
            year.classList.add("error");
            const dayLabel = document.getElementById("dayLabel");    
            dayLabel.classList.add("labelError");
            const monthLabel = document.getElementById("monthLabel");    
            monthLabel.classList.add("labelError");
            const yearLabel = document.getElementById("yearLabel");    
            yearLabel.classList.add("labelError");
            const dayErrorMsg = document.getElementById("dayErrorMsg");
            dayErrorMsg.classList.add("error-msg");
            dayErrorMsg.innerHTML = "Must be a valid date";
        }

        if ((day === 0 || (day < 1 || day > 31)) || (month === 0 || (month < 1 || month > 12)) || (year === 0 || (year < 1900 || year > actualYear)) || (day === 31 && thirtyDaysMonth.includes(month) || ((day > 28 && day <= 31) && month === 2) || ((day >= actualDayOfMonth) && (month >= actualMonth) && (year === actualYear)) || ((month > actualMonth) && (year === actualYear)))){
            
            isValid = false;
            
            var yearsOutput = document.getElementById("yearsOutput").innerHTML = "- -";
            
            var monthsOutput = document.getElementById("monthsOutput").innerHTML = "- -";
        
            var daysOutput = document.getElementById("daysOutput").innerHTML = "- -";

        }else{
            isValid = true;
        }
    }

    checkValidation();
    didInputChange();

    if(isValid === true){

        if(isNewNumber){
            var yearsOutput = document.getElementById("yearsOutput");
            yearsOutput.classList.add("animation");
            var monthsOutput = document.getElementById("monthsOutput");
            monthsOutput.classList.add("animation");
            var daysOutput = document.getElementById("daysOutput");
            daysOutput.classList.add("animation");
            isNewNumber = false;
            setTimeout (function remAnimation(){
                var yearsOutput = document.getElementById("yearsOutput");
                yearsOutput.classList.remove("animation");
                var monthsOutput = document.getElementById("monthsOutput");
                monthsOutput.classList.remove("animation");
                var daysOutput = document.getElementById("daysOutput");
                daysOutput.classList.remove("animation");
                }, 2100);
        }

        if(year !== 0){
            var yearsOfAge = actualYear - year;
            
            var months = month;
            
            if(months === actualMonth){
                months = 0;
            }

            if(months > actualMonth){
                months = 12 - (month - actualMonth);
                yearsOfAge = yearsOfAge - 1;
            }

            if(months < actualMonth){
                months = (actualMonth - month);
            }
            
            var days = day;
            
            if(days === actualDayOfMonth){
                days = 0;
            }

            if(days < actualDayOfMonth && days !== 0){
                days = actualDayOfMonth - days;
            }

            if((days > actualDayOfMonth) && (months === 0)){
                yearsOfAge--;
                months = 11;
                
                if (thirtyDaysMonth.includes(actualMonth)){
                        days = 31 - (days - actualDayOfMonth);
                }

                if (actualMonth === 2){
                        days = 28 - (days - actualDayOfMonth);
                }

                if(!(thirtyDaysMonth.includes(actualMonth)) && (actualMonth !== 2)){ 
                        days = 30 - (days - actualDayOfMonth);
                }

                } else if((days > actualDayOfMonth) && (months > 0)){
                
                    months--;

                    if (thirtyDaysMonth.includes(actualMonth)){
                        days = 31 - (days - actualDayOfMonth);
                    }

                    if (actualMonth === 2){
                        days = 28 - (days - actualDayOfMonth);
                    }

                    if((thirtyDaysMonth.includes(actualMonth) === false) && (actualMonth !== 2)){ 
                        days = 30 - (days - actualDayOfMonth);
                    }
                }         

                var yearsOutput = document.getElementById("yearsOutput").innerHTML = yearsOfAge;
                
                var monthsOutput = document.getElementById("monthsOutput").innerHTML = months;

                var daysOutput = document.getElementById("daysOutput").innerHTML = days;
                        
        }
    }
}