const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const expenseLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
}); //this will shallow freeze the objects and then we can not change the value of its elements or add or delete new items, but it is only shallow freeze and wont stop from changing nested objects

const getLimit = (limit, user) => (limit[user] ? limit[user] : 0);

const addEntry = function (state, limits, value, description, user = 'jonas') {
  // if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (expenseLimits[user]) {
  //   lim = expenseLimits[user];
  // } else {
  //   lim = 0;
  // }

  // const getLimit = limits[cleanUser] ? limits[cleanUser] : 0;

  // if (value <= getLimit) {
  //   budget.push({ value: -value, description: description, user: user });
  // }
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const budget1 = addEntry(budget, expenseLimits, 10, 'Pizza 🍕');
const budget2 = addEntry(
  budget1,
  expenseLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const budget3 = addEntry(budget2, expenseLimits, 200, 'Stuff', 'Jay');
console.log(budget3);

const flagingExpnsesAboveLimit = function (budget, limits) {
  return budget.map(entry =>
    entry.value <= -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
};
const finalBudget = flagingExpnsesAboveLimit(budget3, expenseLimits);

console.log(finalBudget);

const expensesOverLimit = function (budget, limit) {
  const expensesAboveLimit = budget
    .filter(entry => -entry.value >= getLimit(limit, entry.user))
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  return expensesAboveLimit;
  // var output = '';
  // for (var el of budget) {
  //   if (el.value <= -limit) {
  //     output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
  //   }
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};
const expensesAboveLimit = expensesOverLimit(finalBudget, expenseLimits);
console.log(expensesAboveLimit);

const string = 'money💰1'; //sample string
console.log(string.slice(-3)); //to get emoticon, we have to use 2 characters
console.log(string.slice(-2)); //it will give this output if we use single character
