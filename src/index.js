new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "1", "1", "7", "6"],
["theextendedname.4879", "3", "3", "12", "9"],
["Batercus.6257", "2", "1", "8", "5"],
["TreePoke.9057", "0", "0", "3", "2"],
["Red.6531", "1", "1", "3", "3"],
["Sparxs.7583", "0", "0", "1", "0"],
["Suricatta.1029", "2", "2", "5", "5"],
["morsel.4670", "3", "3", "10", "8"],
["LiLMochaJoe.7456", "3", "3", "10", "6"],
["Kharashadora.9043", "1", "0", "1", "0"],
["Fuzz.5678", "0", "0", "3", "3"],
["KrimsonWolf.6781", "1", "0", "1", "0"],
["Limoncello.9201", "0", "0", "2", "2"],
["cmdrpengu.3012", "1", "1", "8", "6"],
["ItIsAllAboutCake.6125", "1", "1", "5", "4"],
["Calgari.8671", "1", "1", "2", "2"],
["Biot.7201", "2", "2", "10", "7"],
["Ity.3504", "1", "0", "4", "0"],
["Hikaro.1743", "3", "0", "10", "4"],
["TechnoTK.6498", "1", "0", "3", "1"],
["ToraKalani.7985", "0", "0", "1", "1"],
["Lompy.4613", "1", "0", "2", "1"],
["Maru.4726", "0", "0", "0", "0"],
["ANN T UPP.5278", "1", "0", "7", "0"],
["Ganix.1957", "1", "1", "1", "1"],
["Kisuko.6872", "0", "0", "2", "0"],
["Berticus.8167", "2", "1", "3", "1"],
["Grootella.1270", "1", "0", "8", "5"],
["Dirddle.8524", "3", "2", "12", "3"],
["Stay Alive.2917", "3", "2", "7", "3"],
["mastergaze.8247", "0", "0", "1", "1"],
["Riddah.3201", "0", "0", "4", "3"],
["Bloop.2831", "3", "1", "6", "3"],
["sadmantha.6841", "2", "1", "6", "3"],
["Lhew.1904", "2", "2", "5", "5"],
["Mori.8729", "1", "0", "1", "0"],
["TonySu.2608", "0", "0", "1", "1"],
["juniippurr.9521", "2", "1", "2", "1"],
["Mogar.8462", "3", "3", "6", "5"],
["Sentinelactual.1824", "0", "0", "0", "0"],
["owaine.7513", "2", "2", "2", "2"],
["Aseity.4350", "0", "0", "1", "0"],
["Gambit.8512", "2", "2", "4", "4"],
["StrangelyCharmed.9236", "0", "0", "2", "2"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["SevenTwo.4620", "0", "0", "0", "0"],
["Nosfentu.8392", "0", "0", "0", "0"],
["Kurg.2893", "0", "0", "0", "0"],
["Nom Nommmm.9468", "0", "0", "1", "0"],
["Rophel.8520", "0", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["03/16/2025 21:55:25"]],		
	
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


