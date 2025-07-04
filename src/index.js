new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "4", "3", "4", "3"],
["theextendedname.4879", "5", "4", "19", "16"],
["Batercus.6257", "5", "1", "15", "8"],
["Bloop.2831", "5", "4", "18", "14"],
["Suricatta.1029", "2", "2", "5", "5"],
["morsel.4670", "5", "5", "19", "18"],
["LiLMochaJoe.7456", "2", "2", "2", "2"],
["Kharashadora.9043", "1", "0", "3", "0"],
["KrimsonWolf.6781", "3", "3", "11", "11"],
["Beer Meister.5938", "0", "0", "2", "2"],
["ItIsAllAboutCake.6125", "5", "5", "17", "14"],
["Calgari.8671", "3", "1", "8", "4"],
["Banchou.5628", "2", "2", "2", "2"],
["Biot.7201", "5", "2", "18", "9"],
["Ity.3504", "5", "0", "12", "0"],
["Hikaro.1743", "1", "0", "4", "3"],
["TechnoTK.6498", "2", "1", "9", "7"],
["Ganix.1957", "4", "3", "11", "9"],
["Berticus.8167", "2", "1", "4", "3"],
["Grootella.1270", "4", "3", "13", "11"],
["Swagasarus.6150", "4", "0", "12", "4"],
["Dirddle.8524", "5", "0", "16", "3"],
["Stay Alive.2917", "2", "2", "2", "2"],
["sadmantha.6841", "5", "4", "16", "14"],
["Mori.8729", "2", "0", "5", "0"],
["JCthirteen.1985", "2", "2", "2", "2"],
["juniippurr.9521", "1", "1", "10", "8"],
["Gambit.8512", "2", "2", "5", "4"],
["Elani.1394", "1", "0", "6", "1"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "2", "2", "8", "8"],
["Nexle.8320", "3", "2", "10", "5"],
["Soushi.5132", "3", "0", "9", "0"],
["sachaa.8706", "4", "0", "11", "0"],
["Zugare.9032", "2", "2", "4", "4"],
["DaragangMagayon.1795", "0", "0", "6", "0"],
["takamina.9784", "4", "2", "15", "6"],
["Sglobe.4827", "5", "5", "18", "18"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "4", "0", "12", "0"],
["Maleficpanda.8350", "1", "1", "10", "7"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["gferreira.1862", "2", "1", "6", "3"],
["Ayemes.5892", "2", "0", "2", "0"],
["Jarmeister.3419", "4", "0", "6", "0"],
["Babadook.5842", "5", "2", "5", "2"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "2", "0", "2", "0"],
["LaggahGaming.5286", "0", "0", "0", "0"],
["Adiduh.9785", "1", "0", "1", "0"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/03/2025 22:04:41"]],		
	
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


