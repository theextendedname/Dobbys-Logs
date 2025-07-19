new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "4", "4", "11", "9"],
["theextendedname.4879", "5", "4", "19", "15"],
["Batercus.6257", "4", "2", "18", "6"],
["Bloop.2831", "5", "5", "18", "15"],
["Suricatta.1029", "2", "2", "7", "7"],
["morsel.4670", "4", "4", "18", "18"],
["LiLMochaJoe.7456", "2", "2", "8", "8"],
["Kharashadora.9043", "0", "0", "2", "0"],
["KrimsonWolf.6781", "3", "2", "11", "9"],
["Beer Meister.5938", "0", "0", "1", "1"],
["ItIsAllAboutCake.6125", "4", "4", "16", "15"],
["Calgari.8671", "2", "1", "10", "5"],
["Banchou.5628", "4", "3", "10", "9"],
["Biot.7201", "2", "2", "13", "6"],
["Ity.3504", "4", "0", "16", "0"],
["Hikaro.1743", "2", "1", "6", "2"],
["TechnoTK.6498", "0", "0", "6", "3"],
["Ganix.1957", "4", "3", "17", "14"],
["Berticus.8167", "0", "0", "4", "2"],
["Grootella.1270", "4", "3", "14", "10"],
["Swagasarus.6150", "4", "0", "14", "2"],
["Dirddle.8524", "5", "3", "18", "7"],
["Stay Alive.2917", "4", "2", "9", "6"],
["sadmantha.6841", "5", "5", "16", "15"],
["Mori.8729", "2", "0", "7", "0"],
["JCthirteen.1985", "1", "0", "5", "2"],
["juniippurr.9521", "4", "4", "12", "11"],
["Mogar.8462", "0", "0", "0", "0"],
["Gambit.8512", "2", "2", "6", "6"],
["Elani.1394", "0", "0", "2", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "9", "9"],
["Nexle.8320", "3", "3", "10", "8"],
["Soushi.5132", "3", "0", "11", "0"],
["sachaa.8706", "5", "0", "16", "0"],
["Zugare.9032", "0", "0", "4", "3"],
["DaragangMagayon.1795", "2", "0", "7", "0"],
["takamina.9784", "3", "3", "13", "10"],
["Sglobe.4827", "5", "5", "19", "19"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "12", "0"],
["Maleficpanda.8350", "0", "0", "5", "2"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["gferreira.1862", "2", "2", "9", "4"],
["Ayemes.5892", "0", "0", "2", "0"],
["Jarmeister.3419", "4", "2", "13", "2"],
["Babadook.5842", "4", "4", "13", "9"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "1", "0", "3", "0"],
["LaggahGaming.5286", "0", "0", "0", "0"],
["Adiduh.9785", "3", "0", "6", "0"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "1", "0"],
["Ryulightorb.8407", "0", "0", "1", "1"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/19/2025 10:20:28"]],		
	
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


