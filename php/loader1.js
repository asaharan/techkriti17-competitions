$(document).ready(function(){


var title=[];
var desc=[];
var titl="";
var title_arr=[];
var k=0;
var max_size=0;
var tech_id=0;
var start="";
var prize="";
$.ajax({                                      
      url: 'php/get_name.php',   
      type: 'POST',
      dataType: 'json',    
      success: function(data2)
{
if((data2!='false') && (data2!='false1'))
{
$('#just_check').html(data2);
$('#just_check1').html(data2);

var name="",email="",college="",phone="",techid="";
$.ajax({                                      
      url: 'php/profile_user.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if((data2!='false'))
{
$.each(data2, function(index, element2) {

name=element2.name;

email=element2.email;
phone=element2.phone;//fjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
college=element2.college;
techid=element2.techid;
$('#person1').val(techid);
$('#tbody0').append("<tr><td>Name</td><td>"+name+"</td></tr>");
$('#tbody0').append("<tr><td>Email</td><td>"+email+"</td></tr>");
$('#tbody0').append("<tr><td>Phone</td><td>"+phone+"</td></tr>");
$('#tbody0').append("<tr><td>College</td><td>"+college+"</td></tr>");
$('#tbody0').append("<tr><td>TechId</td><td>"+techid+"</td></tr>");

});
}
}
});


var competition="",members="";
$.ajax({                                      
      url: 'php/profile.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
console.log(data2);
 $('#tbody').append("<tr><td>Competition</td><td>Members</td></tr>");
$.each(data2, function(index, element2) {
console.log(element2.competition);
competition=element2.competition;
members=element2.names;
var cell1='<td>'+competition+'</td>';
var cell2='<td>'+members+'</td>';
var final='<tr>'+cell1+cell2+'</tr>'

 $('#tbody').append(final);



});
}
}
});//////for new profile

var workshop="",centre="",pay=0;
$.ajax({                                      
      url: 'php/profile_workshop.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{


 $('#tbody1').append("<tr><td>Workshop</td><td>Centre</td></tr>");
$.each(data2, function(index, element2) {

workshop=element2.workshop;
centre=element2.centre;
pay=element2.pay;

var cell1='<td>'+workshop+'</td>';
var cell2='<td>'+centre+'</td>';
if(centre=='CHENNAI')
{
var final='<tr>'+cell1+cell2+'</tr>';
}
else if(pay==1)
{
var cell3='<td><div class="butts">Paid</div></td>';
var final='<tr>'+cell1+cell2+cell3+'</tr>';
}
else
{
var cell3='<td><div class="butts pay_work" data-centre='+centre+' data-work='+workshop+'>Pay</div></td>';
var final='<tr>'+cell1+cell2+cell3+'</tr>';
}


 $('#tbody1').append(final);



});
}
}
});//////for new profile

var members="",centre="";event="";
$.ajax({                                      
      url: 'php/profile_zonals.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
console.log(data2);
 $('#tbody2').append("<tr><td>EVENT</td><td>Centre</td><td>Members</td></tr>");
$.each(data2, function(index, element2) {

competition=element2.competition;
centre=element2.centre;
names=element2.names;
var cell1='<td>'+competition+'</td>';
var cell2='<td>'+centre+'</td>';
var cell3='<td>'+names+'</td>';
var final='<tr>'+cell1+cell2+cell3+'</tr>'

 $('#tbody2').append(final);



});
}
}
});//

}
else if(data2=='false1')
{
location.reload(true);
}
else
{
$('#abcd').removeClass('dropdown');
$('#abcd1').removeClass('dropdown');


}

}

});

var modal = document.getElementById('myModal');//login
var modal1=document.getElementById('myModal1');//signup
var modal2=document.getElementById('myModal2');//forgot
var modal3=document.getElementById('myModal3');//competition_register
var modal4=document.getElementById('myModal4');//check_mail
var modal5=document.getElementById('myModal5');//profile
var modal6=document.getElementById('myModal6');//Change Password
var modal7=document.getElementById('myModal7');//Resend Email
// Get the button that opens the modal

