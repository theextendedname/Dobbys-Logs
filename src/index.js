new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "8", "7"],
["theextendedname.4879", "3", "3", "10", "10"],
["Batercus.6257", "2", "2", "6", "5"],
["Bloop.2831", "3", "2", "10", "6"],
["TreePoke.9057", "0", "0", "0", "0"],
["Sparxs.7583", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "4", "4"],
["morsel.4670", "3", "3", "9", "9"],
["Ambroise Diggs.5692", "0", "0", "0", "0"],
["LiLMochaJoe.7456", "1", "1", "6", "6"],
["Kharashadora.9043", "0", "0", "1", "0"],
["Fuzz.5678", "2", "2", "3", "3"],
["KrimsonWolf.6781", "2", "2", "4", "3"],
["Beer Meister.5938", "1", "1", "1", "1"],
["Limoncello.9201", "2", "2", "2", "2"],
["cmdrpengu.3012", "1", "1", "4", "4"],
["ItIsAllAboutCake.6125", "3", "1", "7", "5"],
["Calgari.8671", "0", "0", "1", "1"],
["Biot.7201", "2", "2", "7", "6"],
["Ity.3504", "1", "0", "2", "0"],
["Hikaro.1743", "0", "0", "5", "1"],
["TechnoTK.6498", "1", "1", "4", "2"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Lompy.4613", "0", "0", "2", "1"],
["Ganix.1957", "2", "2", "6", "6"],
["Berticus.8167", "3", "1", "7", "4"],
["Grootella.1270", "2", "2", "5", "4"],
["Swagasarus.6150", "0", "0", "0", "0"],
["Dirddle.8524", "2", "1", "9", "5"],
["Stay Alive.2917", "3", "3", "10", "8"],
["mastergaze.8247", "0", "0", "1", "1"],
["Riddah.3201", "0", "0", "0", "0"],
["sadmantha.6841", "2", "2", "7", "6"],
["Lhew.1904", "1", "1", "4", "4"],
["Mori.8729", "0", "0", "2", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "2", "2", "7", "6"],
["owaine.7513", "2", "2", "4", "4"],
["Gambit.8512", "1", "1", "5", "5"],
["StrangelyCharmed.9236", "0", "0", "0", "0"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["shmootsu.3678", "0", "0", "1", "1"],
["Elani.1394", "1", "1", "1", "1"],
["DeepToot.4127", "2", "2", "2", "2"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "1", "0", "1", "0"],
["Chii.4082", "2", "0", "2", "0"],
["Nexle.8320", "2", "1", "2", "1"],
["Chauncley.9140", "0", "0", "0", "0"],
["Antidextrous.3291", "0", "0", "0", "0"],
["Delacroix NA.4358", "0", "0", "0", "0"],
["SuspiciouslyMissingSock.2783", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["04/06/2025 10:13:24"]],		
	
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


