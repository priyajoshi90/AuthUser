$(document).ready(function(){
$("#createlink").toggle();
$("#nimesh").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
            $("#others_link").click(function(){
            $("#categoryModal").modal('show');
    });
            $("#nimesh").click(function(){
                $("#duplicate").show();
            });
 
$(function()
 {
       $('#login_main').click(function(){
                $.ajax({
                    url: '/login_attempt',
                    data: {
                        username: $('#inputName').val(),
                        password: $('#inputPassword').val()
                    },
                    async : false,
                    type: 'POST',
                    dataType: 'json',
                    success: function(data) {
                        window.location.href = "/homepage.html";
                        

                        $('#response_data').html("Welcome "+ data.username );

                    },
                    error: function (xhr, status){
                        alert(status);
                    }
                });
            });

       $('#dash_home').click(function(){
        $.ajax({
            url: '/home',
            async: false,
            type: 'GET',
            dataType: 'json',
            success: function(data)
            {
                //alert(data);
            },
            error: function(xhr,status){
                alert(status);
            }
        });
       });

  $('.activitydata').click(function(){
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
        var r = $("<table class='table table-bordered table-hover'><thead><tr><th>&nbsp;&nbsp;Select</th><th>Activity Name</th><th>Description</th><th>Category</th><th>Status</th><th>Created At</th><th>Last Updated At</th></tr></thead></table>")
       $("#some").append(r);
       for (var i = 0; i <=data.length ; i++) 
     {
           var trr =$('<tr class="dynamic_row"><td><input type="checkbox" class="dynamo"></td><td>'+(data[i].name)+'</td><td>'+(data[i].desc)+'</td><td>'+(data[i].category.title)+'</td><td>'+(data[i].status.title)+'</td><td>'+(data[i].created_at)+'</td><td>'+(data[i].updated_at)+'</td></tr>')
       $(".table").append(trr);
     }
    };

 $('.categorydata').click(function(){
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
        var c = $("<table class='table table-bordered table-hover'><thead><tr><th>&nbsp;&nbsp;Select</th><th>Category Name</th><th>Created At</th><th>Last Updated At</th></tr></thead></table>")
       $("#some").append(c);
       for (var i = 0; i <=data.length ; i++) 
     {
           var ctr =$('<tr><td><input type="checkbox" class="dynamo"></td><td>'+(data[i].title)+'</td><td>'+(data[i].created_at)+'</td><td>'+(data[i].updated_at)+'</td></tr>')
       $(".table").append(ctr);
     }
    }; 
        $('#logout').click(function(){
                $.ajax({
            url: '/logout',
            cache: false,
            success: function() {
                window.location.href = "/";
            }
        });
            });

    $('.btn-activity').click(function(){
        $.ajax({
            url: '/activities',
            data: { activity: {
                name: $('#name').val(),
                desc: $('#desc').val(),
                category_id: $('#status').val(),
                status_id: $('#category').val()
                },
            },
            async: false,
            type: 'POST',
            dataType: 'json',
            success: function(data){
                window.location.href = "/homepage.html";
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
                
            },
            error: function(xhr, status){
                alert(status);
            }
        });
    });
  });
});