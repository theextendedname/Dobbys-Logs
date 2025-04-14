new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "9", "8"],
["theextendedname.4879", "5", "4", "12", "11"],
["Batercus.6257", "2", "1", "6", "5"],
["Bloop.2831", "5", "3", "12", "7"],
["TreePoke.9057", "0", "0", "0", "0"],
["Sparxs.7583", "0", "0", "0", "0"],
["Suricatta.1029", "2", "2", "5", "5"],
["morsel.4670", "2", "2", "9", "9"],
["Ambroise Diggs.5692", "0", "0", "0", "0"],
["LiLMochaJoe.7456", "3", "3", "7", "7"],
["Kharashadora.9043", "0", "0", "1", "0"],
["Fuzz.5678", "2", "2", "4", "4"],
["KrimsonWolf.6781", "1", "1", "5", "4"],
["Beer Meister.5938", "2", "1", "3", "2"],
["Limoncello.9201", "1", "1", "2", "2"],
["cmdrpengu.3012", "2", "2", "5", "5"],
["ItIsAllAboutCake.6125", "4", "3", "10", "7"],
["Calgari.8671", "1", "1", "1", "1"],
["Biot.7201", "2", "1", "8", "6"],
["Ity.3504", "1", "0", "1", "0"],
["Hikaro.1743", "1", "1", "4", "1"],
["TechnoTK.6498", "2", "1", "5", "2"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Lompy.4613", "1", "1", "2", "1"],
["Ganix.1957", "5", "5", "10", "10"],
["Berticus.8167", "2", "1", "8", "5"],
["Grootella.1270", "1", "1", "5", "4"],
["Swagasarus.6150", "3", "1", "3", "1"],
["Dirddle.8524", "3", "3", "10", "7"],
["Stay Alive.2917", "5", "4", "12", "10"],
["mastergaze.8247", "0", "0", "1", "1"],
["Riddah.3201", "0", "0", "0", "0"],
["sadmantha.6841", "3", "3", "8", "7"],
["Lhew.1904", "1", "1", "4", "4"],
["Mori.8729", "0", "0", "2", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "4", "4", "9", "9"],
["owaine.7513", "1", "1", "5", "5"],
["Gambit.8512", "2", "2", "5", "5"],
["StrangelyCharmed.9236", "0", "0", "0", "0"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["shmootsu.3678", "0", "0", "1", "1"],
["Elani.1394", "1", "0", "2", "1"],
["DeepToot.4127", "2", "2", "4", "4"],
["Ruppi.4320", "1", "0", "1", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "3", "3", "4", "3"],
["Chii.4082", "1", "0", "2", "0"],
["Nexle.8320", "1", "1", "2", "1"],
["Chauncley.9140", "0", "0", "0", "0"],
["Antidextrous.3291", "0", "0", "0", "0"],
["Delacroix NA.4358", "0", "0", "0", "0"],
["SuspiciouslyMissingSock.2783", "1", "0", "1", "0"],
["Soushi.5132", "1", "0", "1", "0"],
["Zugare.9032", "2", "2", "2", "2"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["04/13/2025 22:09:55"]],		
	
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


