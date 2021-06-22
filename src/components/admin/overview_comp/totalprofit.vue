<template>
    <div class="card">
        <div class="card-header">
            Total Profit
        </div>
        <div class="card-body" style="border-bottom:1px solid #DFDFDF">
            <div class="row">
                <div class="col-8 user-status">
                    <p>$1,534</p>
                    <p>+7%</p>
                </div>
                <div class="col-4">
                    <apexchart 
                        width="100" type="line" 
                        :options="coptions" :series="coptions.series">
                    </apexchart>
                </div>
            </div>
        </div>
        <div class="card-body body-card">
            <apexchart class="tt" 
                width="290" height="290" type="area" 
                :options="options" :series="options.series">
            </apexchart>  
        </div>
        </div>
</template>

<style scoped>
.overview .card{
  /* padding: 10px; */
  border-radius: 5px;
  box-shadow: 0 0 12px rgb(0 0 0 / 26%);

}
.overview .card .card-header{
  background-color: white !important;
  color:rgb(107, 107, 107) ;
  font-weight: 500;
}
.overview .card .card-body .user-status p{
    margin: 0;
}
.overview .card .card-body .user-status p:first-child{
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 2px;
}
.overview .card .card-body .user-status p:nth-child(2){
 color: #00E396;
}


.tt{
    margin-left:63px;
}
.body-card{
padding: 1.25rem 0 0 0;
}

.overview .card ul li {
    padding-bottom: 0;
}
.overview .card ul li:last-child {
    padding-bottom: 20;
}
.overview .card ul li img {
    width: 57px;
    border-radius: 5px;
    height: 42px;
}
.overview .card ul li .row p {
   margin: 0;
}
.overview .card ul li .row .col-8 p:first-child {
    font-size: 15px;
    font-weight: 600;
}
.overview .card ul li .row .col-8 p:last-child {
    font-size: 13px;
    color: #4e4c4c;
    font-weight: 400;
}

</style>

<script>
export default {
      data: () => ({
        options: {
            responsive: [
            {
            breakpoint: 1000,
            options: {
                chart: {
                width: 370
                },
             }
            },
            {
            breakpoint: 1100,
            options: {
                chart: {
                width: 467
                },
             }
            },
            ],
            series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
            }],
            chart: {
              sparkline: {
              width:290,
              enabled: true,
            },  
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },     

         coptions: {
            colors:['#00E396', '#FF004E'],
            chart: {
                id: 'vuechart-example',
                sparkline: {
                enabled: true,
                },     
            },     
            series: [{
            name: 'series-1',
            data: [55, 54, 56, 50,57, 69, 71, 78, 80, 79, 87,89]
            }]
        },
      
    })
}
</script>

