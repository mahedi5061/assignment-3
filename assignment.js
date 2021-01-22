//Problem No-1

function kilometerToMeter(kilometer){

    if(typeof kilometer !="number"){
        return "Error";
    }
    var meter=1000*kilometer;  //This line calculate the kilometerToMeter
   
    if(meter<0){    //This condition handling the error
         
        return "Sorry kilometer never be negative!";   
    }
    return meter;
}
 
var result=kilometerToMeter();  //please give input.
 

//Problem No-2


function budgetCalculator(watch,mobile,laptop){
     var totalBudget=0;
     if(watch<1 && mobile>0 && laptop>0){   //calculate mobile & laptop budget.
        return totalBudget=((mobile*100)+(laptop*500));
     }
    else if(watch>0 && mobile<1 && laptop>0){   //calculate watch & laptop budget.
       return totalBudget=((watch*50)+(laptop*500));
    }
    else if(watch>0 && mobile>0 && laptop<1){   //calculate watch & mobile budget.
         return totalBudget=((watch*50)+(mobile*100));
    }
    else{                                 //calculate watch,mobile & laptop budget.
        
        return totalBudget=((watch*50)+(mobile*100)+(laptop*500));
    }
}

    var result=budgetCalculator();  //please give input.
     

//Problem No-3


function hotelCost(days){
    var totalCost=0;
    if(typeof days !="number"){
        return "Error";
    }
    else if(days>0 && days<=10){    //Calculate 1-10 days cost.
        return totalCost=days*100;
    }
    else if(days>=11 && days<=20){
        return totalCost=(days-10)*80+1000;  //calculate 1-20 days cost.
    }
    else if(days>20){
        return totalCost=(days-20)*50+1800;  //calculate  1-20 days & after 20 days 
    }
    else{
        return "Sorry! Days never be negative";
    }
}
var results =hotelCost();  // please give input.


//Problem No-4


function megaFriend(friends){
    var longestName="";
    for(var i=0;i<friends.length;i++){
        var element=friends[i];
        if(element.length>longestName.length){
            longestName=element;
        }
    }
    return longestName;
}
var friends=[];   //please give some array element.
var result=megaFriend(friends);
 
 