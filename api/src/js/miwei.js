

function base_64_ja(data){
    var suiji=parseInt(Math.round(Math.random()*4))
    if(suiji<=0){
        suiji=suiji+1
    }
    var xunh=suiji
    var jism=window.btoa(data)
    var jism2=''
    while (true) {
        if(suiji<=0){
            jism2+=xunh
            break;
            
        }else{
            jism2=window.btoa(jism)
            jism=jism2
            suiji--
        }
    }
    return jism2
}


function base_64_je(data){
    var inex=data[data.length-1]*1
    var miw=data.slice(0,data.length-1)
    var jiem=window.atob(miw)
    var jiem2=''
    while (true) {
        if(inex<=0){
            break;
        }else{
            jiem2=window.atob(jiem)
            jiem=jiem2
            inex--
        }
    }
    return jiem2
}

var main={
    base_64_ja,base_64_je
}
module.exports= main