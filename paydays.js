const dayjs = require('dayjs');

class Paydays {
  constructor(){
    //Ensures that all functions start from the same point
    this.startdate = dayjs();
  }

  /**
   * Returns a dayjs object for a given number of paydays in the future
   * @param {number} n The number of months ahead of the current month. Current month is equal to 0
   */
  getNthPayDayObject(n = 0){
    let payDay = this.startdate.add(n,'month').endOf('month') //add 'n' months to the current date and get the final day in the new month
    while(payDay.day() == 0 || payDay.day() == 6){ //repeat until the day is not a weekend
      payDay = payDay.subtract(1, 'day'); //take away a single day
    }
    return payDay;
  }

  /**
   * Returns a date string, in format 'dddd - DD/MM/YYYY', for a given number of paydays in the future
   * @param {number} [n=0] The number of months ahead of the current month. Current month is equal to 0
   */
  getNthPayDay(n = 0){
    return this.getNthPayDayObject(n).format('dddd - DD/MM/YYYY');//format the dayJS object as 'DayName - Day/Month/Year`
  }

  /**
   * Returns a dayjs object for a given number of bonus days in the future
   * @param {number} n The number of months ahead of the current month. Current month is equal to 0
   */
  getNthBonusDayObject(n=0){
    let bonusDay = this.startdate.add(n,'month').date(15);
    if(bonusDay.day() == 0 || bonusDay.day() == 6){ //if the day is on a weekend
      while(bonusDay.day() != 3){ //repeat until the day is a wednsday
        bonusDay = bonusDay.add(1, 'day'); //add a day
      }
    }
    return bonusDay;
  }

  /**
   * Returns a date string, in format 'dddd - DD/MM/YYYY', for a given number of bonus days in the future
   * @param {number} [n=0] The number of months ahead of the current month. Current month is equal to 0
   */
  getNthBonusDay(n = 0){
    return this.getNthBonusDayObject(n).format('dddd - DD/MM/YYYY');//format the dayJS object as 'DayName - Day/Month/Year`
  }

  /**
   * Returns a csv formatted string of all pay and bonus days in the next 12 months
   */
  nextYearAsCSV(){
    let paydays = new Array(12).fill('').map((v,i) => this.getNthPayDay(i)); //create an empty array of fixed length '12' and fill it with the payday string for the correct indexes
    let bonusdays = new Array(12).fill('').map((v,i) => this.getNthBonusDay(i)); //create an empty array of fixed length '12' and fill it with the bonusday string for the correct indexes
    
    let csv = 'Pay Days, Bonus Days'; //start the string with the 2 csv column titles
    for(let i = 0; i < 12; i++){ //repeat 12 times
      csv += `\n${paydays[i]}, ${bonusdays[i]}`;//output a payday and a bonusday, seperated by a comma, on a new line
    }
    
    return csv;
  }
}

module.exports = Paydays;