new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "4", "2", "6", "4"],
["theextendedname.4879", "5", "5", "19", "16"],
["Batercus.6257", "5", "1", "16", "7"],
["Bloop.2831", "5", "4", "18", "14"],
["Suricatta.1029", "2", "2", "5", "5"],
["morsel.4670", "5", "5", "19", "18"],
["LiLMochaJoe.7456", "4", "4", "4", "4"],
["Kharashadora.9043", "0", "0", "3", "0"],
["KrimsonWolf.6781", "3", "2", "11", "10"],
["Beer Meister.5938", "0", "0", "2", "2"],
["ItIsAllAboutCake.6125", "5", "4", "17", "14"],
["Calgari.8671", "3", "2", "9", "5"],
["Banchou.5628", "4", "4", "4", "4"],
["Biot.7201", "3", "1", "17", "8"],
["Ity.3504", "5", "0", "14", "0"],
["Hikaro.1743", "1", "0", "5", "3"],
["TechnoTK.6498", "1", "0", "10", "7"],
["Ganix.1957", "4", "3", "13", "11"],
["Berticus.8167", "2", "1", "4", "3"],
["Grootella.1270", "3", "2", "13", "10"],
["Swagasarus.6150", "4", "0", "14", "4"],
["Dirddle.8524", "5", "2", "18", "5"],
["Stay Alive.2917", "3", "2", "3", "2"],
["sadmantha.6841", "4", "4", "16", "14"],
["Mori.8729", "2", "0", "6", "0"],
["JCthirteen.1985", "3", "2", "3", "2"],
["juniippurr.9521", "3", "3", "11", "9"],
["Mogar.8462", "0", "0", "0", "0"],
["Gambit.8512", "3", "3", "7", "6"],
["Elani.1394", "0", "0", "5", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "3", "3", "9", "9"],
["Nexle.8320", "3", "3", "10", "6"],
["Soushi.5132", "4", "0", "11", "0"],
["sachaa.8706", "4", "0", "13", "0"],
["Zugare.9032", "2", "1", "4", "3"],
["DaragangMagayon.1795", "2", "0", "8", "0"],
["takamina.9784", "4", "4", "16", "8"],
["Sglobe.4827", "5", "5", "18", "18"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "4", "0", "13", "0"],
["Maleficpanda.8350", "1", "1", "9", "6"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["gferreira.1862", "3", "1", "8", "3"],
["Ayemes.5892", "1", "0", "2", "0"],
["Jarmeister.3419", "5", "0", "8", "0"],
["Babadook.5842", "5", "3", "7", "3"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "1", "0", "2", "0"],
["LaggahGaming.5286", "0", "0", "0", "0"],
["Adiduh.9785", "3", "0", "3", "0"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "0", "0"],
["Ryulightorb.8407", "1", "1", "1", "1"],
["Shrimpsanity.2107", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/06/2025 21:48:56"]],		
	
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


