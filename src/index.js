new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "7", "6"],
["theextendedname.4879", "2", "2", "12", "9"],
["Batercus.6257", "2", "1", "9", "6"],
["TreePoke.9057", "0", "0", "4", "3"],
["Red.6531", "0", "0", "3", "2"],
["Sparxs.7583", "0", "0", "1", "0"],
["Suricatta.1029", "1", "1", "5", "5"],
["morsel.4670", "2", "2", "10", "8"],
["LiLMochaJoe.7456", "2", "2", "10", "6"],
["Kharashadora.9043", "1", "0", "1", "0"],
["Fuzz.5678", "0", "0", "3", "3"],
["KrimsonWolf.6781", "1", "0", "1", "0"],
["Limoncello.9201", "0", "0", "2", "2"],
["cmdrpengu.3012", "1", "1", "9", "7"],
["ItIsAllAboutCake.6125", "0", "0", "5", "4"],
["Calgari.8671", "1", "1", "2", "2"],
["Biot.7201", "1", "1", "10", "7"],
["Ity.3504", "1", "0", "4", "0"],
["Hikaro.1743", "2", "0", "10", "4"],
["TechnoTK.6498", "0", "0", "2", "1"],
["ToraKalani.7985", "0", "0", "2", "2"],
["Lompy.4613", "1", "0", "2", "1"],
["Maru.4726", "0", "0", "0", "0"],
["ANN T UPP.5278", "1", "0", "8", "0"],
["Kisuko.6872", "0", "0", "2", "0"],
["Berticus.8167", "1", "0", "3", "1"],
["Grootella.1270", "1", "0", "9", "6"],
["Dirddle.8524", "2", "1", "12", "2"],
["Stay Alive.2917", "2", "2", "6", "3"],
["mastergaze.8247", "0", "0", "1", "1"],
["Riddah.3201", "0", "0", "4", "3"],
["Bloop.2831", "2", "0", "5", "2"],
["sadmantha.6841", "1", "0", "5", "2"],
["Lhew.1904", "1", "1", "5", "5"],
["Mori.8729", "0", "0", "0", "0"],
["TonySu.2608", "0", "0", "2", "2"],
["juniippurr.9521", "1", "0", "2", "1"],
["Mogar.8462", "2", "2", "5", "4"],
["Sentinelactual.1824", "0", "0", "0", "0"],
["owaine.7513", "1", "1", "1", "1"],
["Aseity.4350", "0", "0", "1", "0"],
["Gambit.8512", "1", "1", "4", "4"],
["StrangelyCharmed.9236", "0", "0", "2", "2"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["SevenTwo.4620", "0", "0", "0", "0"],
["Nosfentu.8392", "0", "0", "0", "0"],
["Kurg.2893", "0", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["03/15/2025 00:09:36"]],		
	
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


