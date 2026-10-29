import express from "express";
import bodyParser from "body-parser";
import pg from "pg";


const app = express();
const port = 3000;
const db = new pg.Client(
  {
    user: "postgres",
    database: "permalist",
    password: "pass123",
    host: "localhost",
    port: 5432

  }
)
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

let items2 = [
  { id: 1, title: "Buy coffee" },
  { id: 2, title: "Finish workout" },
];
let items3 = [
  { id: 1, title: "Buy juice" },
  { id: 2, title: "Finish homeworks" },
];
let items4 = [
  { id: 1, title: "Buy water" },
  { id: 2, title: "Finish homeworks" },
]
let items5 = [
  { id: 1, title: "Buy makeup" },
  { id: 2, title: "Finish styling" },
]
let items6 = [
  { id: 1, title: "Buy fruits" },
  { id: 2, title: "Finish exams" },
]
let items7 = [
  { id: 1, title: "Buy clothes" },
  { id: 2, title: "Finish organizing" },
]
app.get("/", async (req, res) => {
  try{
    const output = await db.query("SELECT * FROM items ORDER BY id DESC;")
    items = output.rows;
    const output2 = await db.query("SELECT * FROM items2 ORDER BY id DESC;")
    items2 = output2.rows;
    const output3 = await db.query("SELECT * FROM items3 ORDER BY id DESC;")
    items3 = output3.rows;
    const output4 = await db.query("SELECT * FROM items4 ORDER BY id DESC;")
    items4 = output4.rows;
    const output5 = await db.query("SELECT * FROM items5 ORDER BY id DESC;")
    items5 = output5.rows;
    const output6 = await db.query("SELECT * FROM items6 ORDER BY id DESC;")
    items6 = output6.rows;
    const output7 = await db.query("SELECT * FROM items7 ORDER BY id DESC;")
    items7 = output7.rows;
    res.render("index.ejs", {
      listTitle: "Weekly plans",
      listTitle2: "",
      listTitle3:"",
      listTitle4:"",
      listTitle5:"",
      listTitle6:"",
      listTitle7:"",
      listItems: items,
      listItems2: items2,
      listItems3: items3,
      listItems4: items4,
      listItems5: items5,
      listItems6: items6,
      listItems7: items7,
    })
  }
  catch(err) {
    console.error(err);
  }
});
app.post("/add", async (req, res) => {
  const item_x = req.body.newItem;
  const item_y = req.body.newItem2;
  const item_z = req.body.newItem3;
  const item_w = req.body.newItem4;
  const item_v = req.body.newItem5;
  const item_u = req.body.newItem6;
  const item_t = req.body.newItem7;

  try {
    if(item_x && item_x.trim() !== "") {
      await db.query("INSERT INTO items (title) VALUES ($1)",[item_x]);

    } else if (item_y && item_y.trim() !== "") {
      await db.query(
        "INSERT INTO items2 (title) VALUES ($1)",
        [item_y]
      );

    } else if (item_z && item_z.trim() !== "") {
      await db.query(
        "INSERT INTO items3 (title) VALUES ($1)",
        [item_z]
      );
    } else if (item_w && item_w.trim() !== "") {
      await db.query(
        "INSERT INTO items4 (title) VALUES ($1)",
        [item_w]
      );
    } else if (item_v && item_v.trim() !== "") {
      await db.query(
        "INSERT INTO items5 (title) VALUES ($1)",
        [item_v]
      );
    } else if (item_u && item_u.trim() !== "") {
      await db.query(
        "INSERT INTO items6 (title) VALUES ($1)",
        [item_u]
      );
    } else if (item_t && item_t.trim() !== "") {
      await db.query(
        "INSERT INTO items7 (title) VALUES ($1)",
        [item_t]
      );
    }

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding item");
  }
});

app.post("/edit", async(req, res) => {
  // add try-catch block to handle duplicated title error 
  const idxd = req.body.updatedItemId;
  const itemxd = req.body.updatedItemTitle;
  const idxd2 = req.body.updatedItemIdd;
  const itemxd2 = req.body.updatedItemTitle2;
  const idxd3 = req.body.updatedItemIddd;
  const itemxd3 = req.body.updatedItemTitle3;
  const idxd4 = req.body.updatedItemId4;
  const itemxd4 = req.body.updatedItemTitle4;
  const idxd5 = req.body.updatedItemId5;
  const itemxd5 = req.body.updatedItemTitle5;
  const idxd6 = req.body.updatedItemId6;
  const itemxd6 = req.body.updatedItemTitle6;
  const idxd7 = req.body.updatedItemId7;
  const itemxd7 = req.body.updatedItemTitle7;
  try {
    if (itemxd && itemxd.trim() !== ""){
    await db.query("UPDATE items SET title = ($1) WHERE id = $2", [itemxd, idxd]);

  } else if (itemxd2 && itemxd2.trim() !== ""){
    await db.query("UPDATE items2 SET title = ($1) WHERE id = $2", [itemxd2, idxd2]);
    
  }
  else if (itemxd3 && itemxd3.trim() !== ""){
    await db.query("UPDATE items3 SET title = ($1) WHERE id = $2", [itemxd3, idxd3]);
  }
  else if (itemxd4 && itemxd4.trim() !== ""){
    await db.query("UPDATE items4 SET title = ($1) WHERE id = $2", [itemxd4, idxd4]);
  }
  else if (itemxd5 && itemxd5.trim() !== ""){
    await db.query("UPDATE items5 SET title = ($1) WHERE id = $2", [itemxd5, idxd5]);
  }
  else if (itemxd6 && itemxd6.trim() !== ""){
    await db.query("UPDATE items6 SET title = ($1) WHERE id = $2", [itemxd6, idxd6]);
  }
  else if (itemxd7 && itemxd7.trim() !== ""){
    await db.query("UPDATE items7 SET title = ($1) WHERE id = $2", [itemxd7, idxd7]);
  }
  res.redirect("/");

  }
  catch(err) {
    console.error(err);
  }

});

app.post("/delete", async(req, res) => {
  const idx = req.body.deleteItemId;
  const idx2 = req.body.deleteItemId2;
  const idx3 = req.body.deleteItemId3;
  const idx4 = req.body.deleteItemId4;
  const idx5 = req.body.deleteItemId5;
  const idx6 = req.body.deleteItemId6;
  const idx7 = req.body.deleteItemId7;
  try {
    if (idx && idx.trim() !== ""){
      await db.query("DELETE FROM items WHERE id = $1", [idx]);
    } else if (idx2 && idx2.trim() !== ""){
      await db.query("DELETE FROM items2 WHERE id = $1", [idx2]);
    } else if (idx3 && idx3.trim() !== ""){
      await db.query("DELETE FROM items3 WHERE id = $1", [idx3]);
    } else if (idx4 && idx4.trim() !== ""){
      await db.query("DELETE FROM items4 WHERE id = $1", [idx4]);
    } else if (idx5 && idx5.trim() !== ""){
      await db.query("DELETE FROM items5 WHERE id = $1", [idx5]);
    } else if (idx6 && idx6.trim() !== ""){
      await db.query("DELETE FROM items6 WHERE id = $1", [idx6]);
    } else if (idx7 && idx7.trim() !== ""){
      await db.query("DELETE FROM items7 WHERE id = $1", [idx7]);
    }
    res.redirect("/");
  }
  catch(err) {
    console.error(err);
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
