new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "5", "5"],
["theextendedname.4879", "5", "5", "17", "16"],
["Batercus.6257", "3", "3", "11", "8"],
["Bloop.2831", "5", "3", "16", "12"],
["Red.6531", "0", "0", "1", "0"],
["Suricatta.1029", "1", "1", "5", "5"],
["morsel.4670", "5", "5", "13", "12"],
["Kharashadora.9043", "1", "0", "2", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "9", "8"],
["Beer Meister.5938", "1", "1", "3", "3"],
["ItIsAllAboutCake.6125", "4", "3", "13", "8"],
["Calgari.8671", "1", "1", "5", "4"],
["Biot.7201", "4", "3", "8", "7"],
["Ity.3504", "3", "0", "5", "0"],
["Hikaro.1743", "1", "1", "7", "5"],
["TechnoTK.6498", "2", "2", "7", "6"],
["Lompy.4613", "0", "0", "0", "0"],
["Ganix.1957", "1", "1", "3", "3"],
["Berticus.8167", "1", "1", "3", "2"],
["Grootella.1270", "3", "3", "12", "12"],
["Swagasarus.6150", "4", "2", "11", "2"],
["Dirddle.8524", "5", "1", "14", "7"],
["sadmantha.6841", "4", "3", "12", "10"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "1", "0", "2", "1"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "4", "2", "9", "7"],
["Gambit.8512", "3", "2", "7", "5"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "2", "0", "5", "1"],
["DeepToot.4127", "1", "1", "6", "4"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "2", "2", "5", "5"],
["Nexle.8320", "1", "0", "6", "2"],
["Delacroix NA.4358", "2", "0", "5", "1"],
["Soushi.5132", "2", "0", "4", "0"],
["sachaa.8706", "3", "0", "3", "0"],
["Zugare.9032", "0", "0", "2", "2"],
["DaragangMagayon.1795", "2", "0", "5", "0"],
["qmunster.7951", "0", "0", "0", "0"],
["takamina.9784", "4", "1", "8", "1"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Sglobe.4827", "5", "5", "15", "15"],
["Rage.3169", "0", "0", "3", "3"],
["Comixtra.5249", "0", "0", "0", "0"],
["DanDizh.8416", "1", "0", "3", "0"],
["Maleficpanda.8350", "4", "4", "9", "9"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["FRslayer.3960", "1", "1", "1", "1"],
["gferreira.1862", "1", "1", "1", "1"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["06/15/2025 10:21:39"]],		
	
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


