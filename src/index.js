new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "12", "10"],
["theextendedname.4879", "6", "4", "20", "16"],
["Batercus.6257", "4", "2", "17", "4"],
["Bloop.2831", "6", "5", "19", "15"],
["Suricatta.1029", "2", "2", "7", "7"],
["morsel.4670", "5", "5", "19", "19"],
["LiLMochaJoe.7456", "1", "1", "8", "8"],
["Kharashadora.9043", "0", "0", "1", "0"],
["KrimsonWolf.6781", "4", "3", "10", "8"],
["Beer Meister.5938", "0", "0", "0", "0"],
["ItIsAllAboutCake.6125", "5", "4", "17", "15"],
["Calgari.8671", "3", "0", "11", "4"],
["Banchou.5628", "5", "4", "12", "11"],
["Biot.7201", "4", "3", "13", "6"],
["Ity.3504", "3", "0", "15", "0"],
["Hikaro.1743", "2", "1", "6", "1"],
["TechnoTK.6498", "0", "0", "5", "2"],
["Ganix.1957", "5", "4", "18", "15"],
["Berticus.8167", "0", "0", "3", "1"],
["Grootella.1270", "4", "3", "13", "10"],
["Swagasarus.6150", "5", "1", "14", "1"],
["Dirddle.8524", "5", "3", "19", "8"],
["Stay Alive.2917", "5", "3", "11", "7"],
["sadmantha.6841", "5", "5", "16", "15"],
["Mori.8729", "3", "0", "9", "0"],
["JCthirteen.1985", "3", "1", "7", "3"],
["juniippurr.9521", "4", "4", "12", "11"],
["Mogar.8462", "0", "0", "0", "0"],
["Gambit.8512", "2", "2", "6", "6"],
["Elani.1394", "0", "0", "1", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "1", "1", "8", "8"],
["Nexle.8320", "3", "1", "11", "8"],
["Soushi.5132", "3", "1", "12", "1"],
["sachaa.8706", "5", "1", "17", "1"],
["Zugare.9032", "1", "1", "4", "3"],
["DaragangMagayon.1795", "1", "0", "7", "0"],
["takamina.9784", "2", "2", "13", "10"],
["Sglobe.4827", "6", "6", "20", "20"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "10", "0"],
["Maleficpanda.8350", "0", "0", "4", "1"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["gferreira.1862", "2", "2", "9", "5"],
["Ayemes.5892", "0", "0", "2", "0"],
["Jarmeister.3419", "2", "0", "13", "2"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "1", "0", "3", "0"],
["LaggahGaming.5286", "0", "0", "0", "0"],
["Adiduh.9785", "3", "0", "7", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/22/2025 23:57:07"]],		
	
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


