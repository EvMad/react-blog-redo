const db = require('../Config/connection'); 
const { User, Post } = require('../Models');
const userSeed = require('./userSeed.json');
const postSeed = require('./postSeed.json');

db.once('open', async () => {
    try {
        await Post.deleteMany({});
        await User.deleteMany({});

        // await User.create(userSeed);

        // for loop for Post.create(postSeed[i])???

    } catch (err) {
    console.error(err);
    process.exit(1);
}

console.log("db.once('open') run complete");
process.exit(0);
});



