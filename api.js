function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function randrange(n){ //打乱的非负整数列表
    var result=[];

    for(var i=0;i<n;i++){
        result.push(i);
        if(result.length!=1){
            var d=result[i];
            var r=randint(0,i-1);
            result[i]=result[r];
            result[r]=d;
        }
    }
        
    return result;
}

function shuffle(list){ //随机下标法打乱列表
    var result=randrange(list.length);

    for(var i=0;i<result.length;i++)
        result[i]=list[result[i]];
    
    return result;
}

function singleRep(str,sub,val){ //字符串对应下标替换
    return str.substring(0,sub)+val+str.substring(sub+1);
}