
function sumar(A,B){
    let a=0

    let as=String(A)
    let element = Array(as.length)

    for (let i = 0; i < as.length; i++) {
        element[i]=as.charAt(i);
        console.log(as.charAt(i));
        console.log(' ');
    }

    console.log('resultado:',as);
    console.log(element);
}

sumar(12,45)



function modulo_2(c){
    let num=c
    
    if c==1

    return modulo_2(num%2)

}