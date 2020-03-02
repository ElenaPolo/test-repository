"use strict";

function Alist(array){
    this.defaultArray = array;
    this.array = [];
    this.init();
}

Alist.prototype.init = function(){
    let index = 0;

    while (this.defaultArray[index]){
        this.array[index] = this.defaultArray[index];
        index++;
    }
}

Alist.prototype.size = function(){
    let index = 0;
    while (this.array[index]){
        index++;
    }
    return index;
}

Alist.prototype.addStart = function(element){
    let newArray = [];
    newArray[0] = element;
    for(let i = 0; i<this.size(); i++){
        newArray[i+1] = this.array[i];
    } 
    this.array = newArray;
    return this.size();
}

Alist.prototype.addEnd = function(element){
    this.array[this.size()] = element;
    return this.size();
};

Alist.prototype.delStart = function(){
    let element = this.array[0];
    let newArray = [];
    for(let i = 0; i<this.size()-1; i++){
        newArray[i] = this.array[i+1];
    }
    this.array = newArray;
    return element;
};

Alist.prototype.delEnd = function(){
    let element = this.array[this.size()-1];
    let newArray = [];
    for(let i = 0; i<this.size()-1; i++){
        newArray[i] = this.array[i];
    }
    this.array = newArray;
    return element;
};

Alist.prototype.delPosition = function(element){
    let delElement = this.array[element];
    let newArray = [];
    for (let i=0;i<this.size()-1;i++){
       if (i>=element){
           newArray[i]=this.array[i+1]; 
       } else {newArray[i]=this.array[i]};
    }
    this.array = newArray;
    return delElement;   
};

Alist.prototype.get = function(element){
    let getElement = this.array[element];
    return getElement;
};

Alist.prototype.set = function(element, place){
    if (this.array[place]){
        this.array[place]=element;
    } else {
        return "Error!";
    }
};

Alist.prototype.toString = function(){
    let string = '';
    for (let i=0; i<this.size(); i++){
        string += this.array[i];
    }
    return string;
};

Alist.prototype.clear = function(){
    this.array = [];
    this.init();
};

Alist.prototype.min = function(){
    let amin = this.array[0];
    for (let i=1; i<this.size(); i++){
        if(this.array[i]<amin){
            amin = this.array[i];
        }
    }
    return amin;
};

Alist.prototype.max = function(){
    let amax = this.array[0];
    for (let i=1; i<this.size(); i++){
        if(this.array[i]>amax){
            amax = this.array[i];
        }
    }
    return amax;
};

Alist.prototype.minIndex = function(){
    let imin = 0;
    for (let i=0; i<this.size(); i++){
        if(this.array[i]<this.array[imin]){
            imin = i;
        }
    }
    return imin;
};

Alist.prototype.maxIndex = function(){
    let imax = 0;
    for (let i=1; i<this.size(); i++){
        if(this.array[i]>this.array[imax]){
            imax = i;
        }
    }
    return imax;
};

Alist.prototype.sort = function(){
    for (let i=1; i<this.size(); i++){
        for(let j = i; j>0 && this.array[j-1]>this.array[j];j--){
            let temp = this.array[j-1];
            this.array[j-1] = this.array[j];
            this.array[j] = temp;
        }
    }
    
};

Alist.prototype.reverse = function(){
    let tempArr = [];
    let temp = 0;
    for (let i=this.size()-1, j=0; i>=0, j<this.size(); i--, j++){
        temp =  this.array[i];
        tempArr[i] =  this.array[j];
    };
    this.array = tempArr;
};

Alist.prototype.halfReverse = function(){
    let firstHalf = [];
    let secondHalf = [];
    let center;
    if (this.size()%2 === 0){
        for (let i=0; i<this.size()/2;i++){
            firstHalf[i]=this.array[i];     
        }
        for (let j=this.size()/2, k=0; j<this.size(); j++, k++){
            secondHalf[k] = this.array[j];
        }
        firstHalf.reverse();
        secondHalf.reverse();
        for (let i=0; i<this.size()/2;i++){
            this.array[i]=firstHalf[i];     
        }
        for (let j=this.size()/2, k=0; j<this.size(); j++, k++){
            this.array[j] = secondHalf[k];
        }
    } else {
        center = Math.floor(this.size()/2);
        for (let i=0; i<center;i++){
            firstHalf[i]=this.array[i];     
        }
        for (let j=center+1, k=0; j<this.size(); j++, k++){
            secondHalf[k] = this.array[j];
        }
        firstHalf.reverse();
        secondHalf.reverse();
        for (let i=0; i<center;i++){
            this.array[i]=firstHalf[i];     
        }   
        for (let j=center+1, k=0; j<this.size(); j++, k++){
            this.array[j] = secondHalf[k];
        }
    }
    
};

module.exports.Alist = Alist;

