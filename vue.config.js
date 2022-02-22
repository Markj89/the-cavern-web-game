// vue.config.js
module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            fileName: 'index.html',
            title: 'The Cavern',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    devServer: {
        open: true
    }
}