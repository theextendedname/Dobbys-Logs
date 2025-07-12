new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "4", "3", "8", "6"],
["theextendedname.4879", "5", "5", "19", "16"],
["Batercus.6257", "4", "0", "17", "6"],
["Bloop.2831", "5", "3", "18", "14"],
["Suricatta.1029", "2", "2", "6", "6"],
["morsel.4670", "5", "5", "19", "19"],
["LiLMochaJoe.7456", "4", "4", "6", "6"],
["Kharashadora.9043", "0", "0", "3", "0"],
["KrimsonWolf.6781", "2", "1", "10", "9"],
["Beer Meister.5938", "0", "0", "2", "2"],
["ItIsAllAboutCake.6125", "4", "3", "17", "15"],
["Calgari.8671", "1", "1", "8", "4"],
["Banchou.5628", "4", "4", "6", "6"],
["Biot.7201", "1", "0", "15", "6"],
["Ity.3504", "4", "0", "15", "0"],
["Hikaro.1743", "2", "0", "5", "2"],
["TechnoTK.6498", "1", "0", "9", "6"],
["Ganix.1957", "5", "5", "16", "14"],
["Berticus.8167", "1", "0", "5", "3"],
["Grootella.1270", "3", "2", "13", "10"],
["Swagasarus.6150", "3", "0", "13", "4"],
["Dirddle.8524", "5", "3", "18", "6"],
["Stay Alive.2917", "3", "2", "5", "4"],
["sadmantha.6841", "3", "3", "16", "14"],
["Mori.8729", "1", "0", "5", "0"],
["JCthirteen.1985", "2", "0", "4", "2"],
["juniippurr.9521", "5", "4", "13", "11"],
["Mogar.8462", "0", "0", "0", "0"],
["Gambit.8512", "2", "2", "7", "6"],
["Elani.1394", "0", "0", "3", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "4", "4", "9", "9"],
["Nexle.8320", "2", "2", "9", "7"],
["Soushi.5132", "3", "0", "11", "0"],
["sachaa.8706", "5", "0", "15", "0"],
["Zugare.9032", "1", "0", "4", "3"],
["DaragangMagayon.1795", "3", "0", "8", "0"],
["takamina.9784", "3", "3", "15", "9"],
["Sglobe.4827", "5", "5", "19", "19"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "3", "0", "14", "0"],
["Maleficpanda.8350", "0", "0", "7", "4"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["gferreira.1862", "3", "1", "9", "4"],
["Ayemes.5892", "0", "0", "2", "0"],
["Jarmeister.3419", "4", "1", "10", "1"],
["Babadook.5842", "5", "4", "10", "6"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "0", "0", "2", "0"],
["LaggahGaming.5286", "0", "0", "0", "0"],
["Adiduh.9785", "3", "0", "4", "0"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "1", "0", "1", "0"],
["Ryulightorb.8407", "1", "1", "1", "1"],
["Shrimpsanity.2107", "0", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/12/2025 10:12:50"]],		
	
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


