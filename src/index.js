new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "2", "7", "7"],
["theextendedname.4879", "3", "3", "10", "9"],
["Batercus.6257", "2", "2", "6", "5"],
["Bloop.2831", "3", "2", "10", "6"],
["Sparxs.7583", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "4", "4"],
["morsel.4670", "2", "2", "6", "6"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "0", "0", "4", "4"],
["KrimsonWolf.6781", "2", "2", "5", "5"],
["Beer Meister.5938", "0", "0", "3", "2"],
["Limoncello.9201", "0", "0", "2", "2"],
["cmdrpengu.3012", "2", "2", "5", "5"],
["ItIsAllAboutCake.6125", "2", "0", "8", "3"],
["Calgari.8671", "0", "0", "1", "1"],
["Biot.7201", "2", "1", "6", "4"],
["Ity.3504", "0", "0", "1", "0"],
["Hikaro.1743", "0", "0", "1", "1"],
["TechnoTK.6498", "1", "1", "4", "3"],
["Lompy.4613", "1", "1", "2", "2"],
["Ganix.1957", "1", "1", "7", "7"],
["Berticus.8167", "1", "1", "5", "3"],
["Grootella.1270", "1", "1", "4", "4"],
["Swagasarus.6150", "1", "0", "4", "1"],
["Dirddle.8524", "3", "2", "8", "6"],
["sadmantha.6841", "1", "1", "5", "5"],
["Lhew.1904", "0", "0", "2", "2"],
["Mori.8729", "0", "0", "0", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "1", "1", "6", "6"],
["owaine.7513", "0", "0", "3", "3"],
["Gambit.8512", "2", "2", "4", "4"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["shmootsu.3678", "0", "0", "0", "0"],
["Elani.1394", "1", "0", "3", "1"],
["DeepToot.4127", "1", "1", "5", "5"],
["Ruppi.4320", "0", "0", "1", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "1", "1", "5", "4"],
["Chii.4082", "0", "0", "2", "0"],
["Nexle.8320", "1", "0", "3", "1"],
["Chauncley.9140", "0", "0", "0", "0"],
["Antidextrous.3291", "0", "0", "0", "0"],
["Delacroix NA.4358", "1", "0", "1", "0"],
["SuspiciouslyMissingSock.2783", "0", "0", "1", "0"],
["Soushi.5132", "0", "0", "1", "0"],
["Zugare.9032", "2", "2", "4", "4"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["04/26/2025 00:01:10"]],		
	
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


