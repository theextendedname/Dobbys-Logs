new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "1", "1", "7", "6"],
["theextendedname.4879", "2", "2", "10", "10"],
["Batercus.6257", "2", "2", "7", "6"],
["Bloop.2831", "2", "1", "10", "5"],
["TreePoke.9057", "0", "0", "0", "0"],
["Sparxs.7583", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "5", "5"],
["morsel.4670", "2", "2", "9", "9"],
["Ambroise Diggs.5692", "0", "0", "0", "0"],
["LiLMochaJoe.7456", "1", "1", "7", "7"],
["Kharashadora.9043", "0", "0", "1", "0"],
["Fuzz.5678", "2", "2", "4", "4"],
["KrimsonWolf.6781", "2", "2", "4", "3"],
["Beer Meister.5938", "1", "1", "1", "1"],
["Limoncello.9201", "1", "1", "1", "1"],
["cmdrpengu.3012", "1", "1", "5", "5"],
["ItIsAllAboutCake.6125", "1", "0", "6", "5"],
["Calgari.8671", "0", "0", "1", "1"],
["Biot.7201", "2", "2", "7", "6"],
["Ity.3504", "0", "0", "2", "0"],
["Hikaro.1743", "0", "0", "6", "1"],
["TechnoTK.6498", "1", "1", "4", "2"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Lompy.4613", "0", "0", "2", "1"],
["Ganix.1957", "1", "1", "5", "5"],
["Berticus.8167", "2", "1", "6", "4"],
["Grootella.1270", "2", "2", "6", "5"],
["Dirddle.8524", "2", "1", "10", "5"],
["Stay Alive.2917", "2", "2", "10", "7"],
["mastergaze.8247", "0", "0", "1", "1"],
["Riddah.3201", "0", "0", "1", "1"],
["sadmantha.6841", "1", "1", "6", "5"],
["Lhew.1904", "1", "1", "5", "5"],
["Mori.8729", "0", "0", "2", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "1", "1", "6", "5"],
["owaine.7513", "2", "2", "4", "4"],
["Gambit.8512", "0", "0", "4", "4"],
["StrangelyCharmed.9236", "0", "0", "0", "0"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["shmootsu.3678", "0", "0", "1", "1"],
["Elani.1394", "1", "1", "1", "1"],
["DeepToot.4127", "2", "2", "2", "2"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "1", "0", "1", "0"],
["Chii.4082", "0", "0", "0", "0"],
["Nexle.8320", "0", "0", "0", "0"],
["Chauncley.9140", "0", "0", "0", "0"],
["CursedHour.4251", "0", "0", "0", "0"],
["Antidextrous.3291", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["04/05/2025 00:21:44"]],		
	
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


