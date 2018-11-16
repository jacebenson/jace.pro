var argv = require('yargs').argv;
var fs = require('fs');
var path = require('path');
if (argv.file) {
    var now = new Date();
    now = new Date(now.getTime()-(now.getTimezoneOffset()*60000));
    now = now.toISOString();
    console.log(now);
    var inputFile = path.resolve(__dirname, argv.file);
    console.log('inputFile: ' + inputFile);
    if(path.basename(inputFile) ===  "index.md"){
        console.log('gotta rewrite some files...');
    }
    var outputFile = path.join(path.dirname(inputFile), 'index.md');
    //outputFile = path.relative(__dirname, outputFile);
    //outputFile = outputFile.split(path.sep).join('/');
    console.log('outputFile: ' + outputFile);
    const { spawn } = require('child_process');
    //$ pandoc --output=index.md --standalone --to gfm --atx-headers --metadata pandoc=yay old.index.md
    const pandoc = spawn('pandoc', [
        '--output=' + outputFile,
        '--standalone',
        'metadata.yaml',
        '--to',
        'gfm',
        '--atx-headers',
        '--metadata',
        'date="'+now+'"',
        inputFile
    ]);

    pandoc.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    pandoc.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    pandoc.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
} else {
    console.log("You must specify file argument, e.g. 'npm run format -- --file=test.md'"); 
}