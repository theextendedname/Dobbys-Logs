new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "4", "3", "8", "6"],
["theextendedname.4879", "4", "4", "13", "10"],
["Batercus.6257", "1", "1", "9", "6"],
["Bloop.2831", "4", "3", "8", "4"],
["TreePoke.9057", "0", "0", "1", "0"],
["Red.6531", "1", "1", "2", "2"],
["Sparxs.7583", "0", "0", "1", "0"],
["Suricatta.1029", "2", "2", "5", "5"],
["morsel.4670", "4", "4", "12", "10"],
["Ambroise Diggs.5692", "0", "0", "0", "0"],
["LiLMochaJoe.7456", "2", "2", "9", "7"],
["Kharashadora.9043", "0", "0", "1", "0"],
["Fuzz.5678", "0", "0", "2", "2"],
["KrimsonWolf.6781", "1", "1", "2", "1"],
["Beer Meister.5938", "0", "0", "0", "0"],
["Limoncello.9201", "0", "0", "1", "1"],
["cmdrpengu.3012", "1", "1", "7", "5"],
["ItIsAllAboutCake.6125", "4", "4", "7", "6"],
["Calgari.8671", "0", "0", "2", "2"],
["Biot.7201", "3", "2", "10", "7"],
["Ity.3504", "0", "0", "4", "0"],
["Hikaro.1743", "2", "0", "10", "3"],
["TechnoTK.6498", "2", "0", "4", "1"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Lompy.4613", "0", "0", "2", "1"],
["Maru.4726", "0", "0", "0", "0"],
["ANN T UPP.5278", "0", "0", "6", "0"],
["Ganix.1957", "4", "4", "4", "4"],
["Kisuko.6872", "0", "0", "2", "0"],
["Berticus.8167", "3", "3", "5", "3"],
["Grootella.1270", "1", "1", "8", "5"],
["Dirddle.8524", "4", "3", "13", "4"],
["Stay Alive.2917", "4", "3", "10", "6"],
["mastergaze.8247", "1", "1", "1", "1"],
["Riddah.3201", "0", "0", "3", "2"],
["sadmantha.6841", "3", "3", "7", "4"],
["Lhew.1904", "2", "2", "6", "6"],
["Mori.8729", "2", "0", "2", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["TonySu.2608", "0", "0", "1", "1"],
["juniippurr.9521", "4", "4", "5", "4"],
["Mogar.8462", "4", "4", "9", "8"],
["Sentinelactual.1824", "0", "0", "0", "0"],
["owaine.7513", "1", "1", "2", "2"],
["Aseity.4350", "0", "0", "0", "0"],
["Gambit.8512", "3", "3", "6", "6"],
["StrangelyCharmed.9236", "0", "0", "1", "1"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["SevenTwo.4620", "0", "0", "0", "0"],
["Nosfentu.8392", "0", "0", "0", "0"],
["Kurg.2893", "0", "0", "0", "0"],
["Nom Nommmm.9468", "0", "0", "1", "0"],
["Rophel.8520", "0", "0", "1", "0"],
["Sanoborn.6194", "0", "0", "0", "0"],
["shmootsu.3678", "1", "1", "1", "1"],
["Elani.1394", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["03/23/2025 10:11:39"]],		
	
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