var signup=document.getElementById("signup_login");
var signup_login_btn=document.getElementById("signup_login_button");
var resend=document.getElementById("resend");
var forgot=document.getElementById("forgot_login");
var change_pass=document.getElementById("change_pass");
var just_profile=document.getElementById("just_profile");
var just_profile1=document.getElementById("just_profile1");
// Get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];var span2 = document.getElementsByClassName("close")[2];var span3 = document.getElementsByClassName("close")[3];var span4 = document.getElementsByClassName("close")[4];var span5 = document.getElementsByClassName("close")[5];
var span6 = document.getElementsByClassName("close")[6];
var span7 = document.getElementsByClassName("close")[7];
$('#abcd').on('click',function()
{
var str=$(this).hasClass('dropdown');

if(str == false)

{

modal.style.display = 'block';
$('#abcd').attr('data', '1');

$('#abcd1').attr('data', '1');

}

});

$('#abcd1').on('click',function()
{
var str=$(this).hasClass('dropdown');

if(str == false)

{

modal.style.display = 'block';
		document.getElementById('mob-nav').style.display = "none";
$('#abcd').attr('data', '1');

$('#abcd1').attr('data', '1');

}

});

// When the user clicks on the button, open the modal 

signup.onclick = function() {
    modal1.style.display = "block";
    modal.style.display = "none";
}
signup_login_btn.onclick = function() {
    modal.style.display = "block";
    modal1.style.display = "none";
}
just_profile.onclick = function() {
    modal5.style.display = "block";
    modal3.style.display = "none";

}
just_profile1.onclick = function() {
    modal5.style.display = "block";
    modal3.style.display = "none";
		document.getElementById('mob-nav').style.display = "none";
}
forgot.onclick = function() {
    modal2.style.display = "block";
    modal.style.display = "none";
}
resend.onclick = function() {
    modal7.style.display = "block";
    modal.style.display = "none";
}
change_pass.onclick = function() {
    modal6.style.display = "block";
    modal5.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";



}

span1.onclick = function() {
    modal1.style.display = "none";



}
span2.onclick = function() {
    modal2.style.display = "none";



}
span3.onclick = function() {
    modal3.style.display = "none";



}
span4.onclick = function() {
    modal4.style.display = "none";



}
span5.onclick = function() {
    modal5.style.display = "none";



}
span6.onclick = function() {
    modal6.style.display = "none";



}
span7.onclick = function() {
    modal7.style.display = "none";



}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



$('#logout').on('click',function()
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
});

$('#logout1').on('click',function()
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
});


$('#list').on('click','li',function()
{
$(this).css('background-color', 'rgba(255, 255, 255,0.65)');
$(this).css('color', '#000000');
$(this).siblings().css('background-color', '#333333');
$(this).siblings().css('color', '#ffffff');

var content=$(this).attr('data-desc');
console.log(content);
$('#event-desc div').html(content);
});

$('#submit').on('click',function()
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


var name="",email="",college="",phone="",techid="";
$.ajax({                                      
      url: 'php/profile_user.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if((data2!='false'))
{
$.each(data2, function(index, element2) {

name=element2.name;
email=element2.email;
phone=element2.phone;//fjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
college=element2.college;
techid=element2.techid;
$('#tbody0').append("<tr><td>Name</td><td>"+name+"</td></tr>");
$('#tbody0').append("<tr><td>Email</td><td>"+email+"</td></tr>");
$('#tbody0').append("<tr><td>Phone</td><td>"+phone+"</td></tr>");
$('#tbody0').append("<tr><td>College</td><td>"+college+"</td></tr>");
$('#tbody0').append("<tr><td>TechId</td><td>"+techid+"</td></tr>");

});
}
}
});


var competition="",members="";
$.ajax({                                      
      url: 'php/profile.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
console.log(data2);
 $('#tbody').append("<tr><td>Competition</td><td>Members</td></tr>");
$.each(data2, function(index, element2) {
console.log(element2.competition);
competition=element2.competition;
members=element2.names;
var cell1='<td>'+competition+'</td>';
var cell2='<td>'+members+'</td>';
var final='<tr>'+cell1+cell2+'</tr>'

 $('#tbody').append(final);



});
}
}
});//////for new profile

var workshop="",centre="",pay=0;
$.ajax({                                      
      url: 'php/profile_workshop.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
console.log(data2);
 $('#tbody1').append("<tr><td>Workshop</td><td>Centre</td></tr>");
$.each(data2, function(index, element2) {

workshop=element2.workshop;
centre=element2.centre;
pay=element2.pay;

var cell1='<td>'+workshop+'</td>';
var cell2='<td>'+centre+'</td>';

if(pay==1)
{
var cell3='<td><div class="butts" >Paid</div></td>';
var final='<tr>'+cell1+cell2+cell3+'</tr>';
}
else
{
var cell3='<td><div class="butts pay_work" data-centre='+centre+' data-work='+workshop+'  >Pay</div></td>';
var final='<tr>'+cell1+cell2+cell3+'</tr>';
}


 $('#tbody1').append(final);



});
}
}
});//////for new profile

