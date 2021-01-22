function inputvazio(){
    let inputvazio1 = document.getElementById('email')
    let inputvazio2 = document.getElementById('senha')

    if(inputvazio1.value.length == 0 || inputvazio2.value.length == 0){
        let blockLink = document.getElementsByTagName('a')[0]
        blockLink.removeAttribute('href')
    }
    //resolver
   /* 
   else if(inputvazio1.value.length > 0 || inputvazio2.value.length > 0) {
        let link = blockLink.createAttribute('href')
        link.value = 'pg-andamento/andamento.html'
        
    }
    */
}

