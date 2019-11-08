/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = input => input.match(/^\d+\.?\d*\/?\d*\.?\d*/)[0];
  
  this.getUnit = input => input.match(/(gal|L|lbs|kg|mi|km)$/)[0];
  
  this.getReturnUnit = function(initUnit) {
    switch(this.getUnit.match)
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
