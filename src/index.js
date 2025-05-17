new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "2", "6", "6"],
["theextendedname.4879", "3", "3", "9", "9"],
["Batercus.6257", "2", "2", "7", "4"],
["Bloop.2831", "3", "3", "8", "6"],
["Suricatta.1029", "1", "1", "4", "4"],
["morsel.4670", "0", "0", "4", "4"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "1", "1", "3", "3"],
["Beer Meister.5938", "1", "1", "2", "2"],
["Limoncello.9201", "0", "0", "0", "0"],
["cmdrpengu.3012", "0", "0", "3", "3"],
["ItIsAllAboutCake.6125", "2", "2", "6", "2"],
["Calgari.8671", "0", "0", "2", "2"],
["Biot.7201", "2", "2", "7", "4"],
["Ity.3504", "1", "0", "3", "0"],
["Hikaro.1743", "1", "1", "2", "1"],
["TechnoTK.6498", "2", "1", "4", "2"],
["Lompy.4613", "0", "0", "1", "1"],
["Ganix.1957", "0", "0", "4", "4"],
["Berticus.8167", "3", "2", "5", "3"],
["Grootella.1270", "2", "2", "6", "6"],
["Swagasarus.6150", "1", "0", "4", "2"],
["Dirddle.8524", "3", "2", "8", "6"],
["sadmantha.6841", "2", "2", "5", "4"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "1", "1", "2", "1"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "2", "2", "5", "5"],
["owaine.7513", "0", "0", "0", "0"],
["Gambit.8512", "2", "1", "6", "5"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "0", "0", "3", "1"],
["DeepToot.4127", "2", "2", "6", "5"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "1", "1", "5", "5"],
["Nexle.8320", "1", "1", "3", "2"],
["Chauncley.9140", "0", "0", "0", "0"],
["Antidextrous.3291", "0", "0", "0", "0"],
["Delacroix NA.4358", "1", "1", "4", "1"],
["Soushi.5132", "0", "0", "1", "0"],
["sachaa.8706", "0", "0", "0", "0"],
["Zugare.9032", "0", "0", "2", "2"],
["DaragangMagayon.1795", "1", "0", "1", "0"],
["takamina.9784", "0", "0", "0", "0"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Sglobe.4827", "3", "3", "5", "5"],
["Rage.3169", "1", "1", "1", "1"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["05/17/2025 10:28:17"]],		
	
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


