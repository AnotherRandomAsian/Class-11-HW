// Question 1
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
fruits.push('pineapple');
fruits.unshift('kiwi');
console.log(fruits)
// Question 2
console.log(fruits[0] + ' and ' + fruits[fruits.length - 1]);
// Question 3
const selectedFruits = fruits.slice(1, 4);
console.log(selectedFruits)
// Question 4
console.log('The index of grape is ' + fruits.indexOf('grape'))
// Question 5
fruitString = fruits.join(', ');
fruitsFromString = fruitString.split(', ');
console.log(fruitString)
console.log(fruitsFromString)
// Question 6
reversedFruits = fruits.reverse();
console.log(reversedFruits)
// Question 7
sortedFruits = fruits.sort();
console.log(sortedFruits)
// Question 8
const email = `john.doe@example.com`;
console.log(email)
emailParts = email.split('@')
console.log(emailParts)
user = emailParts[0];
domain = emailParts[1];
console.log(user)
console.log(domain)
// Question 9
const temperature = [72, 85, 90, 65, 75, 88];
let highestTemperature  = temperature[0];
for(let i = 0; i < temperature.length; i++) {
  if(temperature[i] > highestTemperature) {
    highestTemperature = temperature[i];
  }
}
console.log(highestTemperature);
// Question 10
const names = ['Alice','Bob','Charlie','David','Eva'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + ' is at index number ' + i);
}