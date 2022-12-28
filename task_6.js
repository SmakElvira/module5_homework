let strArr = ['q', 'w', 'e', 'r', 't', 'y', 'q', 't'];
const duplicates = strArr.filter((number, index, numbers) => {
return numbers.indexOf(number) !== index;
});
console.log(duplicates);

if (duplicates.length === 0) {
    console.log('false');
} else {
    console.log('true');
}