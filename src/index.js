new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "6", "6"],
["theextendedname.4879", "6", "6", "20", "17"],
["Batercus.6257", "4", "1", "13", "5"],
["Bloop.2831", "5", "5", "18", "17"],
["Suricatta.1029", "1", "1", "6", "6"],
["morsel.4670", "6", "5", "19", "18"],
["LiLMochaJoe.7456", "4", "2", "8", "6"],
["Kharashadora.9043", "2", "0", "2", "0"],
["KrimsonWolf.6781", "2", "2", "9", "8"],
["Beer Meister.5938", "1", "0", "1", "0"],
["ItIsAllAboutCake.6125", "4", "3", "17", "13"],
["Calgari.8671", "1", "1", "6", "3"],
["Banchou.5628", "4", "4", "16", "15"],
["Biot.7201", "2", "0", "9", "6"],
["Hikaro.1743", "0", "0", "4", "1"],
["TechnoTK.6498", "2", "2", "3", "3"],
["Ganix.1957", "6", "5", "19", "17"],
["Berticus.8167", "0", "0", "0", "0"],
["Grootella.1270", "3", "3", "12", "11"],
["Swagasarus.6150", "3", "1", "12", "3"],
["Dirddle.8524", "5", "4", "17", "13"],
["Stay Alive.2917", "5", "3", "16", "11"],
["Mori.8729", "1", "0", "8", "0"],
["JCthirteen.1985", "0", "0", "4", "2"],
["juniippurr.9521", "3", "3", "14", "14"],
["Gambit.8512", "0", "0", "7", "6"],
["Elani.1394", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "1", "1"],
["Nexle.8320", "2", "2", "11", "7"],
["Soushi.5132", "2", "0", "12", "1"],
["sachaa.8706", "0", "0", "13", "4"],
["Zugare.9032", "0", "0", "2", "2"],
["DaragangMagayon.1795", "2", "0", "8", "0"],
["takamina.9784", "3", "3", "11", "11"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "0", "0"],
["Maleficpanda.8350", "0", "0", "0", "0"],
["gferreira.1862", "1", "1", "6", "6"],
["Ayemes.5892", "0", "0", "1", "1"],
["Jarmeister.3419", "0", "0", "4", "2"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "0", "0", "1", "0"],
["Adiduh.9785", "4", "1", "12", "2"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "1", "1"],
["Shrimpsanity.2107", "2", "2", "2", "2"],
["MrMarcello.3894", "0", "0", "0", "0"],
["Sef.7382", "0", "0", "0", "0"],
["Raijin.8452", "1", "0", "2", "0"],
["Hiram.6972", "0", "0", "0", "0"],
["Meen.2467", "3", "1", "4", "1"],
["DaBMz.5724", "1", "0", "4", "1"],
["PeriWrinkleButt.8691", "0", "0", "1", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["mrhnwt.9084", "3", "3", "7", "5"],
["Talcos.9723", "1", "1", "3", "2"],
["Singe.6103", "0", "0", "1", "0"],
["Kodes.5784", "3", "3", "4", "4"],
["PolarBear.5836", "0", "0", "1", "1"],
["Kalen Keywarden.4356", "0", "0", "1", "0"],
["amrtime.2150", "1", "0", "1", "0"],
["Icy Violin.9213", "0", "0", "0", "0"],
["Arkanus.5304", "3", "3", "5", "5"],
["virtual.3879", "0", "0", "0", "0"],
["bitshift.5491", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["08/10/2025 10:48:57"]],		
	
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


