new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "3", "3"],
["theextendedname.4879", "5", "3", "18", "15"],
["Batercus.6257", "5", "2", "13", "7"],
["Bloop.2831", "5", "5", "17", "14"],
["Red.6531", "0", "0", "1", "0"],
["Suricatta.1029", "1", "1", "5", "5"],
["morsel.4670", "5", "5", "18", "17"],
["Kharashadora.9043", "1", "0", "3", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "3", "3", "9", "8"],
["Beer Meister.5938", "1", "1", "4", "4"],
["ItIsAllAboutCake.6125", "5", "5", "16", "11"],
["Calgari.8671", "3", "2", "6", "4"],
["Biot.7201", "5", "1", "12", "6"],
["Ity.3504", "3", "0", "8", "0"],
["Hikaro.1743", "1", "1", "5", "4"],
["TechnoTK.6498", "4", "3", "8", "7"],
["Lompy.4613", "0", "0", "0", "0"],
["Ganix.1957", "4", "3", "7", "6"],
["Berticus.8167", "1", "1", "2", "2"],
["Grootella.1270", "3", "2", "12", "11"],
["Swagasarus.6150", "2", "2", "10", "4"],
["Dirddle.8524", "4", "2", "14", "6"],
["sadmantha.6841", "5", "5", "14", "12"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "2", "0", "3", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "3", "3", "10", "8"],
["Gambit.8512", "0", "0", "5", "4"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "1", "0", "6", "1"],
["DeepToot.4127", "0", "0", "5", "3"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "2", "2", "7", "7"],
["Nexle.8320", "4", "3", "9", "4"],
["Delacroix NA.4358", "1", "0", "5", "0"],
["Soushi.5132", "3", "0", "7", "0"],
["sachaa.8706", "4", "0", "7", "0"],
["Zugare.9032", "1", "1", "3", "3"],
["DaragangMagayon.1795", "3", "0", "8", "0"],
["takamina.9784", "4", "3", "12", "4"],
["Sglobe.4827", "5", "5", "17", "17"],
["Rage.3169", "0", "0", "2", "2"],
["Comixtra.5249", "0", "0", "0", "0"],
["DanDizh.8416", "5", "0", "9", "0"],
["Maleficpanda.8350", "3", "1", "12", "10"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["FRslayer.3960", "2", "1", "3", "2"],
["gferreira.1862", "3", "1", "4", "2"],
["Jarmeister.3419", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["06/24/2025 19:21:22"]],		
	
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


