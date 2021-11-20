"use strict";
// a global function that takes an array
function cs142MakeMultiFilter(originalArray) {
    // slice function return new array.
    let currentArray = originalArray.slice();
    // function takes two functions as parameters
    function arrayFilterer(filterCriteria, callback) {
        // filterCriteria is not a function, the returned function (arrayFilterer) 
        //should immediately return the value of currentArray with no filtering performed.
        if(typeof filterCriteria !== 'function') {
            return currentArray;
        }

        //  function is called on every element of currentArray
        for(var i = 0; i < currentArray.length; i++) {
            // filterCriteria function returns false for an element, 
            //that element should be removed from currentArray.
            if(!filterCriteria(currentArray[i])) {
                //splice() method changes the contents of an array 
                //by removing or replacing existing elements
                currentArray.splice(i,1);
                i--;
            }
        }

        //callback is not a function, it should be ignored.
        if(typeof callback == 'function') {
            //this inside the callback function should 
            //reference the value of originalArray
            callback.apply(originalArray, [currentArray]);
        }
        return arrayFilterer;
    }
     return arrayFilterer;
}
