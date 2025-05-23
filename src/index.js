new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "7", "7"],
["theextendedname.4879", "4", "4", "9", "9"],
["Batercus.6257", "3", "3", "8", "5"],
["Bloop.2831", "4", "3", "8", "5"],
["Suricatta.1029", "2", "2", "5", "5"],
["morsel.4670", "0", "0", "3", "3"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "4", "4"],
["Beer Meister.5938", "1", "1", "2", "2"],
["cmdrpengu.3012", "0", "0", "3", "3"],
["ItIsAllAboutCake.6125", "2", "2", "5", "2"],
["Calgari.8671", "1", "1", "3", "3"],
["Biot.7201", "3", "3", "8", "5"],
["Ity.3504", "1", "0", "3", "0"],
["Hikaro.1743", "2", "1", "3", "1"],
["TechnoTK.6498", "2", "1", "4", "2"],
["Lompy.4613", "0", "0", "1", "1"],
["Ganix.1957", "1", "1", "4", "4"],
["Berticus.8167", "3", "2", "5", "3"],
["Grootella.1270", "3", "3", "7", "7"],
["Swagasarus.6150", "2", "0", "4", "2"],
["Dirddle.8524", "4", "3", "8", "7"],
["sadmantha.6841", "2", "2", "4", "3"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "1", "1", "2", "1"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "3", "3", "6", "6"],
["Gambit.8512", "3", "2", "6", "5"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "0", "0", "3", "1"],
["DeepToot.4127", "2", "2", "6", "5"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "1", "1", "5", "5"],
["Nexle.8320", "1", "1", "2", "2"],
["Delacroix NA.4358", "2", "1", "5", "1"],
["Soushi.5132", "0", "0", "1", "0"],
["sachaa.8706", "0", "0", "0", "0"],
["Zugare.9032", "0", "0", "2", "2"],
["DaragangMagayon.1795", "1", "0", "1", "0"],
["takamina.9784", "0", "0", "0", "0"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Sglobe.4827", "4", "4", "6", "6"],
["Rage.3169", "1", "1", "1", "1"],
["DanDizh.8416", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["05/22/2025 22:17:58"]],		
	
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


