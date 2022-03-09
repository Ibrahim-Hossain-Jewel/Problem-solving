//Make data list and extract user order amount with a specific userid
const orders = [
    {
        userId: 1,
        userName: 'Jewel',
        amount: 10
    },
    {
        userId: 2,
        userName: 'ibrahim',
        amount: 5
    },
    {
        userId: 1,
        userName: 'Raihan Hossain',
        amount: 8
    },
    {
        userId: 2,
        userName: 'Riazul Hossain',
        amount: 89
    }
];
//now extract userid who has userId === 1 and calculate the whole amount up here;
//now calculate the all amount from the list;
console.log(orders.filter(users => users.userId === 1).map(userData => userData.amount).reduce(
    (accumulator, currentValue)=> accumulator += currentValues
))