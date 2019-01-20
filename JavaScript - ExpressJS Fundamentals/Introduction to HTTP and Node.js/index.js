const storage=require("./storage");

storage.put("First","FirstPlayer");
// console.log(storage.get("First"));
// console.log(storage.getAll());
// storage.update("First","ChangedFirst");
// console.log(storage.get("First"));
// storage.put("Second","FirstPlayer2");
// console.log(storage.getAll());
// storage.del("Second")
// console.log(storage.getAll());
storage.put("Second","SecondPlayer");
storage.update("First","ChangedFirst");
storage.save()
storage.load()
console.log(storage.getAll())