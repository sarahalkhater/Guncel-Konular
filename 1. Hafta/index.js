const fsPromise = require('fs').promises;

const fileRead = async () => {
    try {
        await fsPromise.writeFile(path.resolve(__dirname, "text1.txt"), 'data');
    } catch (error) {
    }
}