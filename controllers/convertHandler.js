/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = input => {
    var matches = input.match(/^(\d+\.?\d*)(\/?)(\d*\.?\d*)/)
    if (matches.length == 0) return null;
    if (matches[1] == matches[0]) return parseFloat(matches[0]);
    try{ return (parseFloat(matches[1]) / parseFloat(matches[3])).toFixed(5); }
    catch(e){
      console.log(e);
      return null;
    }
  };
  
  this.getUnit = input =>{ 
    try{return input.match(/(gal|L|lbs|kg|mi|km)$/)[0];}
    catch(e){
      console.log(e);
      return null;
    }
  };
  
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
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
  
}

module.exports = ConvertHandler;
