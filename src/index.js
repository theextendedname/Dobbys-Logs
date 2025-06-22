new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "4", "4"],
["theextendedname.4879", "5", "4", "18", "16"],
["Batercus.6257", "4", "3", "13", "9"],
["Bloop.2831", "5", "5", "17", "13"],
["Red.6531", "0", "0", "1", "0"],
["Suricatta.1029", "1", "1", "6", "6"],
["morsel.4670", "5", "5", "16", "15"],
["Kharashadora.9043", "2", "0", "3", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "4", "4", "11", "10"],
["Beer Meister.5938", "2", "2", "4", "4"],
["ItIsAllAboutCake.6125", "5", "4", "15", "10"],
["Calgari.8671", "1", "1", "6", "5"],
["Biot.7201", "5", "2", "11", "7"],
["Ity.3504", "3", "0", "7", "0"],
["Hikaro.1743", "2", "2", "7", "5"],
["TechnoTK.6498", "4", "4", "7", "7"],
["Lompy.4613", "0", "0", "0", "0"],
["Ganix.1957", "3", "3", "6", "6"],
["Berticus.8167", "1", "1", "2", "2"],
["Grootella.1270", "4", "3", "14", "13"],
["Swagasarus.6150", "4", "3", "12", "4"],
["Dirddle.8524", "4", "2", "14", "7"],
["sadmantha.6841", "5", "5", "13", "11"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "0", "0", "1", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "5", "4", "11", "9"],
["Gambit.8512", "2", "1", "6", "5"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "2", "0", "6", "1"],
["DeepToot.4127", "1", "1", "5", "3"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "2", "2", "7", "7"],
["Nexle.8320", "2", "1", "7", "2"],
["Delacroix NA.4358", "3", "0", "6", "0"],
["Soushi.5132", "3", "0", "5", "0"],
["sachaa.8706", "4", "0", "5", "0"],
["Zugare.9032", "1", "1", "3", "3"],
["DaragangMagayon.1795", "3", "0", "6", "0"],
["takamina.9784", "4", "2", "10", "2"],
["Sglobe.4827", "5", "5", "16", "16"],
["Rage.3169", "0", "0", "2", "2"],
["Comixtra.5249", "0", "0", "0", "0"],
["DanDizh.8416", "4", "0", "7", "0"],
["Maleficpanda.8350", "2", "2", "10", "10"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["FRslayer.3960", "3", "2", "3", "2"],
["gferreira.1862", "2", "1", "2", "1"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["06/21/2025 21:55:34"]],		
	
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


