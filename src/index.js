new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "2", "6", "4"],
["theextendedname.4879", "5", "5", "19", "16"],
["Batercus.6257", "5", "1", "17", "7"],
["Bloop.2831", "5", "3", "18", "13"],
["Suricatta.1029", "2", "2", "5", "5"],
["morsel.4670", "5", "5", "19", "19"],
["LiLMochaJoe.7456", "5", "5", "5", "5"],
["Kharashadora.9043", "0", "0", "3", "0"],
["KrimsonWolf.6781", "4", "3", "11", "10"],
["Beer Meister.5938", "0", "0", "2", "2"],
["ItIsAllAboutCake.6125", "4", "3", "16", "14"],
["Calgari.8671", "2", "1", "9", "5"],
["Banchou.5628", "5", "5", "5", "5"],
["Biot.7201", "2", "0", "16", "7"],
["Ity.3504", "4", "0", "14", "0"],
["Hikaro.1743", "2", "0", "5", "2"],
["TechnoTK.6498", "1", "0", "9", "6"],
["Ganix.1957", "5", "4", "14", "12"],
["Berticus.8167", "3", "1", "5", "3"],
["Grootella.1270", "4", "3", "13", "10"],
["Swagasarus.6150", "3", "0", "13", "4"],
["Dirddle.8524", "5", "2", "18", "5"],
["Stay Alive.2917", "4", "3", "4", "3"],
["sadmantha.6841", "3", "3", "15", "13"],
["Mori.8729", "2", "0", "6", "0"],
["JCthirteen.1985", "2", "1", "3", "2"],
["juniippurr.9521", "4", "3", "12", "9"],
["Mogar.8462", "0", "0", "0", "0"],
["Gambit.8512", "3", "3", "7", "6"],
["Elani.1394", "0", "0", "4", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "4", "4", "10", "10"],
["Nexle.8320", "2", "2", "9", "6"],
["Soushi.5132", "3", "0", "10", "0"],
["sachaa.8706", "4", "0", "14", "0"],
["Zugare.9032", "2", "1", "4", "3"],
["DaragangMagayon.1795", "2", "0", "7", "0"],
["takamina.9784", "3", "3", "15", "8"],
["Sglobe.4827", "5", "5", "19", "19"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "4", "0", "14", "0"],
["Maleficpanda.8350", "0", "0", "9", "6"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["gferreira.1862", "2", "0", "8", "3"],
["Ayemes.5892", "1", "0", "2", "0"],
["Jarmeister.3419", "4", "0", "8", "0"],
["Babadook.5842", "5", "4", "8", "4"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "1", "0", "2", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/08/2025 22:02:07"]],		
	
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


