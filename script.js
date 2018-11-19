var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var input = document.querySelector("input");

var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mult = document.getElementById("mult");
var div = document.getElementById("div");
var eq = document.getElementById("eq");
var del = document.getElementById("delete");
var comma = document.getElementById("comma");
var change = document.getElementById("change");

var x;

del.addEventListener('click', function() {
    window.location.reload()
});

add.addEventListener('click', function() {
    x = input.value;
    input.value = '';
    
    eq.addEventListener('click', function() {
        var y = input.value;
        input.value =  Number(x) + Number(y);
    });
});

sub.addEventListener('click', function() {
    x = input.value;
    input.value = '';
    
    eq.addEventListener('click', function() {
        var y = input.value;
        input.value =  Number(x) - Number(y);
    });
});

mult.addEventListener('click', function() {
    x = input.value;
    input.value = '';
    
    eq.addEventListener('click', function() {
        var y = input.value;
        input.value = Number(x) * Number(y);
    });
});

div.addEventListener('click', function() {
    x = input.value;
    input.value = '';
    
    eq.addEventListener('click', function() {
        var y = input.value;
        input.value = Number(x) / Number(y);
    });
}); 
 
one.addEventListener('click', function() {
    input.value += 1;
});

two.addEventListener('click', function() {
    input.value += 2;

});

three.addEventListener('click', function() {
    input.value += 3;

});

four.addEventListener('click', function() {
    input.value += 4;
  
});

five.addEventListener('click', function() {
    input.value += 5;

});

six.addEventListener('click', function() {
    input.value += 6;
});

seven.addEventListener('click', function() {
    input.value += 7;
});

eight.addEventListener('click', function() {
    input.value += 8;
});

nine.addEventListener('click', function() {
    input.value += 9;
});

zero.addEventListener('click', function() {
    input.value += 0;
});

comma.addEventListener('click', function() {
    input.value += '.';
});

                        
change.addEventListener('click', function() {
   if(input.value >= 0) {
       input.value = Number(input.value) * -1;
   } else {
       input.value = Number(input.value) * -1;
   }
});