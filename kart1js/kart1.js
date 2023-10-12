function prime(){
    let liczba = 2137
    let prime = null
    if (liczba<2){
        prime = false
    }
    else{
        prime = true
    }
    for(let i = 2;i<liczba-1;i++){
        if(liczba%i==0){
            prime =false
            break
        }
    }
    if (prime){
        console.log("OOOO TAK")
    }
}