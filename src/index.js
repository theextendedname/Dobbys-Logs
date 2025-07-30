new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "1", "1", "10", "9"],
["theextendedname.4879", "4", "4", "18", "16"],
["Batercus.6257", "3", "2", "14", "5"],
["Bloop.2831", "4", "4", "18", "15"],
["Suricatta.1029", "1", "1", "7", "7"],
["morsel.4670", "4", "4", "17", "17"],
["LiLMochaJoe.7456", "1", "1", "9", "9"],
["Kharashadora.9043", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "10", "8"],
["Beer Meister.5938", "0", "0", "0", "0"],
["ItIsAllAboutCake.6125", "4", "3", "16", "13"],
["Calgari.8671", "1", "1", "7", "3"],
["Banchou.5628", "4", "4", "16", "15"],
["Biot.7201", "2", "2", "9", "5"],
["Hikaro.1743", "1", "0", "6", "1"],
["TechnoTK.6498", "1", "1", "2", "1"],
["Ganix.1957", "4", "4", "17", "15"],
["Berticus.8167", "0", "0", "3", "1"],
["Grootella.1270", "3", "3", "13", "11"],
["Swagasarus.6150", "3", "1", "13", "2"],
["Dirddle.8524", "3", "2", "16", "9"],
["Stay Alive.2917", "3", "3", "14", "10"],
["sadmantha.6841", "3", "3", "14", "14"],
["Mori.8729", "2", "0", "8", "0"],
["JCthirteen.1985", "1", "1", "7", "3"],
["juniippurr.9521", "3", "3", "14", "13"],
["Gambit.8512", "3", "2", "8", "7"],
["Elani.1394", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "6", "6"],
["Nexle.8320", "3", "2", "10", "7"],
["Soushi.5132", "4", "0", "12", "1"],
["sachaa.8706", "4", "1", "16", "2"],
["Zugare.9032", "1", "1", "4", "3"],
["DaragangMagayon.1795", "3", "0", "8", "0"],
["takamina.9784", "3", "3", "10", "10"],
["Sglobe.4827", "4", "4", "18", "18"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "5", "0"],
["Maleficpanda.8350", "0", "0", "0", "0"],
["gferreira.1862", "1", "1", "6", "4"],
["Ayemes.5892", "1", "1", "2", "1"],
["Jarmeister.3419", "0", "0", "9", "2"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "0", "0", "2", "0"],
["Adiduh.9785", "3", "1", "9", "1"],
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
["Talcos.9723", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/30/2025 00:22:59"]],		
	
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


