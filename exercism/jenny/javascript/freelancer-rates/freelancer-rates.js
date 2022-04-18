export function dayRate(ratePerHour) {
  let number = ratePerHour * 8;
  return(number);
}

export function daysInBudget(budget, ratePerHour) {
  let n = budget / (ratePerHour * 8);
  return(Math.floor(n));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  
  let nb_days_rest = numDays % 22;
  let nb_full_month = (numDays - nb_days_rest) / 22;  
  let n = (nb_days_rest * dayRate(ratePerHour)) + (nb_full_month * 22 * dayRate(ratePerHour) * (1 - discount));
  return(Math.ceil(n));
}
