var ping = require ("net-ping");

var session = ping.createSession();

session.pingHost ("173.194.112.112", function (error, target) {
    if (error)
        console.log (target + ": " + error.toString());
    else
        console.log (target + ": Alive");
});


mysql -u root -ptoor  < qordoba_store_db.sql


product_id,model,sku,upc,location,quantity,stock_status_id,image,manufacturer_id,price,points,date_available,sort_order,status,date_added,date_modified,viewed,group_id,author_id,downloadable,reward