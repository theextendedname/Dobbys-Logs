new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "4", "4", "13", "11"],
["theextendedname.4879", "6", "5", "20", "17"],
["Batercus.6257", "4", "2", "17", "5"],
["Bloop.2831", "6", "5", "19", "15"],
["Suricatta.1029", "3", "3", "8", "8"],
["morsel.4670", "6", "6", "19", "19"],
["LiLMochaJoe.7456", "1", "1", "8", "8"],
["Kharashadora.9043", "0", "0", "1", "0"],
["KrimsonWolf.6781", "3", "2", "10", "8"],
["Beer Meister.5938", "0", "0", "0", "0"],
["ItIsAllAboutCake.6125", "5", "3", "17", "14"],
["Calgari.8671", "3", "0", "10", "3"],
["Banchou.5628", "5", "5", "13", "12"],
["Biot.7201", "4", "3", "13", "7"],
["Ity.3504", "2", "0", "15", "0"],
["Hikaro.1743", "2", "1", "6", "1"],
["TechnoTK.6498", "0", "0", "4", "2"],
["Ganix.1957", "5", "4", "18", "15"],
["Berticus.8167", "0", "0", "3", "1"],
["Grootella.1270", "4", "3", "14", "11"],
["Swagasarus.6150", "5", "2", "15", "2"],
["Dirddle.8524", "4", "3", "18", "7"],
["Stay Alive.2917", "5", "3", "12", "8"],
["sadmantha.6841", "4", "4", "15", "14"],
["Mori.8729", "3", "0", "8", "0"],
["JCthirteen.1985", "2", "1", "7", "3"],
["juniippurr.9521", "5", "5", "13", "12"],
["Mogar.8462", "0", "0", "0", "0"],
["Gambit.8512", "3", "3", "7", "7"],
["Elani.1394", "0", "0", "1", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "1", "1", "8", "8"],
["Nexle.8320", "2", "0", "10", "7"],
["Soushi.5132", "3", "1", "12", "1"],
["sachaa.8706", "5", "1", "17", "1"],
["Zugare.9032", "2", "2", "5", "4"],
["DaragangMagayon.1795", "2", "0", "7", "0"],
["takamina.9784", "2", "2", "12", "9"],
["Sglobe.4827", "6", "6", "20", "20"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "9", "0"],
["Maleficpanda.8350", "0", "0", "3", "1"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["gferreira.1862", "2", "2", "8", "4"],
["Ayemes.5892", "0", "0", "2", "0"],
["Jarmeister.3419", "1", "0", "13", "2"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "1", "0", "3", "0"],
["LaggahGaming.5286", "0", "0", "0", "0"],
["Adiduh.9785", "2", "0", "7", "0"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "1", "0"],
["Ryulightorb.8407", "0", "0", "1", "1"],
["Shrimpsanity.2107", "0", "0", "1", "0"],
["Raijin.8452", "0", "0", "0", "0"],
["PeriWrinkleButt.8691", "0", "0", "0", "0"],
["mrhnwt.9084", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/24/2025 22:10:50"]],		
	
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


