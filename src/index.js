new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "6", "6"],
["theextendedname.4879", "5", "5", "15", "14"],
["Batercus.6257", "2", "2", "10", "7"],
["Bloop.2831", "5", "3", "14", "11"],
["Red.6531", "0", "0", "1", "0"],
["Suricatta.1029", "1", "1", "5", "5"],
["morsel.4670", "5", "4", "10", "9"],
["Kharashadora.9043", "0", "0", "1", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "3", "3", "8", "7"],
["Beer Meister.5938", "0", "0", "3", "3"],
["ItIsAllAboutCake.6125", "4", "2", "11", "7"],
["Calgari.8671", "1", "1", "5", "4"],
["Biot.7201", "4", "3", "7", "6"],
["Ity.3504", "1", "0", "4", "0"],
["Hikaro.1743", "1", "1", "6", "4"],
["TechnoTK.6498", "1", "1", "5", "4"],
["Lompy.4613", "0", "0", "0", "0"],
["Ganix.1957", "0", "0", "2", "2"],
["Berticus.8167", "0", "0", "3", "2"],
["Grootella.1270", "3", "3", "11", "11"],
["Swagasarus.6150", "2", "0", "8", "0"],
["Dirddle.8524", "3", "0", "12", "7"],
["sadmantha.6841", "3", "3", "9", "8"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "1", "0", "2", "1"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "2", "1", "7", "6"],
["Gambit.8512", "0", "0", "5", "4"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "3", "1", "4", "1"],
["DeepToot.4127", "1", "1", "6", "4"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "3", "3", "6", "6"],
["Nexle.8320", "3", "0", "6", "2"],
["Delacroix NA.4358", "1", "0", "3", "1"],
["Soushi.5132", "1", "0", "2", "0"],
["sachaa.8706", "1", "0", "1", "0"],
["Zugare.9032", "1", "1", "2", "2"],
["DaragangMagayon.1795", "1", "0", "4", "0"],
["qmunster.7951", "0", "0", "0", "0"],
["takamina.9784", "3", "0", "5", "0"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Sglobe.4827", "4", "4", "13", "13"],
["Rage.3169", "0", "0", "3", "3"],
["Comixtra.5249", "0", "0", "0", "0"],
["DanDizh.8416", "1", "0", "3", "0"],
["RDMNY.6754", "0", "0", "0", "0"],
["Maleficpanda.8350", "3", "3", "7", "7"],
["Levofloxacin.3705", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["06/10/2025 21:51:18"]],		
	
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


