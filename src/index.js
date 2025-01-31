new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "2", "6", "6"],
["theextendedname.4879", "3", "3", "7", "7"],
["Batercus.6257", "3", "3", "7", "7"],
["Alohra.3690", "2", "2", "2", "2"],
["Hatu.4823", "0", "0", "0", "0"],
["TreePoke.9057", "2", "2", "5", "5"],
["Adriatic.5790", "0", "0", "0", "0"],
["Red.6531", "0", "0", "0", "0"],
["Sparxs.7583", "1", "1", "1", "1"],
["Suricatta.1029", "2", "2", "4", "4"],
["morsel.4670", "2", "1", "5", "2"],
["LiLMochaJoe.7456", "3", "3", "6", "5"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "3", "3", "7", "6"],
["Limoncello.9201", "1", "1", "3", "3"],
["cmdrpengu.3012", "2", "2", "4", "4"],
["ItIsAllAboutCake.6125", "2", "1", "6", "5"],
["Calgari.8671", "0", "0", "1", "0"],
["Biot.7201", "3", "3", "7", "7"],
["Nakyo.2710", "0", "0", "0", "0"],
["Ity.3504", "1", "0", "3", "0"],
["Hikaro.1743", "2", "0", "6", "2"],
["TechnoTK.6498", "1", "0", "3", "1"],
["ToraKalani.7985", "3", "3", "6", "4"],
["Lompy.4613", "0", "0", "1", "1"],
["Maru.4726", "0", "0", "1", "1"],
["ANN T UPP.5278", "3", "0", "5", "0"],
["Kisuko.6872", "2", "0", "5", "0"],
["Berticus.8167", "0", "0", "0", "0"],
["Grootella.1270", "3", "3", "6", "6"],
["Dirddle.8524", "0", "0", "0", "0"],
["Stay Alive.2917", "1", "1", "1", "1"],
["mastergaze.8247", "2", "2", "5", "5"],
["Riddah.3201", "2", "2", "6", "4"],
["Bloop.2831", "3", "0", "5", "0"],
["sadmantha.6841", "0", "0", "1", "1"],
["Lhew.1904", "2", "2", "6", "5"],
["Mori.8729", "0", "0", "1", "1"],
["TonySu.2608", "2", "1", "4", "3"],
["sakura.5192", "0", "0", "0", "0"],
["juniippurr.9521", "0", "0", "0", "0"],
["Karma.8754", "1", "1", "2", "1"],
["Mogar.8462", "1", "1", "1", "1"],
["Aseity.4350", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["01/30/2025 22:54:42"]],		
	
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


