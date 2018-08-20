$(".buttons").click(function() {
    $('html,body').animate({
        scrollTop: $(".playerTable").offset().top},
        'slow');
});

//All the players
const players = [
    {
      FirstName: "Alex",
      LastName: "Kapp",
      Position: "GK",
      Age: 23,
      Country: "USA",
      ShirtNumber: 24
    },
    {
      FirstName: "Bobby",
      LastName: "Shuttleworth",
      Position: "GK",
      Age: 31,
      Country: "USA",
      ShirtNumber: 33
    },
    {
      FirstName: "Matthew",
      LastName: "Lampson",
      Position: "GK",
      Age: 28,
      Country: "USA",
      ShirtNumber: 28
    },
    {
      FirstName: "Michael",
      LastName: "Boxall",
      Position: "Defender",
      Age: 29,
      Country: "New Zealand",
      ShirtNumber: 15
    },
    {
      FirstName: "Marc",
      LastName: "Burch",
      Position: "Defender",
      Age: 34,
      Country: "USA",
      ShirtNumber: 8
    },
    {
      FirstName: "Francisco",
      LastName: "Calvo",
      Position: "Defender",
      Age: 26,
      Country: "Costa Rica",
      ShirtNumber: 5
    },
    {
      FirstName: "Alexi",
      LastName: "Gomez",
      Position: "Defender",
      Age: 25,
      Country: "Peru",
      ShirtNumber: 32
    },
    {
      FirstName: "Brent",
      LastName: "Kallman",
      Position: "Defender",
      Age: 27,
      Country: "USA",
      ShirtNumber: 32
    },
    {
      FirstName: "Carter",
      LastName: "Manley",
      Position: "Defender",
      Age: 22,
      Country: "USA",
      ShirtNumber: 2
    },
    {
      FirstName: "Tyrone",
      LastName: "Mears",
      Position: "Defender",
      Age: 35,
      Country: "England",
      ShirtNumber: 4
    },
    {
      FirstName: "Eric",
      LastName: "Miller",
      Position: "Defender",
      Age: 25,
      Country: "USA",
      ShirtNumber: 30
    },
    {
      FirstName: "Wyatt",
      LastName: "Omsberg",
      Position: "Defender",
      Age: 22,
      Country: "USA",
      ShirtNumber: 22
    },
    {
      FirstName: "Bertrand",
      LastName: "Owundi Eko'o",
      Position: "Defender",
      Age: 24,
      Country: "Cameroon",
      ShirtNumber: 27
    },
    {
      FirstName: "Jerome",
      LastName: "Thiesson",
      Position: "Defender",
      Age: 31,
      Country: "Switzerland",
      ShirtNumber: 3
    },
    {
      FirstName: "Ibson",
      LastName: "Barreto da Silva",
      Position: "Midfielder",
      Age: 34,
      Country: "Brazil",
      ShirtNumber: 7
    },
    {
      FirstName: "Sam",
      LastName: "Cronin",
      Position: "Midfielder",
      Age: 31,
      Country: "USA",
      ShirtNumber: 6
    },
    {
      FirstName: "Ethan",
      LastName: "Finlay",
      Position: "Midfielder",
      Age: 28,
      Country: "USA",
      ShirtNumber: 13
    },
    {
      FirstName: "Alexi",
      LastName: "Gomez",
      Position: "Midfielder/Defender",
      Age: 25,
      Country: "Peru",
      ShirtNumber: 32
    },
    {
      FirstName: "Harrison",
      LastName: "Heath",
      Position: "Midfielder",
      Age: 22,
      Country: "England",
      ShirtNumber: 16
    },
    {
      FirstName: "Miguel",
      LastName: "Ibarra",
      Position: "Midfielder",
      Age: 28,
      Country: "USA",
      ShirtNumber: 10
    },
    {
      FirstName: "Romario",
      LastName: "Ibarra",
      Position: "Midfielder",
      Age: 23,
      Country: "Ecuador",
      ShirtNumber: 11
    },
    {
      FirstName: "Collin",
      LastName: "Martin",
      Position: "Midfielder",
      Age: 23,
      Country: "USA",
      ShirtNumber: 17
    },
    {
      FirstName: "Luiz Fernando",
      LastName: "Ferreira Maximiano",
      Position: "Midfielder",
      Age: 23,
      Country: "Brazil",
      ShirtNumber: 31
    },
    {
      FirstName: "Kevin",
      LastName: "Molino",
      Position: "Midfielder",
      Age: 28,
      Country: "Trinidad and Tobago",
      ShirtNumber: 18
    },
    {
      FirstName: "Frantz",
      LastName: "Pangop",
      Position: "Midfielder",
      Age: 25,
      Country: "Cameroon",
      ShirtNumber: 19
    },
    {
      FirstName: "Darwin",
      LastName: "Quintero",
      Position: "Midfielder",
      Age: 30,
      Country: "Colombia",
      ShirtNumber: 25
    },
    {
      FirstName: "Rasmus",
      LastName: "Schuller",
      Position: "Midfielder",
      Age: 27,
      Country: "Finland",
      ShirtNumber: 20
    },
    {
        FirstName: "Johan",
        LastName: "Venegas",
        Position: "Midfielder",
        Age: 29,
        Country: "Costa Rica",
        ShirtNumber: 11
      },
      {
        FirstName: "Collen",
        LastName: "Warner",
        Position: "Midfielder",
        Age: 30,
        Country: "USA",
        ShirtNumber: 26
      },
      {
        FirstName: "Abu",
        LastName: "Danladi",
        Position: "Forward",
        Age: 22,
        Country: "Ghana",
        ShirtNumber: 99
      },
      {
        FirstName: "Angelo",
        LastName: "Rodriguez",
        Position: "Forward",
        Age: 29,
        Country: "Colombia",
        ShirtNumber: 9
      },
      {
        FirstName: "Mason",
        LastName: "Toye",
        Position: "Forward",
        Age: 19,
        Country: "USA",
        ShirtNumber: 23
      },
  ];
//display all player info in a table
  players.forEach((player, item) => {
    tr = document.createElement("tr");
    document.getElementById("table0").appendChild(tr);
  
    for(var i in player){
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(i + " : " + player[i]));
      tr.appendChild(td);
    }
  });

  //function to show table
function showTable(){
    $(".show").css("display", "block");
    var y = $(window).scrollTop();  //your current y position on the page
    $(window).scrollTop(y+80);
  }

  //function to show squad mix
  function showMix(){
    $(".show_mix").css("display", "block");
    var y = $(window).scrollTop();  //your current y position on the page
    $(window).scrollTop(y+280);
  }

  //mix it up js
  $(function(){


    $('#MixItUp1').mixItUp({
      selectors: {
        filter: '.filter-1',
        sort: '.sort-1'
      }
    });
}); 