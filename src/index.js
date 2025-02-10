new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "4", "4", "10", "10"],
["theextendedname.4879", "4", "4", "11", "11"],
["Batercus.6257", "4", "2", "11", "9"],
["Alohra.3690", "0", "0", "2", "2"],
["Hatu.4823", "0", "0", "0", "0"],
["TreePoke.9057", "2", "1", "7", "6"],
["Adriatic.5790", "0", "0", "0", "0"],
["Red.6531", "2", "2", "2", "2"],
["Sparxs.7583", "0", "0", "1", "1"],
["Suricatta.1029", "2", "2", "5", "5"],
["morsel.4670", "2", "2", "8", "4"],
["LiLMochaJoe.7456", "4", "4", "9", "9"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "1", "1", "8", "7"],
["Limoncello.9201", "2", "2", "4", "4"],
["cmdrpengu.3012", "1", "1", "4", "4"],
["ItIsAllAboutCake.6125", "2", "1", "8", "6"],
["Calgari.8671", "1", "0", "2", "0"],
["Biot.7201", "3", "2", "9", "8"],
["Ity.3504", "2", "0", "4", "0"],
["Hikaro.1743", "4", "1", "10", "3"],
["TechnoTK.6498", "1", "1", "5", "3"],
["ToraKalani.7985", "1", "0", "7", "4"],
["Lompy.4613", "0", "0", "1", "1"],
["Maru.4726", "0", "0", "0", "0"],
["ANN T UPP.5278", "4", "0", "9", "0"],
["Kisuko.6872", "3", "0", "8", "0"],
["Berticus.8167", "1", "0", "1", "0"],
["Grootella.1270", "2", "1", "8", "7"],
["Dirddle.8524", "1", "0", "1", "0"],
["Stay Alive.2917", "0", "0", "1", "1"],
["mastergaze.8247", "3", "2", "7", "6"],
["Riddah.3201", "2", "1", "7", "5"],
["Bloop.2831", "0", "0", "5", "1"],
["sadmantha.6841", "0", "0", "2", "2"],
["Lhew.1904", "3", "3", "8", "7"],
["Mori.8729", "0", "0", "1", "1"],
["TonySu.2608", "0", "0", "4", "3"],
["sakura.5192", "0", "0", "0", "0"],
["juniippurr.9521", "0", "0", "0", "0"],
["Mogar.8462", "3", "3", "5", "4"],
["Sentinelactual.1824", "0", "0", "0", "0"],
["Aseity.4350", "0", "0", "1", "0"],
["Gambit.8512", "0", "0", "0", "0"],
["Honorable Sage.9073", "1", "0", "1", "0"],
["StrangelyCharmed.9236", "3", "0", "3", "0"],
["Kuro Hato.9602", "1", "0", "1", "0"],
["nknuson.1856", "0", "0", "0", "0"],
["SevenTwo.4620", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["02/09/2025 22:10:54"]],		
	
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


