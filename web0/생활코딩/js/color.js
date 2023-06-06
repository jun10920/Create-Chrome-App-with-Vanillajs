var Links = {
    setColor:function(color){
    var letterList = document.querySelectorAll('h1, p')
        var i = 0;
        while(i < letterList.length){
        letterList[i].style.color = color;
        i = i + 1;
            }
    }
}
var Body = {
        setColor:function(color){
        document.querySelector('body').style.color = color;
    },
        setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayHandler(self) {+
    var target = document.querySelector('body');
    if(self.value === '어두워져라 얍'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = '밝아져라 얍';

        Links.setColor('yellow');

    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = '어두워져라 얍';

        Links.setColor('blue');
        }
    }