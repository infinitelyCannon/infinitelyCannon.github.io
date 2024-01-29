const fs = require('node:fs');
const path = require('node:path');

try{
    fs.cpSync(
        path.resolve(__dirname, "../_site"),
        path.resolve(__dirname, "../docs"),
        {
            force: true,
            recursive: true
        }
    );
    fs.rmSync(path.resolve(__dirname, "../_site"), {recursive: true});
}
catch(err){
    console.log("Error encountered while publishing: " + err.message);
}