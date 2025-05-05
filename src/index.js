new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "2", "8", "8"],
["theextendedname.4879", "3", "3", "12", "11"],
["Batercus.6257", "3", "0", "8", "4"],
["Bloop.2831", "2", "1", "11", "7"],
["Suricatta.1029", "2", "2", "5", "5"],
["morsel.4670", "2", "2", "7", "7"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "0", "0", "3", "3"],
["KrimsonWolf.6781", "0", "0", "4", "4"],
["Beer Meister.5938", "1", "1", "3", "2"],
["Limoncello.9201", "0", "0", "2", "2"],
["cmdrpengu.3012", "1", "1", "5", "5"],
["ItIsAllAboutCake.6125", "2", "0", "9", "3"],
["Calgari.8671", "2", "2", "3", "3"],
["Biot.7201", "3", "1", "8", "4"],
["Ity.3504", "2", "0", "3", "0"],
["Hikaro.1743", "1", "0", "2", "1"],
["TechnoTK.6498", "1", "0", "5", "3"],
["Lompy.4613", "0", "0", "2", "2"],
["Ganix.1957", "3", "3", "9", "9"],
["Berticus.8167", "1", "0", "5", "2"],
["Grootella.1270", "3", "3", "6", "6"],
["Swagasarus.6150", "2", "2", "6", "3"],
["Dirddle.8524", "2", "2", "9", "8"],
["sadmantha.6841", "2", "1", "7", "6"],
["Lhew.1904", "0", "0", "1", "1"],
["Mori.8729", "1", "0", "1", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "2", "2", "7", "7"],
["owaine.7513", "0", "0", "2", "2"],
["Gambit.8512", "2", "2", "6", "6"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "2", "1", "5", "2"],
["DeepToot.4127", "3", "2", "7", "6"],
["Ruppi.4320", "0", "0", "1", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "3", "3", "7", "7"],
["Nexle.8320", "1", "1", "4", "2"],
["Chauncley.9140", "0", "0", "0", "0"],
["Antidextrous.3291", "0", "0", "0", "0"],
["Delacroix NA.4358", "2", "0", "3", "0"],
["Soushi.5132", "1", "0", "2", "0"],
["sachaa.8706", "0", "0", "0", "0"],
["Zugare.9032", "0", "0", "4", "4"],
["DaragangMagayon.1795", "0", "0", "0", "0"],
["takamina.9784", "0", "0", "0", "0"],
["SkraGGz.5609", "0", "0", "0", "0"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Sglobe.4827", "2", "2", "2", "2"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["05/04/2025 22:07:51"]],		
	
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


