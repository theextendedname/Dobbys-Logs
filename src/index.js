new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "1", "1", "11", "9"],
["theextendedname.4879", "5", "4", "19", "17"],
["Batercus.6257", "2", "2", "14", "5"],
["Bloop.2831", "5", "4", "19", "16"],
["Suricatta.1029", "1", "1", "7", "7"],
["morsel.4670", "5", "5", "18", "18"],
["LiLMochaJoe.7456", "0", "0", "8", "8"],
["Kharashadora.9043", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "9", "7"],
["Beer Meister.5938", "0", "0", "0", "0"],
["ItIsAllAboutCake.6125", "5", "3", "17", "14"],
["Calgari.8671", "2", "1", "8", "4"],
["Banchou.5628", "4", "4", "15", "14"],
["Biot.7201", "2", "2", "9", "5"],
["Hikaro.1743", "1", "0", "6", "1"],
["TechnoTK.6498", "1", "1", "2", "1"],
["Ganix.1957", "5", "5", "17", "15"],
["Berticus.8167", "0", "0", "3", "1"],
["Grootella.1270", "3", "3", "12", "10"],
["Swagasarus.6150", "4", "2", "14", "2"],
["Dirddle.8524", "4", "3", "17", "9"],
["Stay Alive.2917", "3", "3", "13", "9"],
["sadmantha.6841", "3", "3", "15", "15"],
["Mori.8729", "2", "0", "8", "0"],
["JCthirteen.1985", "1", "1", "8", "4"],
["juniippurr.9521", "3", "3", "14", "13"],
["Gambit.8512", "3", "2", "8", "7"],
["Elani.1394", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "6", "6"],
["Nexle.8320", "3", "2", "11", "8"],
["Soushi.5132", "4", "0", "13", "1"],
["sachaa.8706", "4", "1", "17", "2"],
["Zugare.9032", "2", "2", "4", "3"],
["DaragangMagayon.1795", "3", "0", "8", "0"],
["takamina.9784", "3", "3", "11", "11"],
["Sglobe.4827", "5", "5", "19", "19"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "6", "0"],
["Maleficpanda.8350", "0", "0", "1", "1"],
["gferreira.1862", "1", "1", "7", "5"],
["Ayemes.5892", "1", "1", "2", "1"],
["Jarmeister.3419", "0", "0", "10", "2"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "0", "0", "2", "0"],
["Adiduh.9785", "3", "1", "10", "1"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "1", "0"],
["Ryulightorb.8407", "1", "1", "2", "2"],
["Shrimpsanity.2107", "0", "0", "1", "0"],
["MikeAlt.3460", "0", "0", "0", "0"],
["Sef.7382", "0", "0", "0", "0"],
["Raijin.8452", "0", "0", "0", "0"],
["Hiram.6972", "0", "0", "0", "0"],
["DaBMz.5724", "1", "0", "1", "0"],
["PeriWrinkleButt.8691", "1", "0", "1", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["mrhnwt.9084", "3", "1", "3", "1"],
["Talcos.9723", "0", "0", "0", "0"],
["Singe.6103", "0", "0", "0", "0"],
["Kodes.5784", "0", "0", "0", "0"],
["PolarBear.5836", "1", "1", "1", "1"],
["Kalen Keywarden.4356", "1", "0", "1", "0"],
["Arkanus.5304", "1", "1", "1", "1"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/29/2025 19:48:16"]],		
	
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


