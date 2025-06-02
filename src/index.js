new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "7", "7"],
["theextendedname.4879", "5", "4", "11", "10"],
["Batercus.6257", "4", "1", "9", "5"],
["Bloop.2831", "4", "4", "9", "8"],
["Red.6531", "1", "0", "1", "0"],
["Suricatta.1029", "2", "2", "4", "4"],
["morsel.4670", "5", "5", "6", "6"],
["Kharashadora.9043", "1", "0", "1", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "1", "5", "4"],
["Beer Meister.5938", "2", "2", "4", "4"],
["ItIsAllAboutCake.6125", "4", "2", "7", "5"],
["Calgari.8671", "2", "1", "5", "4"],
["Biot.7201", "0", "0", "4", "3"],
["Ity.3504", "2", "0", "3", "0"],
["Hikaro.1743", "2", "1", "6", "3"],
["TechnoTK.6498", "1", "1", "4", "3"],
["Lompy.4613", "0", "0", "0", "0"],
["Ganix.1957", "1", "1", "3", "3"],
["Berticus.8167", "0", "0", "3", "2"],
["Grootella.1270", "4", "4", "9", "9"],
["Swagasarus.6150", "3", "0", "6", "0"],
["Dirddle.8524", "4", "3", "9", "7"],
["sadmantha.6841", "3", "2", "6", "5"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "0", "0", "1", "1"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "2", "2", "5", "5"],
["Gambit.8512", "2", "2", "5", "4"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "1", "0", "2", "1"],
["DeepToot.4127", "3", "1", "6", "4"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "2", "2", "4", "4"],
["Nexle.8320", "2", "1", "3", "2"],
["Delacroix NA.4358", "0", "0", "2", "1"],
["Soushi.5132", "1", "0", "1", "0"],
["sachaa.8706", "0", "0", "0", "0"],
["Zugare.9032", "1", "1", "1", "1"],
["DaragangMagayon.1795", "2", "0", "3", "0"],
["qmunster.7951", "0", "0", "0", "0"],
["takamina.9784", "2", "0", "2", "0"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Sglobe.4827", "5", "5", "10", "10"],
["Rage.3169", "2", "2", "3", "3"],
["Comixtra.5249", "0", "0", "0", "0"],
["DanDizh.8416", "2", "0", "2", "0"],
["PaleWenis.7326", "0", "0", "0", "0"],
["Maleficpanda.8350", "4", "4", "4", "4"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["06/01/2025 21:59:17"]],		
	
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


