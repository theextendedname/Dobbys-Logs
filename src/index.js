new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "2", "7", "5"],
["theextendedname.4879", "5", "5", "19", "16"],
["Batercus.6257", "5", "1", "18", "7"],
["Bloop.2831", "5", "3", "18", "14"],
["Suricatta.1029", "3", "3", "6", "6"],
["morsel.4670", "5", "5", "19", "19"],
["LiLMochaJoe.7456", "5", "5", "6", "6"],
["Kharashadora.9043", "0", "0", "3", "0"],
["KrimsonWolf.6781", "3", "2", "11", "10"],
["Beer Meister.5938", "0", "0", "2", "2"],
["ItIsAllAboutCake.6125", "4", "3", "17", "15"],
["Calgari.8671", "1", "1", "8", "4"],
["Banchou.5628", "5", "5", "6", "6"],
["Biot.7201", "2", "0", "16", "7"],
["Ity.3504", "4", "0", "15", "0"],
["Hikaro.1743", "2", "0", "5", "2"],
["TechnoTK.6498", "1", "0", "9", "6"],
["Ganix.1957", "5", "5", "15", "13"],
["Berticus.8167", "2", "0", "5", "3"],
["Grootella.1270", "4", "3", "14", "11"],
["Swagasarus.6150", "4", "0", "14", "4"],
["Dirddle.8524", "5", "2", "18", "5"],
["Stay Alive.2917", "4", "3", "5", "4"],
["sadmantha.6841", "3", "3", "16", "14"],
["Mori.8729", "1", "0", "6", "0"],
["JCthirteen.1985", "2", "0", "4", "2"],
["juniippurr.9521", "5", "4", "12", "10"],
["Mogar.8462", "0", "0", "0", "0"],
["Gambit.8512", "3", "3", "7", "6"],
["Elani.1394", "0", "0", "4", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "4", "4", "10", "10"],
["Nexle.8320", "1", "1", "9", "6"],
["Soushi.5132", "2", "0", "10", "0"],
["sachaa.8706", "4", "0", "15", "0"],
["Zugare.9032", "1", "0", "4", "3"],
["DaragangMagayon.1795", "2", "0", "7", "0"],
["takamina.9784", "2", "2", "15", "8"],
["Sglobe.4827", "5", "5", "19", "19"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "4", "0", "15", "0"],
["Maleficpanda.8350", "0", "0", "8", "5"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["gferreira.1862", "2", "0", "8", "3"],
["Ayemes.5892", "1", "0", "2", "0"],
["Jarmeister.3419", "4", "0", "9", "0"],
["Babadook.5842", "5", "4", "9", "5"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "0", "0", "2", "0"],
["LaggahGaming.5286", "0", "0", "0", "0"],
["Adiduh.9785", "2", "0", "3", "0"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/10/2025 22:08:04"]],		
	
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


