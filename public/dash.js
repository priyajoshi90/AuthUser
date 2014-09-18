$(document).ready(function(){
$("#createlink").toggle();
$("#nimesh").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
 
$(function()
 {
       $('.btnLogin').click(function(){
                $.ajax({
                    url: '/login_attempt',
                    data: {
                        username: $('#login_username').val(),
                        password: $('#login_password').val()
                    },
                    async : false,
                    type: 'POST',
                    dataType: 'json',
                    success: function(data) {
                        //alert("hello");
                        //alert(data);
                        $('#response_data').html("Welcome "+ data.username );

                    },
                    error: function (xhr, status){
                        alert(status);
                    }
                });
            });

  $('#activitydata').click(function(){
    $.ajax({
        url: '/activities',
        async:false,
        type: 'GET',
        dataType:'json',
        success: function(data)
        {
            active(data);
        }
    });
  });
  function active(data) {
    $("#some").html("");
        var r = $("<table class='table table-bordered table-hover'><thead><tr><th>Select</th><th>Activity Name</th><th>Description</th><th>Category</th><th>Status</th><th>Created At</th><th>Last Updated At</th></tr></thead></table>")
       $("#some").append(r);
       for (var i = 0; i <=data.length ; i++) 
     {
           var tr =$('<tr><td><div class="hello"><input type="checkbox" class="dynamo"</div></td><td>'+(data[i].name)+'</td><td>'+(data[i].desc)+'</td><td>'+(data[i].category.title)+'</td><td>'+(data[i].status.title)+'</td><td>'+(data[i].created_at)+'</td><td>'+(data[i].updated_at)+'</td></tr>')
       $(".table").append(tr);
     }
           
    }; 
 $('#categorydata').click(function(){
    $.ajax({
        url: '/categories',
        async:false,
        type: 'GET',
        dataType:'json',
        success: function(data)
        {
            cate(data);
        }
    });
  });
   function cate(data) {
    $("#some").html("");
        var c = $("<table class='table table-bordered table-hover'><thead><tr><th>Select</th><th>Category Name</th><th>Created At</th><th>Last Updated At</th></tr></thead></table>")
       $("#some").append(c);
       for (var i = 0; i <=data.length ; i++) 
     {
           var ctr =$('<tr><td><input type="checkbox" class="dynamo"</td><td>'+(data[i].title)+'</td><td>'+(data[i].created_at)+'</td><td>'+(data[i].updated_at)+'</td></tr>')
       $(".table").append(ctr);
     }
    }; 
    $('.btn-activity').click(function(){
        $.ajax({
            url: '/activities',
            data: {
                name: $('#name').val(),
                desc: $('#desc').val(),
                category: $('#status').val(),
                status: $('#category').val()
            },
            async: false,
            type: 'POST',
            dataType: 'json',
            success: function(data){

            },
            error: function(xhr, status){
                alert(status);
            }
        });
    });

    $('.btn-category').click(function(){
        $.ajax({
            url: '/categories',
            data: {
                category: {
                    title: $('#cname').val(),
                },
            },
            async: false,
            type: 'POST',
            dataType: 'json',
            success: function(data){
                alert(data);
            },
            error: function(xhr, status){
                alert(status);
            }
        });
    });
  });
});