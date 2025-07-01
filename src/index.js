new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "2", "3", "2"],
["theextendedname.4879", "6", "5", "19", "15"],
["Batercus.6257", "5", "1", "14", "8"],
["Bloop.2831", "5", "4", "17", "13"],
["Suricatta.1029", "1", "1", "4", "4"],
["morsel.4670", "6", "6", "19", "18"],
["Kharashadora.9043", "1", "0", "3", "0"],
["KrimsonWolf.6781", "2", "2", "9", "9"],
["Beer Meister.5938", "0", "0", "3", "3"],
["ItIsAllAboutCake.6125", "5", "5", "16", "13"],
["Calgari.8671", "4", "1", "8", "5"],
["Biot.7201", "5", "3", "16", "9"],
["Ity.3504", "5", "0", "10", "0"],
["Hikaro.1743", "1", "0", "4", "3"],
["TechnoTK.6498", "3", "2", "9", "7"],
["Ganix.1957", "4", "3", "9", "8"],
["Berticus.8167", "0", "0", "2", "2"],
["Grootella.1270", "3", "2", "11", "9"],
["Swagasarus.6150", "4", "0", "11", "4"],
["Dirddle.8524", "5", "0", "14", "3"],
["sadmantha.6841", "5", "4", "15", "13"],
["Mori.8729", "3", "0", "5", "0"],
["JCthirteen.1985", "2", "2", "2", "2"],
["juniippurr.9521", "1", "1", "9", "7"],
["Gambit.8512", "1", "1", "4", "3"],
["Elani.1394", "1", "0", "6", "1"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "2", "2", "8", "8"],
["Nexle.8320", "4", "3", "10", "5"],
["Soushi.5132", "4", "0", "9", "0"],
["sachaa.8706", "5", "0", "11", "0"],
["Zugare.9032", "1", "1", "3", "3"],
["DaragangMagayon.1795", "1", "0", "6", "0"],
["takamina.9784", "6", "3", "16", "6"],
["Sglobe.4827", "6", "6", "18", "18"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "4", "0", "10", "0"],
["Maleficpanda.8350", "3", "1", "11", "8"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["FRslayer.3960", "3", "0", "6", "2"],
["gferreira.1862", "3", "1", "6", "3"],
["Ayemes.5892", "1", "0", "1", "0"],
["Jarmeister.3419", "5", "0", "5", "0"],
["Babadook.5842", "4", "1", "4", "1"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "2", "0", "2", "0"],
["LaggahGaming.5286", "0", "0", "0", "0"],
["Adiduh.9785", "1", "0", "1", "0"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/01/2025 15:05:50"]],		
	
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


