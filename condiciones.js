function condicional1(){
    var a=parseInt(document.getElementById("txtn1").value);
    var b=parseInt(document.getElementById("txtn2").value);
    var c=parseInt(document.getElementById("txtn3").value);
    var d=parseInt(document.getElementById("txtn4").value);
    var e=parseInt(document.getElementById("txtn5").value);
    var ma=a;
    if(b>ma)ma=b;
    if(c>ma)ma=c;
    if(d>ma)ma=d;
    if(e>ma)ma=e;
    document.getElementById("txtRp").innerHTML=ma;
    return ma;
    }
    function condicional2(){
    var a=parseInt(document.getElementById("txtmn1").value);
    var b=parseInt(document.getElementById("txtmn2").value);
    var c=parseInt(document.getElementById("txtmn3").value);
    var d=parseInt(document.getElementById("txtmn4").value);
    var e=parseInt(document.getElementById("txtmn5").value);
    var ma=a;
    if(b<ma)ma=b;
    if(c<ma)ma=c;
    if(d<ma)ma=d;
    if(e<ma)ma=e;
    document.getElementById("txtRp2").innerHTML=ma;
    return ma;
    }
    function condicional3(){
    var a=parseInt(document.getElementById("txt3n1").value);
    var b=parseInt(document.getElementById("txt3n2").value);
    var c=parseInt(document.getElementById("txt3n3").value);
    var d=parseInt(document.getElementById("txt3n4").value);
    var e=parseInt(document.getElementById("txt3n5").value);
    me1=condicional2();
    ma1=condicional1();
    me2=ma1;
    if(a<me2 && a>me1)me2=a;
    if(b<me2 && b>me1)me2=b;
    if(c<me2 && c>me1)me2=c;
    if(d<me2 && d>me1)me2=d;
    if(e<me2 && e>me1)me2=e;
    me3=ma1;
    if(a<me3 && a>me2)me3=a;
    if(b<me3 && b>me2)me3=b;
    if(c<me3 && c>me2)me3=c;
    if(d<me3 && d>me2)me3=d;
    if(e<me3 && e>me2)me3=e;
    document.getElementById("txtRp3").innerHTML=ma1+" - "+me1+" / "+me2+" / "+me3;
    }

function condicional4(){
    var a=parseInt(document.getElementById("txt4n1").value);
    var b=parseInt(document.getElementById("txt4n2").value);
    var c=parseInt(document.getElementById("txt4n3").value);
    var d=parseInt(document.getElementById("txt4n4").value);
    var e=parseInt(document.getElementById("txt4n5").value);
    if(a>b){
        if(a>c){
            if(a>d){
                if(a>e){
                    ma=a;
                }else{
                    ma=e;
                }
                }else{
                    if(d>e){
                        ma=d;
                }else{
                    ma=e;
                }
            }
        }else{
            if(c>d){
                if(c>e){
                    ma=c;
                    }else{
                        ma=e;
                    }
                }else{
                    if(d>e){
                        ma=d;
                    }else{
                        ma=e;
                    }
                }
            }
        }else{
            if(b>c){
            if(b>d){
            if(b>e){
                ma=b;
                }else{
                    ma=e;
                    }
                    }else{
                        if(d>e){
                            ma=d;
                            }else{
                                ma=e;
                            }
                        }
                    }else{
                        if(c>d){
                        if(c>e){
                            ma=c;
                            }else{
                                ma=e;
                                }
                            }else{
                                if(d>e){
                                    ma=d;
                            }else{
                                ma=e;
                            }
                        }
                    }
                }
                document.getElementById("txtRp4").innerHTML=ma;
    }