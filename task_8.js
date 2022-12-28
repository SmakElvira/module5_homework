let сhampions = new Map();
сhampions.set("Аргентина", 2022);
сhampions.set("Франция", 2018);
сhampions.set("Германия", 2014);
сhampions.set("Испания", 2010);
сhampions.set("Италия", 2006);
сhampions.set("Бразилия", 2002);
сhampions.forEach((value, key, map) => {
  console.log(`Ключ - ${key}, значение - ${value}`);
});
сhampions.forEach((value, key, map) => {
  console.log(`${key} - чемпион мира по футболу ${value} года`);
});