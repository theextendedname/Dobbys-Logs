new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "6", "6"],
["theextendedname.4879", "5", "4", "14", "13"],
["Batercus.6257", "2", "2", "9", "6"],
["Bloop.2831", "4", "2", "13", "10"],
["Red.6531", "0", "0", "1", "0"],
["Suricatta.1029", "1", "1", "5", "5"],
["morsel.4670", "5", "4", "9", "8"],
["Kharashadora.9043", "0", "0", "1", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "7", "6"],
["Beer Meister.5938", "1", "1", "3", "3"],
["ItIsAllAboutCake.6125", "3", "1", "10", "6"],
["Calgari.8671", "2", "2", "5", "4"],
["Biot.7201", "3", "2", "6", "5"],
["Ity.3504", "0", "0", "3", "0"],
["Hikaro.1743", "1", "1", "6", "4"],
["TechnoTK.6498", "1", "1", "5", "4"],
["Lompy.4613", "0", "0", "0", "0"],
["Ganix.1957", "0", "0", "2", "2"],
["Berticus.8167", "0", "0", "3", "2"],
["Grootella.1270", "2", "2", "10", "10"],
["Swagasarus.6150", "1", "0", "7", "0"],
["Dirddle.8524", "2", "0", "11", "7"],
["sadmantha.6841", "2", "2", "8", "7"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "0", "0", "1", "1"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "2", "1", "7", "6"],
["Gambit.8512", "0", "0", "5", "4"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "2", "1", "3", "1"],
["DeepToot.4127", "1", "1", "6", "4"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "3", "3", "5", "5"],
["Nexle.8320", "2", "0", "5", "2"],
["Delacroix NA.4358", "1", "0", "3", "1"],
["Soushi.5132", "1", "0", "2", "0"],
["sachaa.8706", "0", "0", "0", "0"],
["Zugare.9032", "1", "1", "2", "2"],
["DaragangMagayon.1795", "1", "0", "4", "0"],
["qmunster.7951", "0", "0", "0", "0"],
["takamina.9784", "3", "0", "4", "0"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Sglobe.4827", "4", "4", "12", "12"],
["Rage.3169", "0", "0", "3", "3"],
["Comixtra.5249", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "2", "0"],
["RDMNY.6754", "0", "0", "0", "0"],
["Maleficpanda.8350", "3", "3", "6", "6"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["06/08/2025 21:18:22"]],		
	
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


