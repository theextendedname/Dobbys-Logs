new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "8", "8"],
["theextendedname.4879", "3", "3", "9", "9"],
["Batercus.6257", "3", "2", "9", "8"],
["Alohra.3690", "0", "0", "2", "2"],
["Hatu.4823", "0", "0", "0", "0"],
["TreePoke.9057", "2", "2", "6", "6"],
["Adriatic.5790", "0", "0", "0", "0"],
["Red.6531", "1", "1", "1", "1"],
["Sparxs.7583", "0", "0", "1", "1"],
["Suricatta.1029", "1", "1", "4", "4"],
["morsel.4670", "2", "1", "7", "3"],
["LiLMochaJoe.7456", "2", "2", "7", "6"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "2", "2", "8", "7"],
["Limoncello.9201", "1", "1", "4", "4"],
["cmdrpengu.3012", "1", "1", "4", "4"],
["ItIsAllAboutCake.6125", "1", "1", "7", "6"],
["Calgari.8671", "0", "0", "1", "0"],
["Biot.7201", "1", "1", "7", "7"],
["Nakyo.2710", "0", "0", "0", "0"],
["Ity.3504", "2", "0", "4", "0"],
["Hikaro.1743", "3", "0", "8", "2"],
["TechnoTK.6498", "1", "1", "4", "2"],
["ToraKalani.7985", "2", "2", "7", "5"],
["Lompy.4613", "0", "0", "1", "1"],
["Maru.4726", "0", "0", "1", "1"],
["ANN T UPP.5278", "3", "0", "7", "0"],
["Kisuko.6872", "2", "0", "6", "0"],
["Berticus.8167", "0", "0", "0", "0"],
["Grootella.1270", "2", "2", "7", "7"],
["Dirddle.8524", "0", "0", "0", "0"],
["Stay Alive.2917", "1", "1", "1", "1"],
["mastergaze.8247", "2", "2", "6", "6"],
["Riddah.3201", "1", "1", "6", "4"],
["Bloop.2831", "2", "1", "6", "1"],
["sadmantha.6841", "1", "1", "2", "2"],
["Lhew.1904", "2", "2", "7", "6"],
["Mori.8729", "0", "0", "1", "1"],
["TonySu.2608", "1", "1", "5", "4"],
["sakura.5192", "0", "0", "0", "0"],
["juniippurr.9521", "0", "0", "0", "0"],
["Mogar.8462", "3", "2", "3", "2"],
["Sentinelactual.1824", "0", "0", "0", "0"],
["Aseity.4350", "1", "0", "1", "0"],
["Gambit.8512", "0", "0", "0", "0"],
["Honorable Sage.9073", "1", "0", "1", "0"],
["StrangelyCharmed.9236", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["02/02/2025 22:00:23"]],		
	
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


