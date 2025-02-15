new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "4", "4", "11", "11"],
["theextendedname.4879", "4", "4", "12", "12"],
["Batercus.6257", "3", "2", "11", "9"],
["Alohra.3690", "0", "0", "2", "2"],
["TreePoke.9057", "3", "2", "9", "8"],
["Red.6531", "2", "1", "3", "2"],
["Sparxs.7583", "0", "0", "1", "1"],
["Suricatta.1029", "2", "2", "6", "6"],
["morsel.4670", "2", "2", "9", "6"],
["LiLMochaJoe.7456", "4", "3", "10", "9"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "2", "2", "8", "7"],
["Limoncello.9201", "1", "1", "4", "4"],
["cmdrpengu.3012", "2", "2", "6", "6"],
["ItIsAllAboutCake.6125", "3", "2", "9", "7"],
["Calgari.8671", "1", "0", "1", "0"],
["Biot.7201", "4", "3", "10", "9"],
["Ity.3504", "0", "0", "4", "0"],
["Hikaro.1743", "4", "2", "11", "3"],
["TechnoTK.6498", "1", "1", "4", "2"],
["ToraKalani.7985", "1", "1", "8", "5"],
["Lompy.4613", "0", "0", "0", "0"],
["Maru.4726", "0", "0", "0", "0"],
["ANN T UPP.5278", "4", "0", "10", "0"],
["Kisuko.6872", "2", "0", "7", "0"],
["Berticus.8167", "2", "1", "2", "1"],
["Grootella.1270", "3", "3", "10", "9"],
["Dirddle.8524", "3", "0", "3", "0"],
["Stay Alive.2917", "0", "0", "1", "1"],
["mastergaze.8247", "3", "2", "8", "7"],
["Riddah.3201", "1", "0", "6", "4"],
["Bloop.2831", "1", "1", "5", "2"],
["sadmantha.6841", "1", "1", "2", "2"],
["Lhew.1904", "2", "2", "8", "7"],
["Mori.8729", "0", "0", "1", "1"],
["TonySu.2608", "1", "1", "5", "4"],
["juniippurr.9521", "1", "1", "1", "1"],
["Mogar.8462", "1", "1", "5", "4"],
["Sentinelactual.1824", "0", "0", "0", "0"],
["Aseity.4350", "1", "0", "2", "0"],
["Gambit.8512", "1", "1", "1", "1"],
["Honorable Sage.9073", "0", "0", "1", "0"],
["StrangelyCharmed.9236", "1", "0", "3", "0"],
["Kuro Hato.9602", "1", "0", "1", "0"],
["nknuson.1856", "0", "0", "0", "0"],
["SevenTwo.4620", "0", "0", "0", "0"],
["Nosfentu.8392", "0", "0", "0", "0"],
["Kurg.2893", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["02/14/2025 23:18:04"]],		
	
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


