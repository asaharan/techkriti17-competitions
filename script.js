var competition="";
var url=window.location.hash.substr(1);
url=url.split("/");
var jist=0
$('#gm').css('display','block');
/*$.ajax({                                
      url: 'php/check.php',   
      type: 'POST',
      dataType: 'json',    
      success: function(data3)
{



if(data3!='false')
{
	console.log(data3);
$('#gm').show();
}
else
{
	$('#gm').hide();

}
}

});*/

var letitbe=0;
var competition=decodeURIComponent(url[3]);
function close2()
{
console.log('closed');
$('#myModal3').css('display','none');}
function close1()
{
console.log('closed');
$('#myModal').css('display','none');}
function functi()
{

var username=$('#user').val();
var password=$('#pwd').val();

var dataString="username="+username+"&pass="+password+"&gender=male";
console.log(dataString);
$.ajax({                                      
      url: 'php/login.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
$('#myModal').css('display','none');
$('#gm').show();

func();
}
else
{
$('#error').html('INVALID credentials or mail not confirmed');
}
}

});


}
function func()
{


$.ajax({                                      
      url: 'php/check.php',   
      type: 'POST',
      dataType: 'json',    
      success: function(data5)
{
if(data5!='false')
{
//NEW
var dataString="competition="+competition;
     $.ajax({                                      
      url: 'php/loader1.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data1)
      {

$.each(data1, function(index, element1) {
var max_size=element1.max_t_size;
var i=0;

for(i=1;i<=max_size;i++)
{

if(i==1)
{
$.ajax({                                
      url: 'php/check.php',   
      type: 'POST',
      dataType: 'json',    
      success: function(data3)
{



if(data3!='false')
{

$('#person1').val(data3);
}
}

});



}//i==1
else
{

if(letitbe==0)
{
$('#form_comp').append("<div class='group'><input onchange='user_change(this.value,"+i+")' class='inputMaterial fixed_comp' required type='text' name='name' data='"+i+"' id='person"+i+"'> <span class='highlight'></span><span class='bar'></span><label>PERSON "+i+" tech id<span>*</span></label><span class='error' id='error3"+i+"'></span></div>");
 }


}//else i==1
}//for loop closed
if(letitbe==0)
{
$('#form_comp').append("<span class='error' id='error3'></span>'");
$('#form_comp').append("<div class='butts' id='com_register' onclick='final_reg()'>Submit</div>");
}
letitbe=1;
$('#myModal3').css('display','block');

});


}

});//ajax


}

else
{


var dataString="competition="+competition;
     $.ajax({                                      
      url: 'php/loader1.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data1)
      {

$.each(data1, function(index, element1) {
var max_size=element1.max_t_size;
var i=0;

for(i=1;i<=max_size;i++)
{

if(i==1)
{
$.ajax({                                
      url: 'php/check.php',   
      type: 'POST',
      dataType: 'json',    
      success: function(data3)
{



if(data3!='false')
{

$('#person1').val(data3);
}
}

});



}
else
{

if(letitbe==0)
{
$('#form_comp').append("<div class='group'><input onchange='user_change(this.value,"+i+")' class='inputMaterial fixed_comp' required type='text' name='name' data='"+i+"' id='person"+i+"'> <span class='highlight'></span><span class='bar'></span><label>PERSON "+i+" tech id<span>*</span></label><span class='error' id='error3"+i+"'></span></div>");
 
}

}
}
if(letitbe==0)
{
$('#form_comp').append("<span class='error' id='error3'></span>'");
$('#form_comp').append("<div class='butts' id='com_register' onclick='final_reg()'>Submit</div>");
}
letitbe=1;

});

$('#myModal').css('display','block');

}

});//ajax









return;

}
}

});





}//func

function user_change(id,attr)
{




$.ajax({                                      
      url: 'php/available.php',   
      type: 'POST',              
      data:  "id="+id,                 
      dataType: 'json',    
      success: function(data2)
{
$('#error3'+attr).html(data2);
}

});

}


function final_reg(){


var team=$('#team').val();
var k=0,str="";
$( ".fixed_comp" ).each(function(index,element) {
if(($(this).val())!="")
{
if(k==0)
{
str=str+$(this).val();
}
else
{str=str+","+$(this).val();}
}
k=k+1;

});
var dataString="team="+team+"&members="+str+"&competition="+competition;
console.log(dataString);
$.ajax({                                      
      url: 'php/reg_comp.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2=='true')
{
$('#what_info').text("You have successfully registered");
$('#myModal3').css('display','none');
$('#myModal4').css('display','block');

setInterval(function() {
location.reload(true);
}, 3000);
}
else
{
$('#error3').html(data2);
}
}

});

}
function logout()
{
$.ajax({                                      
      url: 'php/logout.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data)
      {

}


});
location.reload(true)

}
function loaded()
{

alert('loaded');
}
