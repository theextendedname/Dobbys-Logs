new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "4", "4", "9", "9"],
["theextendedname.4879", "4", "4", "10", "10"],
["Batercus.6257", "4", "3", "10", "9"],
["Alohra.3690", "0", "0", "2", "2"],
["Hatu.4823", "0", "0", "0", "0"],
["TreePoke.9057", "3", "3", "7", "7"],
["Adriatic.5790", "0", "0", "0", "0"],
["Red.6531", "1", "1", "1", "1"],
["Sparxs.7583", "0", "0", "1", "1"],
["Suricatta.1029", "2", "2", "5", "5"],
["morsel.4670", "3", "2", "8", "4"],
["LiLMochaJoe.7456", "3", "3", "8", "7"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "2", "2", "8", "7"],
["Limoncello.9201", "1", "1", "4", "4"],
["cmdrpengu.3012", "2", "2", "5", "5"],
["ItIsAllAboutCake.6125", "2", "2", "8", "7"],
["Calgari.8671", "0", "0", "1", "0"],
["Biot.7201", "2", "2", "8", "8"],
["Nakyo.2710", "0", "0", "0", "0"],
["Ity.3504", "3", "0", "5", "0"],
["Hikaro.1743", "4", "0", "9", "2"],
["TechnoTK.6498", "1", "1", "4", "2"],
["ToraKalani.7985", "3", "2", "8", "5"],
["Lompy.4613", "0", "0", "1", "1"],
["Maru.4726", "0", "0", "1", "1"],
["ANN T UPP.5278", "4", "0", "8", "0"],
["Kisuko.6872", "3", "0", "7", "0"],
["Berticus.8167", "0", "0", "0", "0"],
["Grootella.1270", "3", "2", "8", "7"],
["Dirddle.8524", "0", "0", "0", "0"],
["Stay Alive.2917", "1", "1", "1", "1"],
["mastergaze.8247", "2", "2", "6", "6"],
["Riddah.3201", "2", "2", "7", "5"],
["Bloop.2831", "2", "1", "6", "1"],
["sadmantha.6841", "1", "1", "2", "2"],
["Lhew.1904", "3", "3", "8", "7"],
["Mori.8729", "0", "0", "1", "1"],
["TonySu.2608", "1", "1", "5", "4"],
["sakura.5192", "0", "0", "0", "0"],
["juniippurr.9521", "0", "0", "0", "0"],
["Mogar.8462", "4", "3", "4", "3"],
["Sentinelactual.1824", "0", "0", "0", "0"],
["Aseity.4350", "1", "0", "1", "0"],
["Gambit.8512", "0", "0", "0", "0"],
["Honorable Sage.9073", "1", "0", "1", "0"],
["StrangelyCharmed.9236", "2", "0", "2", "0"],
["Kuro Hato.9602", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["02/06/2025 22:06:19"]],		
	
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


