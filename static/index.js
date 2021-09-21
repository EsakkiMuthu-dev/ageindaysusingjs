
// first js challenges to calculate age in days

//step 1 : get DOB from user and validate the DOB

//step2: getting Current date ,year,month using date function
let today = new Date();
let current_year = today.getFullYear();
let current_month = (today.getMonth()+1);
let current_date=today.getDate();
let dayslist = {
    1:31,
    2:28, 
    3:31, 
    4:30, 
    5:31, 
    6:30, 
    7:31, 
    8:31, 
    9:30, 
    10:31, 
    11:30, 
    12:31};
console.log(current_date,current_month,current_year);

//step 3 :validate the user input
function validate(yr,mo,da){
    if ((yr <=current_year) && (mo<=12) && (da<=31)){
        return true
    }
    else{
        return false
    }
}


//step 4: calaculating remaining days after ur birth in birthyear
function days_in_b_year(yr,mo,da){
    if (mo <= 12){
        var days=0;
        for(mo ; mo<=12 ;mo++){
            var days = days + dayslist[mo];
        }
        var days = days - da
       return days
    }

}

//step 5: calaculating the days spend in this current year
function day_in_this_year(yr,mo,da){

    var spend=0;
    for(let i =1 ; i<mo ;i++){
        var spend = spend + dayslist[i];
    }

    var spend = spend + (da-1);
    return spend;
}

//step 6: calculating leapyears till this year
function leapyear(b_yr,c_yr){
    var leap_count =0;
    for(b_yr ; b_yr<=c_yr; b_yr++ ){
        if((b_yr%400 == 0)||(b_yr%100 != 0)&& (b_yr%4 == 0)){
            leap_count+=1;
        }
    }
    return leap_count;
  
}

//step6: performing simple maths and display ur days u spend in ur lifetime
function main(){

    let birth_year = prompt('enter ur yr');
    let birth_month = prompt('enter ur month');
    let birth_day = prompt('enter ur date');
    console.log('Your Date of Birth is :'+birth_day+'-'+birth_month+'-'+birth_year)
 
    if (validate(birth_year,birth_month,birth_day)){
        let leap_days =leapyear(birth_year,current_year)
        let a =days_in_b_year(birth_year,birth_month,birth_day);
        let b = day_in_this_year(current_year,current_month,current_date);
        let random_days = a+b;
        spend_year = (current_year-1) - (birth_year);
        spend_days = spend_year * 365;
        total_days = random_days + spend_days + leap_days;
        console.log('Days u spend in ur lifetime: '+total_days);
        var h1 = document.createElement('h1')
        var text = document.createTextNode('Days u spend in ur lifetime: '+total_days)
        h1.setAttribute('id','results')
        h1.appendChild(text)
        document.getElementById('flex-box-result').appendChild(h1)
    
    }
    else{
        alert('Enter Correct Input');
    }


    

}
function reset(){
    document.getElementById('results').remove();
}
