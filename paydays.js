const dayjs = require('dayjs');

class Paydays {
  constructor(){
    this.startdate = dayjs();
  }

  /**
   * Returns a dayjs object for a given number of paydays in the future
   * @param {number} n The number of months ahead of the current month. Current month is equal to 0
   */
  getNthPayDayObject(n = 0){
    let payDay = this.startdate.add(n,'month').endOf('month')
    while(payDay.day() == 0 || payDay.day() == 6){
      payDay = payDay.subtract(1, 'day');
    }
    return payDay;
  }

  /**
   * Returns a date string, in format 'dddd - DD/MM/YYYY', for a given number of paydays in the future
   * @param {number} [n=0] The number of months ahead of the current month. Current month is equal to 0
   */
  getNthPayDay(n = 0){
    return this.getNthPayDayObject(n).format('dddd - DD/MM/YYYY');
  }

  /**
   * Returns a dayjs object for a given number of bonus days in the future
   * @param {number} n The number of months ahead of the current month. Current month is equal to 0
   */
  getNthBonusDayObject(n=0){
    let bonusDay = this.startdate.add(n,'month').date(15);
    if(bonusDay.day() == 0 || bonusDay.day() == 6){
      while(bonusDay.day() != 3){
        bonusDay = bonusDay.add(1, 'day');
      }
    }
    return bonusDay;
  }

  /**
   * Returns a date string, in format 'dddd - DD/MM/YYYY', for a given number of bonus days in the future
   * @param {number} [n=0] The number of months ahead of the current month. Current month is equal to 0
   */
  getNthBonusDay(n = 0){
    return this.getNthBonusDayObject(n).format('dddd - DD/MM/YYYY');
  }

  /**
   * Returns a csv formatted string of all pay and bonus days in the next 12 months
   */
  nextYearAsCSV(){
    let paydays = new Array(12).fill('').map((v,i) => this.getNthPayDay(i));
    let bonusdays = new Array(12).fill('').map((v,i) => this.getNthBonusDay(i));;
    
    let csv = 'Pay Day, Bonus Day';
    for(let i = 0; i < 12; i++){
      csv += `\n${paydays[i]}, ${bonusdays[i]}`;
    }
    
    return csv;
  }
}

module.exports = Paydays;