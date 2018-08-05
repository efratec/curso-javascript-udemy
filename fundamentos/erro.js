function treatMistakeAndCast(error){
    //throw  new Error("...")
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome:error.name,
        msg:error.mesage,
        date: new Date
    }
}

function imprimirNomeGritado(objeto){
    try {
        console.log(objeto.name.toUpperCase()+ "!!!")
    } catch (error) {
          treatMistakeAndCast(error)      
    } finally {
          console.log('final')  
    }
}


const objeto = {nome: "Roberto"}
imprimirNomeGritado(objeto)