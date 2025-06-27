new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "1", "1", "3", "3"],
["theextendedname.4879", "6", "4", "19", "16"],
["Batercus.6257", "6", "3", "14", "8"],
["Bloop.2831", "5", "5", "17", "14"],
["Red.6531", "0", "0", "0", "0"],
["Suricatta.1029", "2", "2", "5", "5"],
["morsel.4670", "6", "6", "19", "18"],
["Kharashadora.9043", "1", "0", "2", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "3", "3", "10", "9"],
["Beer Meister.5938", "1", "1", "4", "4"],
["ItIsAllAboutCake.6125", "5", "5", "16", "11"],
["Calgari.8671", "4", "2", "6", "4"],
["Biot.7201", "6", "3", "14", "8"],
["Ity.3504", "5", "0", "9", "0"],
["Hikaro.1743", "1", "1", "4", "4"],
["TechnoTK.6498", "4", "3", "9", "8"],
["Lompy.4613", "0", "0", "0", "0"],
["Ganix.1957", "6", "5", "8", "7"],
["Berticus.8167", "1", "1", "2", "2"],
["Grootella.1270", "4", "3", "13", "12"],
["Swagasarus.6150", "4", "2", "11", "4"],
["Dirddle.8524", "5", "2", "15", "6"],
["sadmantha.6841", "5", "5", "14", "12"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "2", "0", "3", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "3", "3", "10", "8"],
["Gambit.8512", "1", "1", "5", "4"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "1", "0", "6", "1"],
["Shrimpsanity.2107", "0", "0", "0", "0"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "4", "4", "9", "9"],
["Nexle.8320", "3", "2", "8", "3"],
["Delacroix NA.4358", "2", "0", "7", "0"],
["Soushi.5132", "3", "0", "6", "0"],
["sachaa.8706", "4", "0", "8", "0"],
["Zugare.9032", "2", "2", "4", "4"],
["DaragangMagayon.1795", "3", "0", "7", "0"],
["takamina.9784", "5", "3", "14", "4"],
["Sglobe.4827", "6", "6", "18", "18"],
["Rage.3169", "0", "0", "2", "2"],
["Comixtra.5249", "0", "0", "0", "0"],
["DanDizh.8416", "5", "0", "9", "0"],
["Maleficpanda.8350", "4", "1", "12", "9"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["FRslayer.3960", "1", "0", "3", "2"],
["gferreira.1862", "3", "1", "4", "2"],
["Jarmeister.3419", "2", "0", "2", "0"],
["Babadook.5842", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["06/26/2025 23:40:21"]],		
	
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


