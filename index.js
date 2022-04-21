var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/calc", (req, res) => {
    var operation = req.query.operation;
    var numberone =req.query.numberone;
    var numbertwo = req.query.numbertwo;
        if (operation==="add"){
       res.send(add(numberone,numbertwo)) 
    } 
        if (operation==="sub"){
            res.send(sub(numberone,numbertwo))
    }  if (operation==="mul"){
        res.send(mul(numberone,numbertwo))
    }  if (operation==="div"){
        res.send(div(numberone,numbertwo))
    }
   });

   add = (numberone,numbertwo)=>{
      var num1 = parseInt(numberone)
      var num2 = parseInt(numbertwo)
      var res = num1+num2;
      console.log(res)
    return (res.toString());
   }  
   sub = (numberone,numbertwo)=>{
    var num1 = parseInt(numberone)
      var num2 = parseInt(numbertwo)
      var res = num1-num2;
      console.log(res)
    return (res.toString());
   }  
   mul = (numberone,numbertwo)=>{
    var num1 = parseInt(numberone)
      var num2 = parseInt(numbertwo)
      var res = num1*num2;
      console.log(res)
    return (res.toString());
   } 
   div = (numberone,numbertwo)=>{
    var num1 = parseInt(numberone)
    var num2 = parseInt(numbertwo)
    var res = num1/num2;
    console.log(res)
  return (res.toString());
}