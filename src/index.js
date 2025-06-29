new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "2", "3", "3"],
["theextendedname.4879", "6", "3", "19", "15"],
["Batercus.6257", "6", "2", "14", "8"],
["Bloop.2831", "5", "4", "17", "13"],
["Suricatta.1029", "1", "1", "5", "5"],
["morsel.4670", "6", "6", "19", "18"],
["Kharashadora.9043", "2", "0", "3", "0"],
["KrimsonWolf.6781", "3", "3", "10", "10"],
["Beer Meister.5938", "0", "0", "4", "4"],
["ItIsAllAboutCake.6125", "5", "5", "16", "12"],
["Calgari.8671", "5", "2", "7", "4"],
["Biot.7201", "6", "3", "15", "8"],
["Ity.3504", "5", "0", "10", "0"],
["Hikaro.1743", "2", "1", "5", "4"],
["TechnoTK.6498", "5", "3", "10", "8"],
["Ganix.1957", "6", "5", "9", "8"],
["Berticus.8167", "0", "0", "2", "2"],
["Grootella.1270", "4", "3", "13", "11"],
["Swagasarus.6150", "4", "1", "11", "4"],
["Dirddle.8524", "6", "2", "15", "5"],
["sadmantha.6841", "5", "4", "14", "12"],
["Mori.8729", "3", "0", "4", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "2", "2", "10", "8"],
["Gambit.8512", "1", "1", "5", "4"],
["Elani.1394", "2", "0", "7", "1"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "3", "3", "9", "9"],
["Nexle.8320", "4", "2", "8", "3"],
["Delacroix NA.4358", "3", "0", "8", "0"],
["Soushi.5132", "4", "0", "7", "0"],
["sachaa.8706", "5", "0", "9", "0"],
["Zugare.9032", "1", "1", "4", "4"],
["DaragangMagayon.1795", "3", "0", "7", "0"],
["takamina.9784", "6", "3", "15", "4"],
["Sglobe.4827", "6", "6", "18", "18"],
["Rage.3169", "0", "0", "1", "1"],
["DanDizh.8416", "5", "0", "9", "0"],
["Maleficpanda.8350", "3", "0", "11", "8"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["FRslayer.3960", "2", "0", "4", "2"],
["gferreira.1862", "4", "1", "5", "2"],
["Ayemes.5892", "1", "0", "1", "0"],
["Jarmeister.3419", "3", "0", "3", "0"],
["Babadook.5842", "2", "0", "2", "0"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["06/28/2025 22:25:24"]],		
	
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


