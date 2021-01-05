import app from './app'

async function main() {
    await app.listen(app.get('port'))
    console.log("Escuchando en el puesto "+app.get('port'));
    
}

main()