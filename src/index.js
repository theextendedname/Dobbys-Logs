new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "1", "11", "10"],
["theextendedname.4879", "3", "1", "12", "10"],
["Batercus.6257", "2", "1", "9", "6"],
["TreePoke.9057", "1", "0", "8", "6"],
["Red.6531", "0", "0", "4", "3"],
["Sparxs.7583", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "6", "6"],
["morsel.4670", "3", "2", "8", "6"],
["LiLMochaJoe.7456", "2", "0", "10", "6"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "0", "0", "4", "4"],
["Limoncello.9201", "1", "1", "4", "4"],
["cmdrpengu.3012", "2", "1", "7", "6"],
["ItIsAllAboutCake.6125", "1", "1", "6", "5"],
["Calgari.8671", "1", "1", "2", "1"],
["Biot.7201", "3", "2", "10", "7"],
["Ity.3504", "1", "0", "4", "0"],
["Hikaro.1743", "3", "2", "11", "4"],
["TechnoTK.6498", "0", "0", "2", "2"],
["ToraKalani.7985", "0", "0", "5", "4"],
["Lompy.4613", "0", "0", "0", "0"],
["Maru.4726", "0", "0", "0", "0"],
["ANN T UPP.5278", "2", "0", "10", "0"],
["Kisuko.6872", "1", "0", "6", "0"],
["Berticus.8167", "1", "0", "3", "1"],
["Grootella.1270", "2", "1", "8", "6"],
["Dirddle.8524", "3", "0", "7", "1"],
["Stay Alive.2917", "1", "1", "2", "2"],
["mastergaze.8247", "0", "0", "5", "4"],
["Riddah.3201", "2", "1", "6", "4"],
["Bloop.2831", "0", "0", "3", "2"],
["sadmantha.6841", "1", "0", "3", "2"],
["Lhew.1904", "2", "2", "7", "7"],
["Mori.8729", "0", "0", "0", "0"],
["TonySu.2608", "0", "0", "2", "2"],
["juniippurr.9521", "0", "0", "1", "1"],
["Mogar.8462", "1", "1", "6", "5"],
["Sentinelactual.1824", "0", "0", "0", "0"],
["Aseity.4350", "0", "0", "2", "0"],
["Gambit.8512", "2", "2", "3", "3"],
["Honorable Sage.9073", "0", "0", "1", "0"],
["StrangelyCharmed.9236", "1", "1", "5", "2"],
["Kuro Hato.9602", "0", "0", "1", "0"],
["SevenTwo.4620", "0", "0", "0", "0"],
["Nosfentu.8392", "0", "0", "0", "0"],
["Kurg.2893", "0", "0", "1", "0"],
["Nom Nommmm.9468", "0", "0", "0", "0"],
["Rophel.8520", "0", "0", "0", "0"],
["WaveRace.9260", "0", "0", "0", "0"],
		],
	sort: true,
	search: true,
	fixedHeader: true,
  style: {
    table: {
      'border': '3px solid #ccc'
    },
    th: {
      'background-color': 'rgb(32,32,32)',
      'color': '#FFFFFF',
      'border-bottom': '3px solid #ccc',
      'text-align': 'center'
    },
   td: {
	   'background-color': 'rgb(88,88,88)',
      'color': '#FFFFFF',
      'text-align': 'left'	 
    }
  }
}).render(document.getElementById("wrapper"));

new gridjs.Grid({columns: ["Last Run"],data: [["02/27/2025 22:42:07"]],		
	
  style: {
    table: {
      'border': '3px solid #ccc'
    },
    th: {
      'background-color': 'rgb(32,32,32)',
      'color': '#FFFFFF',
      'border-bottom': '3px solid #ccc',
      'text-align': 'center'
    },
   td: {
	   'background-color': 'rgb(88,88,88)',
      'color': '#FFFFFF',
      'text-align': 'center'	 
    }
  }
}).render(document.getElementById("datetime"));


