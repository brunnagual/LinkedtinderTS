const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry:{
        cadastrarCandidato: '/home/brunnagual/Acelera ZG/Linketinder_Typescript/frontend/src/candidato/cadastrarCandidato.ts',
        perfilCandidato: '/home/brunnagual/Acelera ZG/Linketinder_Typescript/frontend/src/candidato/perfilCandidato.ts',

        cadastrarEmpresa: '/home/brunnagual/Acelera ZG/Linketinder_Typescript/frontend/src/empresa/cadastrarEmpresa.ts',
        cadastrarVagas: '/home/brunnagual/Acelera ZG/Linketinder_Typescript/frontend/src/empresa/cadastrarVagas.ts',
        perfilEmpresa: '/home/brunnagual/Acelera ZG/Linketinder_Typescript/frontend/src/empresa/perfilEmpresa.ts',

        users: '/home/brunnagual/Acelera ZG/Linketinder_Typescript/frontend/src/users.ts',
        index: '/home/brunnagual/Acelera ZG/Linketinder_Typescript/frontend/src/index.ts',
     },
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 5000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
         filename: '[name].min.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: 'public'},
            ]
        })
    ]
};