var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table3");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "AmazonXDB"
});

//Connection to database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);
    showDBitems();
});

function showDBitems() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        var table = new Table({
            head: ["Item ID", "Product Name", "Department", "Price", "Quantity"],
            colWidths: [10, 28, 28, 10, 10]
        });

        for (let i = 0; i < res.length; i++) {
            const db = res[i];

            table.push([db.item_id, db.product_name, db.department_name, db.price, db.stock_quantity]);
        }
        console.log(table.toString());
    });
    setTimeout(purchase, 1000);
};

function purchase() {
    console.log("\r\n");

    inquirer.prompt([
        {
            name: "item_id",
            type: "input",
            message: "Please add ID of the item you would like to purchase.",
        },
        {
            name: "amount",
            type: "input",
            message: "How many would you like to purchase?"
        }
    ]).then(function (answer) {
        var query = "SELECT * FROM products WHERE item_id = ?";
        connection.query(query, answer.item_id, function (err, res) {
            if(err) throw err;

            if(res.length === 0){
                console.log("Sorry, you selected an item that is not in our inventory. Please try again.");
                return purchase();
            };
            
            if( parseInt(answer.amount) > parseInt(res[0].stock_quantity)) {
                console.log("Sorry, you selected an amount greater then what is in our inventory. Please try again.");
                return purchase();
            };

            var newQuantity = parseInt(res[0].stock_quantity) - parseInt(answer.amount);
            var cost = parseFloat(res[0].price) * parseInt(answer.amount);

            connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [ newQuantity, answer.item_id], function (err, res) {
                if (err) throw err;

                console.log(`Thank you for your purchanse.  Your total is $${cost}.`);
                connection.end();
            })
        })
        
    })
}

