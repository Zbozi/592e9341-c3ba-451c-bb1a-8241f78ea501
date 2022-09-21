//Date transformation
export function dateStringToDoubleDigitTime(dateString: string): string {
  let dateTime = dateString.split('T')[1].split('.')[0];

  return dateTime;
}

export function dateStringToEuropeanDate(dateString: string): string {
  //console.log(dateString);
  let dateArray = dateString.split('T')[0].split('-');

  return `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`;
}
