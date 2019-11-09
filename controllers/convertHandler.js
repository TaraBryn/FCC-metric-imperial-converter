/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = input => {
    var matches = input.match(/^(\d+\.?\d*)\/?(\d*\.?\d*)/)
    if ([1,3].indexOf(matches.length) == -1) return null;
    if (matches.length == 1) return parseFloat(matches[0]);
    matches.shift();
    if (matches.indexOf('') != -1) return null;
    return (parseFloat(matches[0])/parseFloat(matches[1])).toFixed(5)
  };
  
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
    switch(unit){
      case 'L': return 'liters';
      case 'gal': return 'gallons';
      case 'lbs': return 'pounds';
      case 'kg': return 'kilograms';
      case 'mi': return 'miles';
      case 'km': return 'kilometers';
      default: return '';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (initUnit){
      case 'L': return (initNum/galToL).toFixed(5);
      case 'gal': return (initNum * galToL).toFixed(5);
      case 'lbs': return (initNum * lbsToKg).toFixed(5);
      case 'kg': return (initNum / lbsToKg).toFixed(5);
      case 'mi': return (initNum * miToKm).toFixed(5);
      case 'km': return (initNum / miToKm).toFind(5);
      default: return null;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (!initNum){
      if (!initUnit) return 'invalid number and unit';
      return 'invalid number';
    }
    if (!initUnit) return 'invalid unit';
    return `${initNu`
  };
  
}

module.exports = ConvertHandler;
