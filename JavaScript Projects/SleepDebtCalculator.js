const getSleepHours = day => {
  switch(day) {
    case 'Monday':
    return 8;
    break;
    case 'Tuesday':
    return 7;
    break;
    case 'Wednesday':
    return 5;
    break;
    case 'Thursday':
    return 7;
    break;
    case 'Friday':
    return 6;
    break;
    case 'Saturday':
    return 9;
    break;
    case 'Sunday':
    return 8;
    break;
    default:
    return 'Invalid';
  }
};

// Total Hours Slept By The User In a Week
const getActualSleepHours = () => 
getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') +
getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') +
getSleepHours('Sunday'); 


// Ideal Sleep Hours Chosen By The User

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;

};

//Function to calculate Sleep Debt

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
  console.log('You got the perfect amount of sleep.');
} else if (actualSleepHours > idealSleepHours) {
  console.log('You got more sleep than needed.');
} else {
   console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}
}

// Calling the main function

calculateSleepDebt();