new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "1", "11", "10"],
["theextendedname.4879", "4", "1", "13", "10"],
["Batercus.6257", "3", "1", "10", "6"],
["TreePoke.9057", "1", "0", "8", "6"],
["Red.6531", "0", "0", "4", "3"],
["Sparxs.7583", "1", "0", "1", "0"],
["Suricatta.1029", "1", "1", "6", "6"],
["morsel.4670", "4", "2", "9", "6"],
["LiLMochaJoe.7456", "2", "0", "10", "6"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "0", "0", "4", "4"],
["Limoncello.9201", "1", "1", "4", "4"],
["cmdrpengu.3012", "3", "1", "8", "6"],
["ItIsAllAboutCake.6125", "2", "1", "7", "5"],
["Calgari.8671", "1", "1", "2", "1"],
["Biot.7201", "4", "2", "11", "7"],
["Ity.3504", "2", "0", "5", "0"],
["Hikaro.1743", "4", "2", "12", "4"],
["TechnoTK.6498", "1", "0", "3", "2"],
["ToraKalani.7985", "0", "0", "5", "4"],
["Lompy.4613", "0", "0", "0", "0"],
["Maru.4726", "0", "0", "0", "0"],
["ANN T UPP.5278", "3", "0", "11", "0"],
["Kisuko.6872", "1", "0", "6", "0"],
["Berticus.8167", "1", "0", "3", "1"],
["Grootella.1270", "3", "1", "9", "6"],
["Dirddle.8524", "4", "0", "8", "1"],
["Stay Alive.2917", "2", "1", "3", "2"],
["mastergaze.8247", "0", "0", "5", "4"],
["Riddah.3201", "2", "1", "6", "4"],
["Bloop.2831", "0", "0", "3", "2"],
["sadmantha.6841", "2", "0", "4", "2"],
["Lhew.1904", "2", "2", "7", "7"],
["Mori.8729", "0", "0", "0", "0"],
["TonySu.2608", "0", "0", "2", "2"],
["juniippurr.9521", "0", "0", "1", "1"],
["Mogar.8462", "2", "1", "7", "5"],
["Sentinelactual.1824", "0", "0", "0", "0"],
["Aseity.4350", "0", "0", "2", "0"],
["Gambit.8512", "2", "2", "3", "3"],
["Honorable Sage.9073", "0", "0", "1", "0"],
["StrangelyCharmed.9236", "1", "1", "5", "2"],
["Kuro Hato.9602", "0", "0", "1", "0"],
["SevenTwo.4620", "0", "0", "0", "0"],
["Nosfentu.8392", "0", "0", "0", "0"],
["Kurg.2893", "0", "0", "1", "0"],
["Nom Nommmm.9468", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["02/28/2025 23:14:59"]],		
	
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


