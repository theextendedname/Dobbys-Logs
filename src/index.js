new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "2", "10", "9"],
["theextendedname.4879", "4", "3", "13", "10"],
["Batercus.6257", "4", "3", "10", "7"],
["TreePoke.9057", "0", "0", "6", "4"],
["Red.6531", "1", "1", "4", "3"],
["Sparxs.7583", "1", "0", "1", "0"],
["Suricatta.1029", "1", "1", "6", "6"],
["morsel.4670", "3", "2", "9", "7"],
["LiLMochaJoe.7456", "3", "3", "11", "7"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "2", "2", "4", "4"],
["Limoncello.9201", "0", "0", "3", "3"],
["cmdrpengu.3012", "3", "2", "9", "7"],
["ItIsAllAboutCake.6125", "2", "1", "7", "5"],
["Calgari.8671", "0", "0", "2", "1"],
["Biot.7201", "3", "2", "12", "8"],
["Ity.3504", "2", "0", "4", "0"],
["Hikaro.1743", "3", "1", "11", "5"],
["TechnoTK.6498", "2", "1", "3", "2"],
["ToraKalani.7985", "0", "0", "3", "2"],
["Lompy.4613", "1", "1", "1", "1"],
["Maru.4726", "0", "0", "0", "0"],
["ANN T UPP.5278", "3", "0", "10", "0"],
["Kisuko.6872", "1", "0", "5", "0"],
["Berticus.8167", "0", "0", "3", "1"],
["Grootella.1270", "4", "3", "10", "7"],
["Dirddle.8524", "4", "0", "11", "1"],
["Stay Alive.2917", "3", "0", "4", "1"],
["mastergaze.8247", "0", "0", "3", "2"],
["Riddah.3201", "1", "1", "6", "4"],
["Bloop.2831", "2", "1", "3", "2"],
["sadmantha.6841", "2", "1", "4", "2"],
["Lhew.1904", "1", "1", "6", "6"],
["Mori.8729", "0", "0", "0", "0"],
["TonySu.2608", "1", "1", "2", "2"],
["juniippurr.9521", "0", "0", "1", "1"],
["Mogar.8462", "2", "1", "5", "4"],
["Sentinelactual.1824", "0", "0", "0", "0"],
["Aseity.4350", "0", "0", "1", "0"],
["Gambit.8512", "0", "0", "3", "3"],
["StrangelyCharmed.9236", "0", "0", "4", "2"],
["Kuro Hato.9602", "0", "0", "1", "0"],
["SevenTwo.4620", "0", "0", "0", "0"],
["Nosfentu.8392", "0", "0", "0", "0"],
["Kurg.2893", "0", "0", "1", "0"],
["Nom Nommmm.9468", "1", "0", "1", "0"],
["Rophel.8520", "1", "0", "1", "0"],
["shmootsu.3678", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["03/07/2025 23:28:00"]],		
	
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