var members="",centre="";event="";
$.ajax({                                      
      url: 'php/profile_zonals.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
console.log(data2);
 $('#tbody2').append("<tr><td>EVENT</td><td>Centre</td><td>Members</td></tr>");
$.each(data2, function(index, element2) {

competition=element2.competition;
centre=element2.centre;
names=element2.names;
var cell1='<td>'+competition+'</td>';
var cell2='<td>'+centre+'</td>';
var cell3='<td>'+names+'</td>';
var final='<tr>'+cell1+cell2+cell3+'</tr>'

 $('#tbody2').append(final);



});
}
}
});//






$('#abcd').addClass('dropdown');
$('#abcd1').addClass('dropdown');

$('#just_check').html(data2);
$('#just_check1').html(data2);
modal.style.display='none';

if($('#abcd').attr('data')=='1')
{
$('#abcd').attr('data')='0';
$('#abcd1').attr('data')='0';

}
else
{
modal3.style.display='block';}
}
else
{
$('#error').html('INVALID credentials or mail not confirmed');
}
}

});
})

$('#username').change(function()
{
var username=$('#username').val();
var dataString="username="+username;
$.ajax({                                      
      url: 'php/username.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
$('#error11').html(data2);
}

});




});



$('#forgot').on('click',function()
{
var email=$('#forgot_email').val();
var username=$('#forgot_username').val()
var dataString="email="+email+"&username="+username;
$.ajax({                                      
      url: 'php/forgot.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2=='true')
{
modal2.style.display='none';
modal4.style.display='block';
}

else
{
$('#error2').html(data2);
}
}

});
});

$('#resend_submit').on('click',function()
{
var email=$('#resend_email').val();

var dataString="email="+email;
$.ajax({                                      
      url: 'php/resend_email.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2=='true')
{
modal7.style.display='none';
modal4.style.display='block';
}

else
{
$('#error7').html(data2);
}
}

});
});




$('#tbody1').on('click','.pay_work',function()
{


var centre=$(this).attr('data-centre');
var workshop=$(this).attr('data-work');
$.ajax({                                      
      url: 'php/profile_user.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
$.each(data2, function(index, element2) {

name=element2.name;
email=element2.email;
phone=element2.phone;//fjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
college=element2.college;
techid=element2.techid;
if(workshop=='flying')
{
window.location='https://www.townscript.com/e/workshops1-224324/booking?Workshop2=1&name='+name+'&emailid='+email+'&cq1='+techid+'&cq2='+workshop+'&cq3='+centre;
}
else if(centre=='VADODARA')
{
window.location='https://www.townscript.com/e/workshopvadodara-232413/booking?Vadodara=1&name='+name+'&emailid='+email+'&cq1='+techid+'&cq2='+workshop+'&cq3='+centre;

}
else
{


window.location='https://www.townscript.com/e/workshop2-242140/booking?WORKSHOP=1&name='+name+'&emailid='+email+'&cq1='+techid+'&cq2='+workshop+'&cq3='+centre;

}

});



}
}

});





});


$('#changes').on('click',function()
{
var old_pass=$('#old_pass').val();
var new_pass=$('#new_pass').val()
var dataString="old_pass="+old_pass+"&new_pass="+new_pass;
$.ajax({                                      
      url: 'php/change_pass.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2=='true')
{
modal6.style.display='none';

}

else
{
$('#error6').html(data2);
}
}

});
});




$('#signup').on('click',function()
{
var name=$('#names').val();
var username=$('#username').val();
var email=$('#email').val();
var gender=$("input[name=gender]:checked").val();
var facebook=$('#facebook').val();
var phone=$('#contact').val();
var pass=$('#password').val();
var college=$('#college').val();

var dataString="college="+college+"&email="+email+"&facebook="+facebook+"&gender="+gender+"&name="+name+"&pass="+pass+"&phone="+phone+"&username="+username;
$.ajax({                                      
      url: 'php/signup.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2=='true')
{
modal4.style.display='block';
modal1.style.display='none';
}

else
{
$('#error1').html(data2);
}
}

});
});

});

