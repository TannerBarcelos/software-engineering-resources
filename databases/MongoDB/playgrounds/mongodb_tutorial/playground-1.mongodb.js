/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

/**
 * Note - This is all raw MongoDB queries.  This is not using Mongoose.
 * This is just to show how to use MongoDB queries and help learn proper syntax for queries
 * to appreicate how Mongoose (or another ODM) makes it easier to write queries.
 */

// Select the database to use.
use('shop');

// Retrieve all documents in the products collection.
db.getCollection('products').find({});

// Find all products with price > 40
db.getCollection('products').find({price: {
    $gt: 40
}});

// Find all products with price > 40 and category = 'Sweater'
db.getCollection( 'products' ).find( {
    price: {
        $gt: 40
    },
    category: 'Sweater'
} )
