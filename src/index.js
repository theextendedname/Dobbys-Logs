new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "2", "12", "10"],
["theextendedname.4879", "6", "5", "19", "16"],
["Batercus.6257", "3", "2", "15", "5"],
["Bloop.2831", "6", "5", "19", "15"],
["Suricatta.1029", "2", "2", "7", "7"],
["morsel.4670", "6", "6", "18", "18"],
["LiLMochaJoe.7456", "0", "0", "8", "8"],
["Kharashadora.9043", "0", "0", "1", "0"],
["KrimsonWolf.6781", "2", "2", "10", "8"],
["Beer Meister.5938", "0", "0", "0", "0"],
["ItIsAllAboutCake.6125", "6", "4", "17", "14"],
["Calgari.8671", "3", "1", "9", "4"],
["Banchou.5628", "5", "5", "15", "14"],
["Biot.7201", "3", "2", "10", "5"],
["Ity.3504", "1", "0", "12", "0"],
["Hikaro.1743", "2", "0", "7", "1"],
["TechnoTK.6498", "1", "1", "3", "1"],
["Ganix.1957", "6", "6", "17", "15"],
["Berticus.8167", "0", "0", "3", "1"],
["Grootella.1270", "3", "3", "13", "10"],
["Swagasarus.6150", "5", "2", "15", "2"],
["Dirddle.8524", "4", "3", "17", "8"],
["Stay Alive.2917", "4", "3", "13", "9"],
["sadmantha.6841", "4", "4", "15", "14"],
["Mori.8729", "3", "0", "8", "0"],
["JCthirteen.1985", "3", "2", "8", "4"],
["juniippurr.9521", "5", "5", "14", "13"],
["Mogar.8462", "0", "0", "0", "0"],
["Gambit.8512", "3", "2", "8", "7"],
["Elani.1394", "0", "0", "1", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "1", "1", "6", "6"],
["Nexle.8320", "4", "1", "11", "7"],
["Soushi.5132", "5", "1", "13", "1"],
["sachaa.8706", "5", "1", "17", "1"],
["Zugare.9032", "2", "2", "4", "3"],
["DaragangMagayon.1795", "4", "0", "8", "0"],
["takamina.9784", "3", "3", "11", "10"],
["Sglobe.4827", "6", "6", "19", "19"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "7", "0"],
["Maleficpanda.8350", "0", "0", "1", "1"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["gferreira.1862", "2", "2", "8", "5"],
["Ayemes.5892", "1", "1", "3", "1"],
["Jarmeister.3419", "0", "0", "11", "2"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "0", "0", "3", "0"],
["LaggahGaming.5286", "0", "0", "0", "0"],
["Adiduh.9785", "3", "1", "9", "1"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "1", "0"],
["Ryulightorb.8407", "0", "0", "1", "1"],
["Shrimpsanity.2107", "0", "0", "1", "0"],
["MikeAlt.3460", "0", "0", "0", "0"],
["Sef.7382", "0", "0", "0", "0"],
["Raijin.8452", "0", "0", "0", "0"],
["DaBMz.5724", "1", "0", "1", "0"],
["PeriWrinkleButt.8691", "1", "0", "1", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["mrhnwt.9084", "2", "1", "2", "1"],
["Talcos.9723", "0", "0", "0", "0"],
["Singe.6103", "0", "0", "0", "0"],
["Kodes.5784", "0", "0", "0", "0"],
["PolarBear.5836", "0", "0", "0", "0"],
["Kalen Keywarden.4356", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/27/2025 10:15:29"]],		
	
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


