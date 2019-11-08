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
    switch(initUnit){
      case 'L': return 'gal';
      case 'gal': return 'L';
      case 'lbs': return 'kg';
      case 'kg': return 'lbs';
      case 'mi': return 'km';
      case 'km': return 'mi';
      default: return null;
    }
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (initUnit){
        case
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
