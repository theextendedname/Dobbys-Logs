new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "1", "1", "7", "7"],
["theextendedname.4879", "3", "3", "10", "10"],
["Batercus.6257", "2", "2", "9", "6"],
["Bloop.2831", "3", "2", "9", "6"],
["Suricatta.1029", "1", "1", "5", "5"],
["morsel.4670", "0", "0", "3", "3"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "5", "5"],
["Beer Meister.5938", "0", "0", "2", "2"],
["cmdrpengu.3012", "0", "0", "3", "3"],
["ItIsAllAboutCake.6125", "2", "2", "6", "3"],
["Calgari.8671", "2", "2", "4", "4"],
["Biot.7201", "1", "1", "8", "5"],
["Ity.3504", "0", "0", "3", "0"],
["Hikaro.1743", "2", "1", "4", "2"],
["TechnoTK.6498", "2", "1", "5", "3"],
["Lompy.4613", "0", "0", "1", "1"],
["Ganix.1957", "1", "1", "4", "4"],
["Berticus.8167", "1", "1", "5", "3"],
["Grootella.1270", "2", "2", "8", "8"],
["Swagasarus.6150", "3", "0", "5", "2"],
["Dirddle.8524", "3", "3", "9", "8"],
["sadmantha.6841", "2", "2", "5", "4"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "1", "1", "2", "1"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "2", "2", "6", "6"],
["Gambit.8512", "2", "1", "6", "5"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "0", "0", "3", "1"],
["DeepToot.4127", "0", "0", "6", "5"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "5", "5"],
["Nexle.8320", "1", "1", "2", "2"],
["Delacroix NA.4358", "1", "0", "5", "1"],
["Soushi.5132", "0", "0", "1", "0"],
["sachaa.8706", "0", "0", "0", "0"],
["Zugare.9032", "0", "0", "2", "2"],
["DaragangMagayon.1795", "0", "0", "1", "0"],
["takamina.9784", "0", "0", "0", "0"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Sglobe.4827", "2", "2", "6", "6"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["05/24/2025 00:03:57"]],		
	
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


