const conf = require('../src/config.json');
const fs = require('fs');
const path = require('path');

const rimraf = require('rimraf');

rimraf('./dist/ydui.scss', function (err) {
    if (err) console.log(err);
    let content = `$assetsPath:'./assets/';
@import './styles/index.scss';`;

    conf.packages.map(item => {
        const cptName = item.name.toLowerCase();
        content += `\n@import './packages/${cptName}/${cptName}.scss';`;
    });

    const dirPath = path.join(__dirname, `../dist/`);
    const filePath = path.join(dirPath, `ydui.scss`);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }

    fs.writeFile(filePath, content, (err) => {
        if (err) throw err;
        console.log(`生成ydui.scss文件成功`);
    });
});
