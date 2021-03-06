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
        $("#some").html("");
        $.ajax({
            url: '/home',
            async: false,
            type: 'GET',
            dataType: 'json',
            success: function(data1)
            {
                
                console.log(typeof(data1.testing));
                //var a =data1.testing;
                $('#piecontainer_category').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false
                    },
                    title: {
                        text: 'Share of Categories'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Category share',
                        data: [
                            ['Testing', parseInt(data1.testing)],
                            ['Others',  parseInt(data1.others)],
                            {
                                name: 'Development',
                                y: parseInt(data1.development),
                                sliced: true,
                                selected: true
                            },
                        ]
                    }]
                });
                $('#piecontainer_activities').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Status of Activities'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Activities',
                data: [
                    ['Completed',   parseInt(data1.completed_activities)],
                    {
                        name: 'Running',
                        y: parseInt(data1.running_activities),
                        sliced: true,
                        selected: true
                    },
                ]
            }]
        });
            },
            error: function(xhr,status){
                alert(status);
            }
        });
       });
        
  $('#active_modal').click(function(){
    $.ajax({
        url: '/categories',
        async:false,
        type: 'GET',
        dataType:'json',
        success: function(data)
        {
            console.log(typeof(data.id));
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
        $("#piecontainer_activities").html("");
        $("#piecontainer_category").html("");
        var r = $("<table class='table table-bordered table-hover'><thead><tr><th>&nbsp;&nbsp;Select</th><th>Activity Name</th><th>Description</th><th>Category</th><th>Status</th><th>Created At</th><th>Last Updated At</th></tr></thead></table>")
       $("#some").append(r);
       for (var i = 0; i <data.length ; i++) 
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
    $("#piecontainer_activities").html("");
        $("#piecontainer_category").html("");
        var c = $("<table class='table table-bordered table-hover'><thead><tr><th>&nbsp;&nbsp;Select</th><th>Category Name</th><th>Created At</th><th>Last Updated At</th></tr></thead></table>")
       $("#some").append(c);
       for (var i = 0; i <data.length ; i++) 
     {
           var ctr =$('<tr><td><input type="checkbox" class="dynamo"></td><td>'+(data[i].c_title)+'</td><td>'+(data[i].created_at)+'</td><td>'+(data[i].updated_at)+'</td></tr>')
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
                status_id: $('#status').val(),
                category_id: $('#category_select').val()
                category_id: $('#category').val()
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
                    c_title: $('#cname').val(),
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
    // Build the chart for activities
        
                // Build the chart for categories
        
            function CheckPassword(inptext)   
{   
var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;  
if(inptext.value.match(paswd))   
{   
alert('Correct, try another...')  
return true;  
}  
else  
{   
alert('Wrong...!')  
return false;  
}  
}    
  });
});