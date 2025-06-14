new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "6", "6"],
["theextendedname.4879", "4", "4", "17", "16"],
["Batercus.6257", "3", "3", "12", "9"],
["Bloop.2831", "4", "2", "16", "12"],
["Red.6531", "0", "0", "1", "0"],
["Suricatta.1029", "1", "1", "6", "6"],
["morsel.4670", "4", "4", "12", "11"],
["Kharashadora.9043", "1", "0", "2", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "9", "8"],
["Beer Meister.5938", "0", "0", "3", "3"],
["ItIsAllAboutCake.6125", "2", "2", "12", "8"],
["Calgari.8671", "1", "1", "5", "4"],
["Biot.7201", "4", "3", "9", "8"],
["Ity.3504", "2", "0", "5", "0"],
["Hikaro.1743", "1", "1", "7", "5"],
["TechnoTK.6498", "1", "1", "6", "5"],
["Lompy.4613", "0", "0", "0", "0"],
["Ganix.1957", "1", "1", "3", "3"],
["Berticus.8167", "1", "1", "4", "3"],
["Grootella.1270", "3", "3", "13", "13"],
["Swagasarus.6150", "3", "1", "10", "1"],
["Dirddle.8524", "4", "1", "14", "8"],
["sadmantha.6841", "3", "2", "11", "9"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "1", "0", "2", "1"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "2", "1", "8", "7"],
["Gambit.8512", "1", "1", "6", "5"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "2", "0", "5", "1"],
["DeepToot.4127", "1", "1", "7", "5"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "2", "2", "6", "6"],
["Nexle.8320", "1", "0", "6", "2"],
["Delacroix NA.4358", "2", "0", "5", "1"],
["Soushi.5132", "0", "0", "2", "0"],
["sachaa.8706", "1", "0", "1", "0"],
["Zugare.9032", "0", "0", "2", "2"],
["DaragangMagayon.1795", "0", "0", "4", "0"],
["qmunster.7951", "0", "0", "0", "0"],
["takamina.9784", "3", "0", "7", "0"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Sglobe.4827", "4", "4", "15", "15"],
["Rage.3169", "0", "0", "3", "3"],
["Comixtra.5249", "0", "0", "0", "0"],
["DanDizh.8416", "1", "0", "3", "0"],
["Maleficpanda.8350", "3", "3", "8", "8"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["FRslayer.3960", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["06/14/2025 00:07:18"]],		
	
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


