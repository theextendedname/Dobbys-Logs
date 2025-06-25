new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "2", "2"],
["theextendedname.4879", "5", "3", "18", "15"],
["Batercus.6257", "5", "3", "13", "8"],
["Bloop.2831", "4", "4", "16", "13"],
["Red.6531", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "4", "4"],
["morsel.4670", "5", "5", "18", "17"],
["Kharashadora.9043", "1", "0", "2", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "3", "3", "10", "9"],
["Beer Meister.5938", "1", "1", "4", "4"],
["ItIsAllAboutCake.6125", "4", "4", "15", "10"],
["Calgari.8671", "4", "2", "6", "4"],
["Biot.7201", "5", "2", "13", "7"],
["Ity.3504", "4", "0", "8", "0"],
["Hikaro.1743", "1", "1", "4", "4"],
["TechnoTK.6498", "3", "2", "8", "7"],
["Lompy.4613", "0", "0", "0", "0"],
["Ganix.1957", "5", "4", "7", "6"],
["Berticus.8167", "1", "1", "2", "2"],
["Grootella.1270", "3", "2", "12", "11"],
["Swagasarus.6150", "3", "2", "10", "4"],
["Dirddle.8524", "4", "2", "14", "6"],
["sadmantha.6841", "4", "4", "13", "11"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "2", "0", "3", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "3", "3", "10", "8"],
["Gambit.8512", "0", "0", "4", "3"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "1", "0", "6", "1"],
["Shrimpsanity.2107", "0", "0", "0", "0"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "3", "3", "8", "8"],
["Nexle.8320", "3", "2", "8", "3"],
["Delacroix NA.4358", "1", "0", "6", "0"],
["Soushi.5132", "3", "0", "6", "0"],
["sachaa.8706", "3", "0", "7", "0"],
["Zugare.9032", "1", "1", "3", "3"],
["DaragangMagayon.1795", "3", "0", "7", "0"],
["takamina.9784", "4", "3", "13", "4"],
["Sglobe.4827", "5", "5", "17", "17"],
["Rage.3169", "0", "0", "2", "2"],
["Comixtra.5249", "0", "0", "0", "0"],
["DanDizh.8416", "5", "0", "9", "0"],
["Maleficpanda.8350", "4", "1", "12", "9"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["FRslayer.3960", "1", "0", "3", "2"],
["gferreira.1862", "3", "1", "4", "2"],
["Jarmeister.3419", "2", "0", "2", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["06/25/2025 09:02:11"]],		
	
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


