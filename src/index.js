new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "1", "6", "4"],
["theextendedname.4879", "3", "3", "11", "8"],
["Batercus.6257", "2", "2", "9", "6"],
["Bloop.2831", "3", "1", "6", "2"],
["TreePoke.9057", "0", "0", "1", "0"],
["Red.6531", "1", "1", "2", "2"],
["Sparxs.7583", "0", "0", "1", "0"],
["Suricatta.1029", "2", "2", "5", "5"],
["morsel.4670", "3", "3", "10", "8"],
["Ambroise Diggs.5692", "0", "0", "0", "0"],
["LiLMochaJoe.7456", "3", "3", "9", "7"],
["Kharashadora.9043", "1", "0", "1", "0"],
["Fuzz.5678", "0", "0", "2", "2"],
["KrimsonWolf.6781", "2", "1", "2", "1"],
["Limoncello.9201", "0", "0", "1", "1"],
["cmdrpengu.3012", "2", "2", "7", "5"],
["ItIsAllAboutCake.6125", "2", "2", "5", "4"],
["Calgari.8671", "0", "0", "2", "2"],
["Biot.7201", "3", "3", "9", "7"],
["Ity.3504", "0", "0", "4", "0"],
["Hikaro.1743", "3", "0", "10", "3"],
["TechnoTK.6498", "1", "0", "3", "1"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Lompy.4613", "1", "0", "2", "1"],
["Maru.4726", "0", "0", "0", "0"],
["ANN T UPP.5278", "0", "0", "6", "0"],
["Ganix.1957", "2", "2", "2", "2"],
["Kisuko.6872", "0", "0", "2", "0"],
["Berticus.8167", "2", "1", "3", "1"],
["Grootella.1270", "2", "1", "8", "5"],
["Dirddle.8524", "3", "1", "11", "2"],
["Stay Alive.2917", "3", "2", "8", "4"],
["mastergaze.8247", "1", "1", "1", "1"],
["Riddah.3201", "0", "0", "3", "2"],
["sadmantha.6841", "2", "1", "5", "2"],
["Lhew.1904", "2", "2", "6", "6"],
["Mori.8729", "1", "0", "1", "0"],
["TonySu.2608", "0", "0", "1", "1"],
["juniippurr.9521", "2", "2", "3", "2"],
["Mogar.8462", "3", "3", "7", "6"],
["Sentinelactual.1824", "0", "0", "0", "0"],
["owaine.7513", "2", "2", "2", "2"],
["Aseity.4350", "0", "0", "0", "0"],
["Gambit.8512", "2", "2", "5", "5"],
["StrangelyCharmed.9236", "0", "0", "1", "1"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["SevenTwo.4620", "0", "0", "0", "0"],
["Nosfentu.8392", "0", "0", "0", "0"],
["Kurg.2893", "0", "0", "0", "0"],
["Nom Nommmm.9468", "0", "0", "1", "0"],
["Rophel.8520", "0", "0", "1", "0"],
["shmootsu.3678", "1", "1", "1", "1"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["03/20/2025 23:22:18"]],		
	
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


