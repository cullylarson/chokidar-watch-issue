const chokidar = require('chokidar')

const usePolling = process.argv[2] === '--polling'

if(usePolling) console.log('NOTE: Polling enabled.')

const options = {usePolling}

chokidar
    .watch('./server', options)
    .on('all', (event, path) => {
        console.log(event, path)
    })
