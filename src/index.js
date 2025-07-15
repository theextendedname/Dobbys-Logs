new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "9", "7"],
["theextendedname.4879", "5", "4", "19", "15"],
["Batercus.6257", "3", "0", "16", "4"],
["Bloop.2831", "5", "4", "18", "15"],
["Suricatta.1029", "2", "2", "6", "6"],
["morsel.4670", "4", "4", "18", "18"],
["LiLMochaJoe.7456", "3", "3", "7", "7"],
["Kharashadora.9043", "0", "0", "2", "0"],
["KrimsonWolf.6781", "1", "1", "9", "8"],
["Beer Meister.5938", "0", "0", "2", "2"],
["ItIsAllAboutCake.6125", "4", "4", "17", "16"],
["Calgari.8671", "1", "1", "9", "5"],
["Banchou.5628", "3", "3", "7", "7"],
["Biot.7201", "1", "0", "13", "4"],
["Ity.3504", "4", "0", "15", "0"],
["Hikaro.1743", "2", "0", "5", "1"],
["TechnoTK.6498", "0", "0", "8", "5"],
["Ganix.1957", "5", "5", "17", "15"],
["Berticus.8167", "1", "0", "4", "2"],
["Grootella.1270", "3", "3", "12", "9"],
["Swagasarus.6150", "2", "0", "12", "3"],
["Dirddle.8524", "4", "2", "17", "6"],
["Stay Alive.2917", "3", "2", "6", "4"],
["sadmantha.6841", "4", "4", "16", "15"],
["Mori.8729", "1", "0", "6", "0"],
["JCthirteen.1985", "1", "0", "4", "2"],
["juniippurr.9521", "4", "3", "12", "11"],
["Mogar.8462", "0", "0", "0", "0"],
["Gambit.8512", "0", "0", "5", "5"],
["Elani.1394", "0", "0", "2", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "2", "2", "9", "9"],
["Nexle.8320", "3", "3", "11", "9"],
["Soushi.5132", "3", "0", "12", "0"],
["sachaa.8706", "5", "0", "16", "0"],
["Zugare.9032", "0", "0", "4", "3"],
["DaragangMagayon.1795", "2", "0", "8", "0"],
["takamina.9784", "2", "2", "14", "10"],
["Sglobe.4827", "5", "5", "19", "19"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "2", "0", "14", "0"],
["Maleficpanda.8350", "0", "0", "6", "3"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["gferreira.1862", "1", "1", "9", "4"],
["Ayemes.5892", "0", "0", "2", "0"],
["Jarmeister.3419", "4", "2", "12", "2"],
["Babadook.5842", "5", "5", "12", "8"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "0", "0", "2", "0"],
["LaggahGaming.5286", "0", "0", "0", "0"],
["Adiduh.9785", "2", "0", "5", "0"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/15/2025 10:02:13"]],		
	
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


