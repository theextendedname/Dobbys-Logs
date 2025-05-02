new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "8", "8"],
["theextendedname.4879", "4", "4", "12", "11"],
["Batercus.6257", "4", "2", "8", "5"],
["Bloop.2831", "4", "2", "12", "7"],
["Suricatta.1029", "3", "3", "6", "6"],
["morsel.4670", "2", "2", "7", "7"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "0", "0", "4", "4"],
["KrimsonWolf.6781", "2", "2", "5", "5"],
["Beer Meister.5938", "0", "0", "3", "2"],
["Limoncello.9201", "0", "0", "2", "2"],
["cmdrpengu.3012", "3", "3", "6", "6"],
["ItIsAllAboutCake.6125", "3", "0", "10", "3"],
["Calgari.8671", "1", "1", "2", "2"],
["Biot.7201", "4", "2", "8", "5"],
["Ity.3504", "2", "0", "3", "0"],
["Hikaro.1743", "0", "0", "1", "1"],
["TechnoTK.6498", "2", "1", "5", "3"],
["Lompy.4613", "1", "1", "2", "2"],
["Ganix.1957", "2", "2", "9", "9"],
["Berticus.8167", "2", "1", "6", "3"],
["Grootella.1270", "3", "3", "6", "6"],
["Swagasarus.6150", "2", "2", "6", "3"],
["Dirddle.8524", "4", "4", "10", "8"],
["sadmantha.6841", "2", "1", "7", "6"],
["Lhew.1904", "0", "0", "2", "2"],
["Mori.8729", "1", "0", "1", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "3", "3", "8", "8"],
["owaine.7513", "0", "0", "3", "3"],
["Gambit.8512", "3", "3", "6", "6"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "2", "0", "4", "1"],
["DeepToot.4127", "3", "2", "7", "6"],
["Ruppi.4320", "0", "0", "1", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "3", "3", "7", "6"],
["Nexle.8320", "1", "1", "4", "2"],
["Chauncley.9140", "0", "0", "0", "0"],
["Antidextrous.3291", "0", "0", "0", "0"],
["Delacroix NA.4358", "3", "0", "3", "0"],
["Soushi.5132", "1", "0", "2", "0"],
["sachaa.8706", "0", "0", "0", "0"],
["Zugare.9032", "2", "2", "4", "4"],
["DaragangMagayon.1795", "0", "0", "0", "0"],
["takamina.9784", "0", "0", "0", "0"],
["SkraGGz.5609", "0", "0", "0", "0"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Sglobe.4827", "1", "1", "1", "1"],
["Rage.3169", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["05/01/2025 22:13:25"]],		
	
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


