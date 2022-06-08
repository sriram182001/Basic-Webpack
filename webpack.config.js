const path=require('path');

module.exports={
    entry:'./client/index.js',
    output:{
        path:path.resolve(__dirname,'./client/dist'),
        filename:'bundle.js'
    },
    
    module:{
        rules:[{
            test:/\.js$/,
            exclude:'/node_modules/',
            use:
                'babel-loader'
            
    }]
    }

}
