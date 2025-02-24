new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "1", "10", "9"],
["theextendedname.4879", "3", "1", "12", "10"],
["Batercus.6257", "1", "0", "9", "6"],
["Alohra.3690", "0", "0", "1", "1"],
["TreePoke.9057", "2", "1", "8", "6"],
["Red.6531", "1", "1", "4", "3"],
["Sparxs.7583", "0", "0", "1", "1"],
["Suricatta.1029", "1", "1", "5", "5"],
["morsel.4670", "2", "1", "8", "5"],
["LiLMochaJoe.7456", "3", "0", "11", "7"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "0", "0", "5", "5"],
["Limoncello.9201", "1", "1", "3", "3"],
["cmdrpengu.3012", "2", "1", "6", "5"],
["ItIsAllAboutCake.6125", "0", "0", "6", "5"],
["Calgari.8671", "1", "1", "2", "1"],
["Biot.7201", "3", "1", "10", "7"],
["Ity.3504", "0", "0", "3", "0"],
["Hikaro.1743", "2", "1", "10", "3"],
["TechnoTK.6498", "0", "0", "2", "2"],
["ToraKalani.7985", "1", "1", "6", "5"],
["Lompy.4613", "0", "0", "0", "0"],
["Maru.4726", "0", "0", "0", "0"],
["ANN T UPP.5278", "1", "0", "10", "0"],
["Kisuko.6872", "1", "0", "7", "0"],
["Berticus.8167", "1", "0", "3", "1"],
["Grootella.1270", "1", "0", "8", "6"],
["Dirddle.8524", "3", "1", "6", "1"],
["Stay Alive.2917", "1", "1", "2", "2"],
["mastergaze.8247", "0", "0", "5", "4"],
["Riddah.3201", "2", "1", "5", "3"],
["Bloop.2831", "0", "0", "4", "2"],
["sadmantha.6841", "1", "0", "3", "2"],
["Lhew.1904", "1", "1", "6", "6"],
["Mori.8729", "0", "0", "0", "0"],
["TonySu.2608", "0", "0", "3", "3"],
["juniippurr.9521", "0", "0", "1", "1"],
["Mogar.8462", "0", "0", "5", "4"],
["Sentinelactual.1824", "0", "0", "0", "0"],
["Aseity.4350", "0", "0", "2", "0"],
["Gambit.8512", "1", "1", "2", "2"],
["Honorable Sage.9073", "0", "0", "1", "0"],
["StrangelyCharmed.9236", "2", "2", "5", "2"],
["Kuro Hato.9602", "0", "0", "1", "0"],
["nknuson.1856", "0", "0", "0", "0"],
["SevenTwo.4620", "0", "0", "0", "0"],
["Nosfentu.8392", "0", "0", "0", "0"],
["Kurg.2893", "0", "0", "1", "0"],
["Nom Nommmm.9468", "0", "0", "0", "0"],
["Rophel.8520", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["02/23/2025 21:58:49"]],		
	
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


