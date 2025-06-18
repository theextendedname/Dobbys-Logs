new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "4", "4"],
["theextendedname.4879", "5", "5", "16", "15"],
["Batercus.6257", "4", "3", "11", "7"],
["Bloop.2831", "5", "4", "15", "11"],
["Red.6531", "0", "0", "1", "0"],
["Suricatta.1029", "1", "1", "5", "5"],
["morsel.4670", "5", "5", "14", "13"],
["Kharashadora.9043", "1", "0", "2", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "3", "3", "9", "8"],
["Beer Meister.5938", "1", "1", "3", "3"],
["ItIsAllAboutCake.6125", "5", "4", "13", "8"],
["Calgari.8671", "0", "0", "5", "4"],
["Biot.7201", "5", "3", "9", "6"],
["Ity.3504", "3", "0", "5", "0"],
["Hikaro.1743", "1", "1", "6", "4"],
["TechnoTK.6498", "3", "3", "6", "6"],
["Lompy.4613", "0", "0", "0", "0"],
["Ganix.1957", "2", "2", "4", "4"],
["Berticus.8167", "1", "1", "1", "1"],
["Grootella.1270", "4", "4", "12", "12"],
["Swagasarus.6150", "4", "2", "10", "2"],
["Dirddle.8524", "5", "1", "13", "6"],
["sadmantha.6841", "5", "4", "11", "9"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "1", "0", "1", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "4", "3", "9", "7"],
["Gambit.8512", "3", "2", "6", "5"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "2", "0", "5", "1"],
["DeepToot.4127", "1", "1", "5", "3"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "1", "1", "5", "5"],
["Nexle.8320", "2", "1", "6", "2"],
["Delacroix NA.4358", "4", "0", "6", "0"],
["Soushi.5132", "2", "0", "4", "0"],
["sachaa.8706", "4", "0", "4", "0"],
["Zugare.9032", "0", "0", "2", "2"],
["DaragangMagayon.1795", "2", "0", "5", "0"],
["qmunster.7951", "0", "0", "0", "0"],
["takamina.9784", "5", "1", "9", "1"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Sglobe.4827", "5", "5", "14", "14"],
["Rage.3169", "0", "0", "2", "2"],
["Comixtra.5249", "0", "0", "0", "0"],
["DanDizh.8416", "3", "0", "5", "0"],
["Maleficpanda.8350", "3", "3", "9", "9"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["FRslayer.3960", "2", "2", "2", "2"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["06/17/2025 22:07:03"]],		
	
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


