new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "1", "1", "6", "6"],
["theextendedname.4879", "2", "2", "9", "8"],
["Batercus.6257", "1", "1", "5", "4"],
["Bloop.2831", "2", "1", "9", "5"],
["TreePoke.9057", "0", "0", "0", "0"],
["Sparxs.7583", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "4", "4"],
["morsel.4670", "2", "2", "6", "6"],
["Ambroise Diggs.5692", "0", "0", "0", "0"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "0", "0", "4", "4"],
["KrimsonWolf.6781", "1", "1", "4", "4"],
["Beer Meister.5938", "0", "0", "3", "2"],
["Limoncello.9201", "0", "0", "2", "2"],
["cmdrpengu.3012", "1", "1", "4", "4"],
["ItIsAllAboutCake.6125", "1", "0", "7", "3"],
["Calgari.8671", "0", "0", "1", "1"],
["Biot.7201", "1", "0", "5", "3"],
["Ity.3504", "0", "0", "1", "0"],
["Hikaro.1743", "0", "0", "1", "1"],
["TechnoTK.6498", "0", "0", "3", "2"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Lompy.4613", "0", "0", "1", "1"],
["Ganix.1957", "1", "1", "7", "7"],
["Berticus.8167", "1", "1", "5", "3"],
["Grootella.1270", "0", "0", "3", "3"],
["Swagasarus.6150", "1", "0", "4", "1"],
["Dirddle.8524", "2", "1", "7", "5"],
["Stay Alive.2917", "2", "2", "9", "8"],
["mastergaze.8247", "0", "0", "0", "0"],
["Riddah.3201", "0", "0", "0", "0"],
["sadmantha.6841", "1", "1", "5", "5"],
["Lhew.1904", "0", "0", "2", "2"],
["Mori.8729", "0", "0", "0", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "1", "1", "6", "6"],
["owaine.7513", "0", "0", "3", "3"],
["Gambit.8512", "2", "2", "4", "4"],
["StrangelyCharmed.9236", "0", "0", "0", "0"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["shmootsu.3678", "0", "0", "0", "0"],
["Elani.1394", "0", "0", "2", "1"],
["DeepToot.4127", "0", "0", "4", "4"],
["Ruppi.4320", "0", "0", "1", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "4", "3"],
["Chii.4082", "0", "0", "2", "0"],
["Nexle.8320", "1", "0", "3", "1"],
["Chauncley.9140", "0", "0", "0", "0"],
["Antidextrous.3291", "0", "0", "0", "0"],
["Delacroix NA.4358", "1", "0", "1", "0"],
["SuspiciouslyMissingSock.2783", "0", "0", "1", "0"],
["Soushi.5132", "0", "0", "1", "0"],
["Zugare.9032", "1", "1", "3", "3"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["04/24/2025 22:08:42"]],		
	
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


